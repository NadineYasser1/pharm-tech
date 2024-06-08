import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from "react-native"
import { Colors } from "../../constants/GlobalColors";

const InputField = ({ label, showLabel, placeholder, handleChange, keyboardType, secureTextEntry }) => {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            {showLabel && (
                <View>
                    <Text style={styles.label}>{label}</Text>
                </View>
            )}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={handleChange}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    autoCapitalize={false}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default InputField;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        width: '100%',
        paddingHorizontal: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
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
})
