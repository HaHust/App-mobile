import React, { useState, useMemo } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    FlatList,
    Dimensions,
    Modal,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SignIn from './SignIn';



const { width, height } = Dimensions.get("window");


const WelcomeMemo = ({ navigation }) => {

    const [showTerm, SetshowTerm] = useState(false);
    return (
        <View style={styles.containerWelcome}>
            <View style={{ alignItems: 'center', marginTop: 40 }}>
                <Text style={styles.h1}>
                    Trang chủ.
                    <Text style={styles.header}> CDI Vietnam</Text>
                </Text>
                <Text style={styles.headerBottom}>Máy lọc nước đầu nguồn</Text>
            </View>
            <View style={{ height: height / 2 - 20,width:width, paddingBottom: 20}}>
                <Image style={{width:width,height: height / 2 - 20,borderRadius:20 }} source={require("../assets/pictures/logo.png")}></Image>
            </View>
            <View>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#0f75bc', '#dceffb', '#0f75bc']} style={styles.buttonLogin}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.textButton}>Đăng nhập</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={styles.buttonSignup}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text
                            style={{
                                fontSize: 24, color: 'black',
                                fontFamily: 'Ubuntu-Regular'
                            }}>Đăng kí</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containerWelcome: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: 'white'

    },
    header: {
        fontSize: 35,
        color: '#0f75bc',
        fontWeight: 'bold',
    },
    headerBottom: {
        fontFamily: 'SourceSansPro-Regular',
        color: '#C5CCD6',
        fontSize: 20
    },
    h1: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    viewButton: {

    },
    buttonLogin: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: width / 1.3,
        height: width / 8,
        backgroundColor: '#2BDA8E',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 9,
            height: 9,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        elevation: 5,
    },
    buttonSignup: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: width / 1.3,
        height: width / 8,
        backgroundColor: '#FFF',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        elevation: 10,
    },
    textButton: {
        fontSize: 24,
        color: 'black',
        fontFamily: 'Ubuntu-Regular'
    }

})

const Welcome = React.memo(WelcomeMemo);
export default Welcome
