import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import useLoading from '../../common/hooks/useLoading';
import { axios } from '../../common/config/axios';
import Layout from '../../common/components/Layout';
import { API } from '../../common/config/API';
import ListItem from '../../common/components/ListItem';
import EditItemModal from '../../common/components/EditItemModal';
import IconButton from '../../common/components/IconButton';
import { Colors } from '../../constants/GlobalColors';

const ItemsScreen = ({route, navigation}) => {
    const {pharmacyId, returnReqId} = route.params;
    const {loading, setIsLoading} = useLoading()
    const [items, setItems] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    const fetchData = () => {
        setIsLoading(true)
        axios.get(API.items.replace('{pharmacyId}', pharmacyId).replace('{returnRequestId}', returnReqId)).then(({data}) => {
           setItems(data)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setIsLoading(false)
        })
    }


    const handleDeleteItem = (itemId) => {
        setIsLoading(true)
        axios.delete(API.item.replace('{pharmacyId}', pharmacyId).replace('{returnRequestId}', returnReqId).replace('{itemId}', itemId)).then(({data}) => {
            fetchData()
        }).catch((err) => {        
            console.log(err)
        }).finally(() => {                      
            setIsLoading(false)
        })
    }

    const handleEditIconPress = (item) => {
        setSelectedItem(item)
        setIsModalVisible(true)
    }

    const handleUpdateItem = (updatedDescription) => {
        if (selectedItem) {
            setIsLoading(true)
            const updatedItem = {...selectedItem, description: updatedDescription}
            axios.put(API.item.replace('{pharmacyId}', pharmacyId).replace('{returnRequestId}', returnReqId).replace('{itemId}', selectedItem.id), updatedItem)
                .then(({}) => {
                    fetchData()
                    setIsModalVisible(false)
                    setSelectedItem(null)
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }

    useEffect(() => {
        fetchData()
        const intervalId = setInterval(fetchData, 60 * 1000); //To avoid caching when user navigates back to this screen
        navigation.setOptions({
            headerRight: () => (
                <IconButton icon='plus' size={24} color={Colors.primary800} onPress={() => navigation.navigate('AddItem', {pharmacyId: pharmacyId, returnReqId: returnReqId})}/>
            ),
        });
    return () => clearInterval(intervalId);
    }, [])

    return (
        <Layout loading={loading} style={styles.container}>
            {items && <FlatList 
                data={items}
                key={({item}) => item.id}
                renderItem={({item}) => (
                    <ListItem 
                        name={item.name}
                        ndc={item.ndc}
                        status={item.status}
                        description={item.description}
                        lotNumber={item.lotNumber}
                        strength={item.strength}
                        dosage={item.dosage}
                        fullQuantity={item.fullQuantity}
                        partialQuantity={item.partialQuantity}
                        manufacturer={item.manufacturer}
                        expirationDate={item.expirationDate}
                        packageSize={item.packageSize}
                        onDelete={() => handleDeleteItem(item.id)}
                        onUpdate={() => handleEditIconPress(item)}
                    />
                )}
            />}
            {selectedItem && (
                <EditItemModal
                    visible={isModalVisible}
                    value={selectedItem.description}
                    handleCancel={() => setIsModalVisible(false)}
                    handleUpdate={handleUpdateItem}
                />
            )}
        </Layout>
    )
}

export default ItemsScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10
    }
})
