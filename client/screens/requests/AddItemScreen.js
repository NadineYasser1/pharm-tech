import React, { useState, useEffect } from 'react';
import { ScrollView, Platform, View, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import Layout from '../../common/components/Layout';
import useLoading from '../../common/hooks/useLoading';
import InputField from '../../common/components/InputField';
import FlatButton from '../../common/components/FlatButton';
import{ axios }from '../../common/config/axios'
import{ API }from '../../common/config/API'
import ViewAllButton from '../../common/components/ViewAllButton';

const AddItemScreen = ({route, navigation}) => {
    const {pharmacyId, returnReqId} = route.params;
    console.log(returnReqId, pharmacyId)
    const { setIsLoading, loading } = useLoading();
    const [formData, setFormData] = useState({
        ndc: '',
        description: '',
        manufacturer: '',
        fullQuantity: '',
        partialQuantity: '',
        name: '',
        expirationDate: '',
        lotNumber: '',
        packageSize: '',
        requestType: '',
        dosage: '',
        strength: ''
    });

    const handleChange = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    };

    const handleAddItem = () => {
        setIsLoading(true)
        axios.post(API.items.replace('{pharmacyId}', pharmacyId).replace('{returnRequestId}', returnReqId), formData).then(({ data }) => {
           Alert.alert('Success', `${data.name} added successfully`)
           setFormData({
            ndc: '',
            description: '',
            manufacturer: '',
            fullQuantity: '',
            partialQuantity: '',
            name: '',
            expirationDate: '',
            lotNumber: '',
            packageSize: '',
            requestType: '',
            dosage: '',
            strength: ''  
           })
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <ViewAllButton onPress={() => navigation.navigate('Items', {pharmacyId: pharmacyId, returnReqId: returnReqId})}/>
            ),
        });
    }, [navigation]);

    return (
        <Layout loading={loading} style={styles.container}>
            <ScrollView>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <InputField
                    label='NDC'
                    showLabel
                    placeholder='NDC'
                    value={formData.ndc}
                    handleChange={(value) => handleChange('ndc', value)}
                />
                <InputField
                    label='Description'
                    showLabel
                    placeholder='Description'
                    value={formData.description}
                    handleChange={(value) => handleChange('description', value)}
                />
                <InputField
                    label='Manufacturer'
                    showLabel
                    placeholder='Manufacturer'
                    value={formData.manufacturer}
                    handleChange={(value) => handleChange('manufacturer', value)}
                />
                <InputField
                    label='Full Quantity'
                    showLabel
                    value={formData.fullQuantity}
                    placeholder='eg: 200'
                    handleChange={(value) => handleChange('fullQuantity', value)}
                />
                <InputField
                    label='Partial Quantity'
                    showLabel
                    placeholder='eg: 200'
                    value={formData.partialQuantity}
                    handleChange={(value) => handleChange('partialQuantity', value)}
                />
                <InputField
                    label='Name'
                    showLabel
                    placeholder='Name'
                    value={formData.name}
                    handleChange={(value) => handleChange('name', value)}
                />
                <InputField
                    label='Expiration Date'
                    showLabel
                    placeholder='YYYY-MM'
                    value={formData.expirationDate}
                    handleChange={(value) => handleChange('expirationDate', value)}
                />
                <InputField
                    label='Lot Number'
                    showLabel
                    placeholder='Lot Number'
                    value={formData.lotNumber}
                    handleChange={(value) => handleChange('lotNumber', value)}
                />
                <InputField
                    label='Package Size'
                    showLabel
                    placeholder='Package Size'
                    value={formData.packageSize}
                    handleChange={(value) => handleChange('packageSize', value)}
                />
                <InputField
                    label='Request Type'
                    showLabel
                    placeholder='Request Type'
                    value={formData.requestType}
                    handleChange={(value) => handleChange('requestType', value)}
                />
                <InputField
                    label='Dosage'
                    showLabel
                    placeholder='Dosage'
                    value={formData.dosage}
                    handleChange={(value) => handleChange('dosage', value)}
                />
                <InputField
                    label='Strength'
                    showLabel
                    placeholder='Strength'
                    value={formData.strength}
                    handleChange={(value) => handleChange('strength', value)}
                />
                <View style={styles.buttonContainer}>
                <FlatButton text="Add Item" onPress={handleAddItem} />
                </View>
                </KeyboardAvoidingView>
            </ScrollView>
            
        </Layout>
    );
};

export default AddItemScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10
    },
    buttonContainer: {
        alignItems: 'center',
    }
});
