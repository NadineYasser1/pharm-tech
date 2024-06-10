import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/GlobalColors";

const ViewAllButton = ({ onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <MaterialCommunityIcons name='view-parallel' size={24} color={Colors.primary800} />
            <Text style={styles.text}>View All Items</Text>
        </Pressable>
    );
}

export default ViewAllButton;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12
    },

    text: {
        color: Colors.primary800,
        fontSize: 10,
        marginTop: 5
    }
})