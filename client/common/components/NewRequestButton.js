import React from 'react';
import { Dimensions, StyleSheet, View, Pressable, Text } from 'react-native';
import { Colors } from '../../constants/GlobalColors'
import Card from './Card';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NewRequestButton = ({ onPress }) => {
    return (
        <View style={styles.buttonContainer}>
            <Card>
                <Pressable
                    style={styles.button}
                    onPress={onPress}
                >
                    <View style={styles.addButton}>
                        <MaterialCommunityIcons
                            name="plus-thick"
                            size={20}
                            color={Colors.primary800}
                        />
                    </View>
                    <Text style={styles.createButtonText}>
                        Create New Request
                    </Text>
                </Pressable>
            </Card>
        </View>
    )
}

export default NewRequestButton;

const styles = StyleSheet.create({

    buttonContainer: {
        justifyContent: 'flex-start',
        height: 100,
        width: '90%',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 10,
        paddingLeft: 10
    },
    addButton: {
        backgroundColor: Colors.accent200,
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        height: 35,
        borderRadius: 25,
    },
    createButtonText: {
        color: Colors.primary800,
        fontWeight: "600",
        fontSize: 15,
        marginLeft: 10,
    },

})
