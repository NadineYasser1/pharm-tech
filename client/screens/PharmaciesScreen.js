import { Alert, Text, View, StyleSheet, Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Layout from '../common/components/Layout'
import useLoading from '../common/hooks/useLoading'
import PharmacyItem from '../common/components/PharmacyItem'
import { useEffect, useState } from 'react'
import { axios } from '../common/config/axios'
import { API } from '../common/config/API'
import { Colors } from '../constants/GlobalColors'

const windowHeight = Dimensions.get('window').height

const PharmaciesScreen = ({ navigation }) => {
    const { setIsLoading, loading } = useLoading()
    const [pharmacies, setPharmacies] = useState()
    const fetchData = () => {
        setIsLoading(true)
        axios.get(API.listPharmacies).then(({ data }) => {
            setPharmacies(data)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setIsLoading(false)
        })
    }
    const handleItemPress = (id, enabled) => {
        if (!enabled) {
            Alert.alert('error', 'You can not access this pharmacy!')
            return
        }
        navigation.navigate("ReturnRequests", id)
    }
    useEffect(() => {
        fetchData()
        const intervalId = setInterval(fetchData,  3 * 60 * 1000);  //To avoid caching when user navigates back to this screen

        return () => clearInterval(intervalId);
    }, [])

    return (
        <Layout loading={loading}>
            <View style={styles.topContainer}>
                <Text style={styles.title}>Pharmacies</Text>
            </View>
            {pharmacies && <FlatList
                data={pharmacies}
                key={({ item }) => item.pharmacyId}
                renderItem={({ item }) =>
                    <PharmacyItem
                        name={item.doingBusinessAs}
                        numberOfReturns={item.numberOfReturns}
                        enabled={item.enabled}
                        handlePharmacyPress={() => handleItemPress(item.pharmacyId, item.enabled)} />}
            />}
        </Layout>
    )
}

export default PharmaciesScreen

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: Colors.accent300,
        height: windowHeight > 750 ? windowHeight * 0.06 : windowHeight * 0.09,
        alignItems: 'center',
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
        marginBottom: 10
    },
    title: {
        color: Colors.primary800,
        fontSize: 15,
        fontWeight: "500",
        margin: 10
    }
})