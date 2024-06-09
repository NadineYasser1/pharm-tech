import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/GlobalColors';


const EmptyCard = () => {
    return (
        <View style={styles.container} >
            <MaterialCommunityIcons name='alert-circle' size={50} color={Colors.white400} />
            <Text style={styles.text}>Nothing to show...</Text>
        </View >
    )
}

export default EmptyCard;

const styles = StyleSheet.create({
    container: {
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: Colors.white400,
        fontSize: 18,
        fontWeight: "500",
        margin: 10
    }
})

