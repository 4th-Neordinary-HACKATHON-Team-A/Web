import { View, Text, StyleSheet } from "react-native";
import COLORS from "../styles/colors";

interface ChatProps {
    text?: string;   
}

export const MyChat = ({text}: ChatProps) => {
    return (
        <View style={styles.myBox}>
            <Text style={styles.myText}>{text}</Text>
        </View>
    )
}
export const SystemChat = ({text}: ChatProps) => {
    return (
        <View style={styles.systemBox}>
            <Text style={styles.systemText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    myBox: {
        maxWidth: 213,
        backgroundColor: '#FFF',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    myText: {
        color: '#000',
        fontSize: 14,
        fontWeight: '600',
    },
    systemBox: {
        maxWidth: 213,
        backgroundColor: COLORS.PURPLE_100,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    systemText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '600',
    }
})