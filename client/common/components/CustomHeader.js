import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { Colors } from '../../constants/GlobalColors';
import LogoutButton from './LogoutButton';
import IconButton from './IconButton';

const windowHeight = Dimensions.get('window').height;

const CustomHeader = ({ navigation, showBackButton }) => {
    const handleBackButtonPress = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            {showBackButton && <IconButton icon='chevron-left' size={35} color={Colors.primary800} onPress={handleBackButtonPress} />}
            <View style={[styles.logoContainer, !showBackButton && { marginLeft: 40, marginRight: 0 }]}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            {!showBackButton &&
                <LogoutButton color={Colors.primary800} />
            }
        </View>
    );
};

const styles = {
    container: {
        paddingTop: windowHeight * 0.07,
        // paddingBottom: windowHeight * 0.01,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: Colors.accent300,
        // borderBottomLeftRadius: 60,
        // borderBottomRightRadius: 60
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // marginLeft: 40
        marginRight: 40
    },
    logo: {
        width: 60,
        height: 60,
    },
};

export default CustomHeader;
