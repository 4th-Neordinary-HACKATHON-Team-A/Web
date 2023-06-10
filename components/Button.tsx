import { GestureResponderEvent, TouchableOpacity, Text, StyleSheet } from "react-native";
import COLORS from "../styles/colors";
import { LinearGradient } from 'expo-linear-gradient';

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
        onPress={e => onClick(e)}>
            <LinearGradient 
            // start={{x: 0.6, y: 0.1}} end={{x: 0.7, y: 1}}
            start={{x: 0.6, y: 0.1}} end={{x: 0.9, y: 1}}
            style={[style, {justifyContent: 'center', alignItems: 'center'}]}
            colors={[COLORS.PURPLE_100, '#1D1D1D']}>
                <Text style={textStyle}>{text}</Text>
            </LinearGradient>
            
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
    },
    whiteText: {
        color: '#FFFFFF',
        fontSize: 15, 
        fontWeight: '600',
    }
  })