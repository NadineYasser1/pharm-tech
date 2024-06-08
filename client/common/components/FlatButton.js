import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/GlobalColors';

const FlatButton = ({ text, onPress }) => {
    return (
        <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={onPress}
        >
            <View>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </Pressable>
    );
}

export default FlatButton;

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: Colors.primary800,
        borderRadius: 20,
        width: '60%',
        marginTop: 10,
        elevation: 2,
        shadowColor: Colors.accent500,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.15,
        shadowRadius: 1,
    },
    pressed: {
        opacity: 0.7,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: "500",
        fontSize: 16
    },
});