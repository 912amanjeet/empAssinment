import { StyleSheet,Platform } from "react-native";
export default StyleSheet.create({
        safeAreaViewStyle:{
             flex: 1 
        },
mainView:{
    flex:1,
    backgroundColor:"green",
    alignItems:"center",
    justifyContent:"center"
},
addEmployeeButton:{
    width:"50%",
    height:"5%",
     backgroundColor:"#2a6f21",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:Platform.OS == 'android' ?"30%":null
   
},
addEmployeeText:{
    color:"white",
    fontSize:20
}
})