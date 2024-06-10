import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, Pressable, Text, FlatList } from 'react-native';
import useLoading from '../../common/hooks/useLoading';
import Layout from '../../common/components/Layout';
import { Colors } from '../../constants/GlobalColors';
import Card from '../../common/components/Card';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { axios } from '../../common/config/axios';
import { API } from '../../common/config/API';
import NewRequestButton from '../../common/components/NewRequestButton';
import EmptyCard from '../../common/components/EmptyCard';
import CustomDropdown from '../../common/components/CustomDropdown';
import RequestItem from '../../common/components/RequestItem';


const windowHeight = Dimensions.get('window').height

const ReturnRequestsScreen = ({ navigation, route }) => {

    const pharmacyId = route.params
    const { loading, setIsLoading } = useLoading()
    const [requests, setRequests] = useState()

    const fetchData = () => {
        setIsLoading(true)
        axios.get(API.requests.replace('{pharmacyId}', pharmacyId)).then(({ data }) => {
            setRequests(data.content)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    const handleNewRequestButtonPress = () => {
        navigation.navigate('CreateRequest', pharmacyId)
    }

    handleNumItemsPress = (reqId) => {
        navigation.navigate("Items", {
            pharmacyId: pharmacyId,
            returnReqId: reqId
        })
    }

    useEffect(() => {
        fetchData()
        const intervalId = setInterval(fetchData,  60 * 1000); //To avoid caching when user navigates back to this screen

        return () => clearInterval(intervalId);
    }, [])

    return (
        <Layout loading={loading}>
            <View style={styles.topContainer}>
                <NewRequestButton onPress={handleNewRequestButtonPress} />
            </View>
            <View style={styles.bottomContainer}>
                {
                    requests ? <FlatList
                        data={requests}
                        key={({ item }) => item.returnRequest.id}
                        renderItem={({ item }) => <RequestItem
                            id={item.returnRequest.id}
                            numItems={item.numberOfItems}
                            createdAt={item.returnRequest.createdAt}
                            statusLabel={item.returnRequest.returnRequestStatusLabel}
                            status={item.returnRequest.returnRequestStatus}
                            serviceType={item.returnRequest.serviceType}
                            onPress={() => handleNumItemsPress(item.returnRequest.id)} />}
                    />
                        : <EmptyCard />
                }
            </View>
        </Layout>
    )
}

export default ReturnRequestsScreen

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: Colors.accent300,
        height: windowHeight > 750 ? windowHeight * 0.06 : windowHeight * 0.09,
        alignItems: 'center',
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80
    },
    bottomContainer: {
        marginTop: windowHeight * 0.06,

    }
})
