import { StyleSheet, Platform } from "react-native";
import constant from "../../constants";

export default StyleSheet.create({
    container: {
        // backgroundColor: "white",

    },
    linearStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: constant.vh(145),
        top: 0,
        justifyContent: 'center'

    },
    profileView: {
        flexDirection: 'row',
        marginTop: constant.vh(45),
        marginHorizontal: constant.vw(20)
    },
    personAvatar: {
        marginRight: constant.vw(19)
    },
    personText: {
        color: constant.colors.whiteColor,
        fontFamily: constant.fonts.InterBold,
        //fontWeight: '600',
        fontSize: constant.vh(16),
        marginTop: constant.vh(5)
    },
    viewProfile: {
        width: constant.vw(98),
        height: constant.vh(28),
        backgroundColor: constant.colors.color_0A0045,
        borderRadius: constant.vw(40),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: constant.vh(8),

    },
    viewProfileText: {
        fontFamily: constant.fonts.InterSemiBold,
        fontSize: constant.vh(12),
        //fontWeight: '500',
        color: constant.colors.whiteColor
    },
    listItem: {
        backgroundColor: constant.colors.whiteColor,
        marginTop: Platform.OS === 'ios' ? constant.vh(137) : constant.vh(150),
        marginLeft: constant.vh(18)
    },
    menuText: {
        color: constant.colors.color_A1B3C9,
        fontFamily: constant.fonts.InterSemiBold,
       // fontWeight: '500',
        fontSize: constant.vh(14),
    },
    listContainer: {

    },
    drawerCustomList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: constant.vh(20),
    },
    iconImage: {

    },
    labelText: {
        marginLeft: constant.vh(13),
        alignSelf: 'center',
        fontSize: constant.vh(14),
       // fontWeight: '700',
        fontFamily: constant.fonts.InterBold,
        color: constant.colors.color_1A264E
    },
    arrowImage: {
        marginRight: constant.vh(20)
    },
    bottomView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: constant.colors.whiteColor,
        paddingTop: constant.vh(20),
        paddingBottom: constant.vh(10)
    },
    versionStyle: {
        color: constant.colors.color_A1B3C9,
        fontSize: constant.vh(12),
        fontWeight: '700',
        fontFamily: constant.fonts.Avenir
    },
    bottomLine: {
        width: constant.vw(230),
        height: constant.vh(2),
        backgroundColor: constant.colors.color_EDF5F9
    }
    // logout: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     padding: 10
    // },
    // logoutText: {
    //     fontSize: constant.vw(16),
    //     color: constant.colors.whiteColor,
    //     marginHorizontal: constant.vw(15)
    // },
    // logoutIcon: {
    //     marginLeft: constant.vw(10)
    // }
})