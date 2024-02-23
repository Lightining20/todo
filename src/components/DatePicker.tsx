import { StyleSheet, Text, View } from "react-native"
import moment from "moment";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppDataProvider";
import DatePicker from 'react-native-date-picker';




const changeDate=(date:Date,units:number)=>{
    return moment(date).add(units,'days').toDate()
}



const CustomDatePicker=()=>{
    
    const {date,setDate}=useContext(AppContext)
    const [datePickerState, setDatePickerState] = useState<boolean>(false);


    return <View style={styles.container}>
        <Text onPress={()=>setDate(changeDate(date,-1))}>{'<'}</Text>
        <Text style={styles.dateTxt} onPress={()=>setDatePickerState(true)}>{moment(date).format('dddd, D MMMM')}</Text>
        <Text onPress={()=>setDate(changeDate(date,1))}>{'>'}</Text>

        <DatePicker
        modal
        open={datePickerState}
        date={date}
        onConfirm={date => {
          setDate(date);
          setDatePickerState(false);
        }}
        onCancel={() => setDatePickerState(false)}
      />
    </View>
}
export default CustomDatePicker

const styles=StyleSheet.create({
  container:{
      flexDirection:'row',
      justifyContent:'center',
      height:30
  },
  dateTxt:{
      marginLeft:10,
      marginRight:10
  }
})