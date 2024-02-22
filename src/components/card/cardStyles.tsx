import { StyleSheet } from "react-native";
import { MATRIX } from "../../theme";

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'white',
        width:MATRIX.moderateScale(250),
        alignSelf:'center',
        borderRadius:10,
        paddingBottom:MATRIX.moderateScale(10),
        paddingTop:MATRIX.moderateScale(10),
        margin:8
    },
    midleArea:{
        width:MATRIX.moderateScale(150),
        flexDirection:'column',
        
    }
})
export default styles