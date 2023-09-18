import { StyleSheet } from "react-native";
export default StyleSheet.create({
   flatlistMainView:{ width: '90%',height:70, alignSelf: 'center', marginTop: '3%', flexDirection: 'row',alignItems:"center" ,borderRadius:10, shadowColor: '#000',backgroundColor:"white",
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.5,
   shadowRadius: 2,
   elevation: 2
},
flatlistCardStyle:{ 
    width: 40,
     height: 40,
      borderRadius: 40 / 2, 
      backgroundColor: 'green',
       justifyContent: 'center', 
       alignItems: 'center',
       marginLeft:"4%"
     },
     circleText:{
         color: 'white',
          fontSize: 16
         },
         infoText:{
            fontSize: 14
         },
         informationView:{ 
            marginLeft: 10 
        },
        starTouchableStyle:{
            position:"absolute",
            right:10
        },
        safeAreaViewStyle:{
             flex: 1 
        },
        mainContainer:{
            flex:1
        },
        headerMainstyle: {
            height:90,
            backgroundColor:"green",
            flexDirection:"row",
            alignItems:"center"
        },
        menuTouchable:{
            width:50,
            height:50,
            justifyContent:"center",
            alignItems:"center"
        },
        dotTouchable:
        {
            position:"absolute",
            right:10,
            flexDirection:"row"
        },
        addEmployeeTouchable:{ 
            width:"40%", 
            height: 40,
            backgroundColor:"green",
            alignSelf:"center",
            alignItems:"center",
            justifyContent:"center"
        },
        sortText:{
           color:"white" 
        },
        buttonText:{
            color:"white" 
        }











})