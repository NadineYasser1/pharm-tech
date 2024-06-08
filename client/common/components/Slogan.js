import { StyleSheet, Text } from "react-native"
import { Colors } from "../../constants/GlobalColors"

const Slogan = () => {
    return (
        <Text style={styles.slogan}>Pharm Tech</Text>
    )
}

export default Slogan;

const styles = StyleSheet.create({
    slogan: {
        marginTop: 10,
        color: Colors.primary800,
        fontSize: 20,
        fontWeight: "500"
    }
})