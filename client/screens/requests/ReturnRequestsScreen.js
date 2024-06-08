import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View, Pressable, Text } from 'react-native';
import useLoading from '../../common/hooks/useLoading';
import Layout from '../../common/components/Layout';
import { Colors } from '../../constants/GlobalColors';
import Card from '../../common/components/Card';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowHeight = Dimensions.get('window').height

const ReturnRequestsScreen = ({ navigation }) => {
    const { loading, setIsLoading } = useLoading()

    return (
        <Layout loading={loading}>
            <View style={styles.topContainer}>
                <View style={styles.buttonContainer}>
                    <Card>
                        <Pressable
                            style={styles.button}
                            onPress={() => navigation.navigate("CreateRequest")}
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
