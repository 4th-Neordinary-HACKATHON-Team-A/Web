import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import ChatBarIcon from '../../assets/svg/ChatBarIcon';
import CustomInput from '../../components/CustomInput';
import COLORS from '../../styles/colors';

export const ChatBottom = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.chatBarBox} >
                <View style={styles.chatBar}/>
                <View style={styles.chatBarIcon}><ChatBarIcon/></View>
                <View style={styles.chatBar}/>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{width: '90%'}}>
                    <CustomInput />
                </View>
                <TouchableOpacity style={styles.BtnBox}>
                    <Text style={styles.submitBtn}>전송</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    BtnBox: {
        marginLeft: 11,
        justifyContent: "center",
    },
    submitBtn: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 17,
    },
    chatBar: {
        width: '43%',
        height: 1,
        backgroundColor: COLORS.PURPLE_100,
        justifyContent: "center",
    },
    chatBarBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 15,
    },
    chatBarIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 25
    },
    footer: {
        position: 'absolute',
        bottom: 20,
    }
})

export default ChatBottom;