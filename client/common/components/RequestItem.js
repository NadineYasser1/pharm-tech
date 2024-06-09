import { StyleSheet, View, Text } from "react-native";
import Card from "./Card";
import dayjs from "dayjs";
import FlatButton from "./FlatButton";
import { Colors } from "../../constants/GlobalColors";

const RequestItem = ({ id, createdAt, status, wholesaler, numItems, serviceType, statusLabel, onPress }) => {
    const getServiceType = (sType) => {
        switch (sType) {
            case 'EXPRESS_SERVICE': return 'Express Service';
            case 'FULL_SERVICE': return 'Full Service';
            default: return 'Unknown Service';
        }
    };

    return (
        <Card style={styles.card}>
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <View style={styles.headerCont}>
                        <Text style={styles.nameLabel}>{`Request ID: ${id}`}</Text>
                        <Text style={styles.dateLabel}>{'Created At ' + dayjs(createdAt).format('YYYY-MM-DD')}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.serviceTypeText}>{getServiceType(serviceType)}</Text>
                        <Text style={styles.statusText}>{statusLabel}</Text>
                    </View>
                    {wholesaler && <View style={styles.wholesalerContainer}>
                        <Text style={styles.wholesalerLabel}>Wholesaler:</Text>
                        <Text style={styles.wholesalerText}>{wholesaler}</Text>
                    </View>}
                </View>
            </View>
            <FlatButton text={`Number of Items ${numItems}`} onPress={onPress} />
        </Card>
    );
};

export default RequestItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    card: {
        alignItems: 'flex-start',
        padding: 10
    },
    infoContainer: {
        marginLeft: 10,
        flex: 1,
    },
    headerCont: {
        marginBottom: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameLabel: {
        fontWeight: "700",
        fontSize: 15,
        color: 'black',
        marginBottom: 1,
    },
    dateLabel: {
        fontWeight: "500",
        fontSize: 13,
        color: Colors.grey300,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    statusText: {
        fontSize: 13,
        fontWeight: "800",
        color: Colors.accent500,
    },
    serviceTypeText: {
        fontSize: 12,
        color: Colors.grey300,
        marginStart: 15
    },
    wholesalerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    wholesalerLabel: {
        fontWeight: "600",
        fontSize: 13,
    },
    wholesalerText: {
        fontWeight: "400",
        fontSize: 13,
        color: 'black',
        marginLeft: 4,
    },
});
