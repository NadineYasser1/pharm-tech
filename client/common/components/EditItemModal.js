import React, { useState, useEffect } from 'react';
import { Modal, View, Text, StyleSheet, Pressable } from 'react-native';
import FlatButton from './FlatButton';
import InputField from './InputField';

const EditItemModal = ({ visible, value, handleCancel, handleUpdate }) => {
    const [newDesc, setNewDesc] = useState(value)

    useEffect(() => {
        setNewDesc(value)
    }, [value])

    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="pop"
            onRequestClose={handleCancel}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.modalTitle}>Edit Item</Text>
                        <Pressable onPress={handleCancel}>
                            <Text>Cancel</Text>
                        </Pressable>
                    </View>
                    <InputField 
                        label='Description'
                        showLabel={true}
                        value={newDesc}
                        handleChange={(value) => setNewDesc(value)}
                    />
                    <FlatButton text="Update" onPress={() => handleUpdate(newDesc)} />
                </View>
            </View>
        </Modal>
    );
};

export default EditItemModal;

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }
});
