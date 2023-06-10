import { GestureResponderEvent, TouchableOpacity, Text, StyleSheet } from "react-native";
import COLORS from "../styles/colors";

interface Props {
    textStyle: Object;
    style: Object;
    text?: string;
    onClick?: (e: GestureResponderEvent) => void;
}
interface ButtonProps {
    text?: string;
    onClick?: (e: GestureResponderEvent) => void;
    width?: number;
    height?: number;
}

export const CustomButton = ({style, textStyle, text, onClick=()=>{}}: Props) => {
    return (
        <TouchableOpacity
        style={[style, {justifyContent: 'center', alignItems: 'center'}]}
        onPress={e => onClick(e)}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    );
}

export const PurpleFullButton = ({width=253, height=68, text, onClick=()=>{}}: ButtonProps) => {
    return (
        <CustomButton
        style={[styles.purpleFullButton, {width: width, height: height}]}
        onClick={onClick}
        text={text}
        textStyle={styles.whiteText}
        />
    );
}


const styles = StyleSheet.create({
    purpleFullButton: {
        borderRadius: 34,
        backgroundColor: COLORS.PURPLE_100,
    },
    whiteText: {
        color: '#FFFFFF',
        fontSize: 15, 
        fontWeight: '600',
    }
  })