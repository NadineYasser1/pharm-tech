import React, { useRef } from 'react';
import { Text, StyleSheet, ScrollView, Button } from 'react-native';
import Layout from '../../common/components/Layout';
import useLoading from '../../common/hooks/useLoading';
import InputField from '../../common/components/InputField';

const AddItemScreen = () => {
    const { setIsLoading, loading } = useLoading();
    const formRefs = {
        ndc: useRef(null),
        description: useRef(null),
        manufacturer: useRef(null),
        fullQuantity: useRef(null),
        partialQuantity: useRef(null),
        name: useRef(null),
        expirationDate: useRef(null),
        lotNumber: useRef(null),
        packageSize: useRef(null),
        requestType: useRef(null),
        dosage: useRef(null),
        strength: useRef(null),
    };

    const handleAddItem = async () => {
        const formData = {
            ndc: formRefs.ndc.current.value,
            description: formRefs.description.current.value,
            manufacturer: formRefs.manufacturer.current.value,
            fullQuantity: formRefs.fullQuantity.current.value,
            partialQuantity: formRefs.partialQuantity.current.value,
            name: formRefs.name.current.value,
            expirationDate: formRefs.expirationDate.current.value,
            lotNumber: formRefs.lotNumber.current.value,
            packageSize: formRefs.packageSize.current.value,
            requestType: formRefs.requestType.current.value,
            dosage: formRefs.dosage.current.value,
            strength: formRefs.strength.current.value,
        };
    };

    return (
        <Layout loading={loading} style={styles.container}>
            <ScrollView>
                <form onSubmit={handleAddItem}>
                    <InputField ref={formRefs.ndc} label='NDC' showLabel placeholder='NDC' />
                    <InputField ref={formRefs.description} label='Description' showLabel placeholder='Description' />
                    <InputField ref={formRefs.manufacturer} label='Manufacturer' showLabel placeholder='Manufacturer' />
                    <InputField ref={formRefs.fullQuantity} label='Full Quantity' showLabel placeholder='eg: 200' />
                    <InputField ref={formRefs.partialQuantity} label='Partial Quantity' showLabel placeholder='eg: 200' />
                    <InputField ref={formRefs.name} label='Name' showLabel placeholder='Name' />
                    <InputField ref={formRefs.expirationDate} label='Expiration Date' showLabel placeholder='YYYY-MM' />
                    <InputField ref={formRefs.lotNumber} label='Lot Number' showLabel placeholder='Lot Number' />
                    <InputField ref={formRefs.packageSize} label='Package Size ' showLabel placeholder='Package Size' />
                    <InputField ref={formRefs.requestType} label='Request Type' showLabel placeholder='Request Type' />
                    <InputField ref={formRefs.dosage} label='Dosage' showLabel placeholder='Dosage' />
                    <InputField ref={formRefs.strength} label='Strength' showLabel placeholder='Strength' />
                    <Button title="Add Item" onPress={handleAddItem} />
                </form>
            </ScrollView>
        </Layout>
    );
};

export default AddItemScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10
    }
});
