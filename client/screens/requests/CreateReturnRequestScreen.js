import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useLoading from '../../common/hooks/useLoading';
import Layout from '../../common/components/Layout';
import { axios } from '../../common/config/axios';
import { API } from '../../common/config/API';
import CustomDropdown from '../../common/components/CustomDropdown';
import { SERVICE_TYPES } from '../../constants/SERVICE_TYPES';
import FlatButton from '../../common/components/FlatButton';

const CreateReturnRequestsScreen = ({ route, navigation }) => {
    const pharmacyId = route.params
    const { loading, setIsLoading } = useLoading()
    const [reqData, setReqData] = useState()
    const [options, setOptions] = useState()

    const fetchData = () => {
        setIsLoading(true)
        axios.get(API.listWholesalers.replace('{pharmacyId}', pharmacyId)).then(({ data }) => {
            setOptions(data.map((wholesaler) => (
                { key: wholesaler.id, value: wholesaler.name }
            )))
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    const getOptionByKey = (key) => {
        switch (key) {
            case 1:
                return 'EXPRESS_SERVICE'
            case 2:
                return 'FULL_SERVICE'
        }
    }

    const handleSelectOption = (key, opt) => {
        setReqData((prev) => ({
            ...prev,
            [key]: opt
        }))
    }
    console.log(reqData)
    const handleCreateRequest = () => {
        setIsLoading(true)
        axios.post(API.requests.replace('{pharmacyId}', pharmacyId), reqData).then(({ data }) => {
            navigation.navigate('AddItem', {
                pharmacyId: pharmacyId,
                returnReqId: data.id
            })
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setIsLoading(false)
        })

    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <Layout loading={loading} style={styles.container}>
            <CustomDropdown
                options={SERVICE_TYPES}
                onSelect={(opt) => handleSelectOption('serviceType', getOptionByKey(opt))}
                dropdownStyles={styles.dropdown}
                defaultOption={SERVICE_TYPES[0]}
                label='Service Type' />
            {options &&
                <CustomDropdown
                    options={options}
                    onSelect={(opt) => handleSelectOption('wholesalerId', opt)}
                    dropdownStyles={styles.dropdown}
                    defaultOption={options[0]}
                    label='Wholesaler'
                    labelStyle={styles.label}
                />}
            <View style={styles.buttonContainer}>
                <FlatButton text='Create' onPress={handleCreateRequest} />
            </View>

        </Layout>
    )
}

export default CreateReturnRequestsScreen

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
    },
    dropdown: {
        marginStart: 10,
        marginVertical: 20
    },
    label: {
        paddingEnd: 10
    },
    buttonContainer: {
        alignItems: 'center',
        margin: 10
    }
})
