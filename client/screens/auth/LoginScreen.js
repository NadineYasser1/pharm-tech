import React, { useContext, useState } from 'react';
import { Image, View, StyleSheet, Dimensions, Text } from 'react-native';
import InputField from '../../common/components/InputField';
import FlatButton from '../../common/components/FlatButton';
import Slogan from '../../common/components/Slogan';
import useLoading from '../../common/hooks/useLoading';
import { axios } from '../../common/config/axios';
import { API } from '../../common/config/API';
import { AuthContext } from '../../store/AuthContext';
import Layout from '../../common/components/Layout';

const windowHeight = Dimensions.get('window').height

const LoginScreen = () => {
    const [loginData, setLoginData] = useState()
    const { loading, setIsLoading } = useLoading()
    const authCtx = useContext(AuthContext)

    const handleInputChange = (key, val) => {
        setLoginData((prev) => ({
            ...prev,
            [key]: val
        }))
    }

    const handleLogin = () => {
        setIsLoading(true)
        axios.post(API.login, loginData).then(({ data }) => {
            authCtx.authenticate(data.token)
        }).catch((err) => {
            console.log(err)
            //The api does not return an error message that indicates the error type or the form field that contains the error 
            //if it did we can either use Alert.alert('error', err.message)
            //or the api can return the fields where there is an error (e.g.: err.message: {username: 'Username is required'}) 
            //then we would have to set the border color of the field that has the error to Colors.error and show the message below that field
            //or add an error handler custom hook that shows the error alert depending on the response status code but I did not have time to do that :)

        }).finally(() => {
            setIsLoading(false)
        })


    }
    return (
        <Layout loading={loading} style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
                <Slogan />
            </View>
            <View style={styles.fieldsContainer}>
                <InputField placeholder='Username' showLabel={false} handleChange={(text) => handleInputChange('username', text)} />
                <InputField secureTextEntry={true} placeholder='Password' showLabel={false} handleChange={(text) => handleInputChange('password', text)} />
                <FlatButton text='Login' onPress={handleLogin} />
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: windowHeight * 0.15
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '30%'
    },
    logo: {
        width: 100,
        height: 100,
    },
    fieldsContainer: {
        height: '70%',
        width: '100%',
        alignItems: 'center',
    }
});

export default LoginScreen;