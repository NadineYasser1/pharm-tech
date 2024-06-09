import { Pressable, StyleSheet, View, Text } from 'react-native'
import Card from './Card'
import { Colors } from '../../constants/GlobalColors'

const PharmacyItem = ({ name, enabled, numberOfReturns, handlePharmacyPress }) => {
    return (
        <Pressable onPress={handlePharmacyPress}>
            <Card style={styles.container}>
                <Text style={[styles.name, !enabled && { color: Colors.white400 }]}>{name}</Text>
                <Text style={styles.numReturns}>{numberOfReturns.toString()} Returns</Text>

            </Card>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
    },
    numReturns: {
        color: Colors.grey300,
        fontWeight: "500"
    }
})

export default PharmacyItem
