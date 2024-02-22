
import {useContext, useEffect, useState} from 'react';
import { FlatList, Text, TouchableOpacity, View} from 'react-native';
import {AppContext, ToDoList} from '../../context/AppDataProvider';
import Card from '../../components/card/Card';

import styles from './completeTaskStyles';
import { CheckBox, Delete, EmptyBox, EmptyStar, FilledStar } from '../../assets/svg';
import { dateFormater } from '../../utils/dateFormater';

const CompeleteTask = () => {
  const {toDoList, setTodoList,date} = useContext(AppContext);
  const [completeToDoList,setCompleteToDoList]=useState<ToDoList[]>([])
  useEffect(()=>{
    const filteredData=toDoList.filter((e)=>dateFormater(e.date,'l')==dateFormater(date,'l') && e.isCheck && !e.isArchive)    
    setCompleteToDoList(filteredData)
  },[toDoList,date])

  return (
    <FlatList
      data={completeToDoList}
      ListEmptyComponent={()=><Text>No Data</Text>}
      renderItem={({item}) => {
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

        const leftSideIcons = (
          <TouchableOpacity style={styles.leftSideIcons} onPress={handleCheck}>
           {(item.isCheck) ? <CheckBox /> : <EmptyBox />}
          </TouchableOpacity>
        );
        const rightSideIcon = (
          <View style={styles.rightSideIcon}>
            <TouchableOpacity onPress={handleFavorite}>
              {(item.isFavorite) ? <FilledStar /> : <EmptyStar />}
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSoftDelete}>
             <Delete />
            </TouchableOpacity>
          </View>
        );
        return (
          <Card
            title={item.title}
            description={item.priority}
            leftSideIcons={leftSideIcons}
            rightSideIcon={rightSideIcon}
          />
        );
      }}
    />
  );
};
export default CompeleteTask;
