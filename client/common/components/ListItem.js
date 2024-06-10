import { View, Text, StyleSheet } from "react-native";
import Card from "./Card";
import IconButton from "./IconButton";
import { Colors } from "../../constants/GlobalColors";

const ListItem = ({ 
    onDelete, 
    onUpdate, 
    name, 
    dosage, 
    strength, 
    status, 
    fullQuantity, 
    partialQuantity, 
    expirationDate, 
    packageSize, 
    lotNumber, 
    description, 
    manufacturer, 
    ndc }) => {
return (
    <View style={styles.container}>
    <Card style={styles.card}>
        <View>
        <Text style={styles.boldText}>Name: <Text style={styles.normalText}>{name}</Text></Text>
        <Text style={styles.boldText}>Description: <Text style={styles.normalText}>{description}</Text></Text>
        <Text style={styles.boldText}>Dosage: <Text style={styles.normalText}>{dosage}</Text></Text>
        <Text style={styles.boldText}>Strength: <Text style={styles.normalText}>{strength}</Text></Text>
        <Text style={styles.boldText}>Status: <Text style={styles.normalText}>{status}</Text></Text>
        <Text style={styles.boldText}>Full Quantity: <Text style={styles.normalText}>{fullQuantity}</Text></Text>
        <Text style={styles.boldText}>Partial Quantity: <Text style={styles.normalText}>{partialQuantity}</Text></Text>
        <Text style={styles.boldText}>Expiration Date: <Text style={styles.normalText}>{expirationDate}</Text></Text>
        <Text style={styles.boldText}>Package Size: <Text style={styles.normalText}>{packageSize}</Text></Text>
        <Text style={styles.boldText}>Lot Number: <Text style={styles.normalText}>{lotNumber}</Text></Text>
        <Text style={styles.boldText}>Manufacturer: <Text style={styles.normalText}>{manufacturer}</Text></Text> 
        <Text style={styles.boldText}>NDC: <Text style={styles.normalText}>{ndc}</Text></Text>  
        </View>
    </Card>
    <IconButton icon='pencil-outline' color={Colors.primary800} size={22} onPress={onUpdate}/>
    <IconButton icon='trash-can-outline' color={Colors.error} size={22} onPress={onDelete}/>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    card: {
        width: '65%', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    boldText: {
        fontWeight: "700",
        marginVertical: 5
    },
    normalText: {
        fontWeight: "400",
        marginVertical: 5
    }
});

export default ListItem;