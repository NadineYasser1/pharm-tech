import React from 'react';
import { View, StyleSheet, Modal, Animated, Easing } from 'react-native';

const LoadingSpinner = () => {
    const bounceValue = new Animated.Value(0);

    React.useEffect(() => {
        Animated.loop(
            Animated.spring(bounceValue, {
                toValue: 1,
                friction: 1,
                tension: 180,
                useNativeDriver: true,
            })
        ).start();
    }, [bounceValue]);

    const bounce = bounceValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 10],
    });

    return (
        <Modal transparent={true}>
            <View style={styles.backdrop}>
                <Animated.Image
                    source={require('../../assets/logo.png')}
                    style={[styles.logo, { transform: [{ translateY: bounce }] }]}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    logo: {
        width: 100,
        height: 100,
    },
});

export default LoadingSpinner;
