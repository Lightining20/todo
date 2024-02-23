import { Text, TouchableOpacity, View } from "react-native"
import { FC, ReactElement, useContext } from "react"
import { StyleSheet } from "react-native";
import { MATRIX } from "../theme";
import { AppContext, ToDoList } from "../context/AppDataProvider";
import { CheckBox, Delete, EmptyBox, EmptyStar, FilledStar, Recycle } from "../assets/svg";

type Card={
    item:ToDoList;
    type:'default' | 'favorite'  | 'archive';

}

const Card : FC<Card>=({
item,type
})=>{
    const {setTodoList}=useContext(AppContext)
    const handleSoftDelete = () =>
    setTodoList(data =>
      data.map(e =>
        e.id == item.id ? {...e, isArchive: !e.isArchive} : e,
      ),
    );

  const handleCheck = () =>
    setTodoList(data =>
      data.map(e => (e.id == item.id ? {...e, isCheck: !e.isCheck} : e)),
    );

  const handleFavorite = () =>
    setTodoList(data =>
      data.map(e =>
        e.id == item.id ? {...e, isFavorite: !e.isFavorite} : e,
      ),
    );
    const handletDelete = () =>
    setTodoList(data =>
      data.filter(e =>
        e.id == item.id 
      ),
    );
  const handleArchive=()=>setTodoList(data =>
      data.map(e => (e.id == item.id ? {...e, isArchive: !e.isArchive} : e)),
    );

    return <View style={styles.container}>
         <TouchableOpacity style={styles.leftSideIcons} onPress={handleCheck}>
           {(item.isCheck) ? <CheckBox /> : <EmptyBox />}
          </TouchableOpacity>
        <View style={styles.midleArea}>
           <Text>{item.title}</Text>
           <Text>{item.priority}</Text>
        </View>
       
        <View style={styles.rightSideIcon}>
            <TouchableOpacity onPress={handleFavorite}>
              {(item.isFavorite) ? <FilledStar /> : <EmptyStar />}
            </TouchableOpacity>
           { type=='archive' && <TouchableOpacity onPress={handleArchive}><Recycle /></TouchableOpacity>}
            <TouchableOpacity onPress={ (type=='archive') ? handletDelete : handleSoftDelete} >
             <Delete />
            </TouchableOpacity>
          </View>
    </View>
}
export default Card


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
        
    },
    rightSideIcon:{
        flexDirection:'row'
    },
    leftSideIcons:{
        width:MATRIX.moderateScale(40),
        margin:6
    }
})
