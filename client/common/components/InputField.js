import React, { forwardRef } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from "../../constants/GlobalColors";

const InputField = ({ label, showLabel, placeholder, keyboardType, secureTextEntry, value, handleChange }) => {
    return (
        <View style={styles.container}>
            {showLabel && (
                <View>
                    <Text style={styles.label}>{label}</Text>
                </View>
            )}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    autoCapitalize='none'
                    onChangeText={handleChange}
                    value={value}
                />
            </View>
        </View>
    );
};

export default InputField;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        width: '100%',
        paddingHorizontal: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.white400,
        borderRadius: 20,
        padding: 10,
        paddingVertical: 10,
        fontSize: 18,
        width: '100%',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: Colors.primary800,
    },
    inputContainer: {
        width: '100%',
    }
});
