
import {useContext, useEffect, useState} from 'react';
import { FlatList, Text, TouchableOpacity, View} from 'react-native';
import {AppContext, ToDoList} from '../../context/AppDataProvider';
import Card from '../../components/card/Card';

import styles from './archiveTaskStyles';
import { CheckBox, Delete, EmptyBox, EmptyStar, FilledStar, Recycle } from '../../assets/svg';
import moment from 'moment';



const ArchiveTask = () => {
  const {toDoList, setTodoList,date} = useContext(AppContext);
  const [archiveList,setArchiveList]=useState<ToDoList[]>([])
  useEffect(()=>{
    const filteredData=toDoList.filter((e)=> e.isArchive)    
    setArchiveList(filteredData)
  },[toDoList])

  return (
    <FlatList
      data={archiveList}
      ListEmptyComponent={()=><Text>No Data</Text>}
      renderItem={({item}) => {
        const handletDelete = () =>
          setTodoList(data =>
            data.filter(e =>
              e.id == item.id 
            ),
          );
        const handleArchive=()=>setTodoList(data =>
            data.map(e => (e.id == item.id ? {...e, isArchive: !e.isArchive} : e)),
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
            <TouchableOpacity onPress={handleArchive}><Recycle /></TouchableOpacity>
            <TouchableOpacity onPress={handletDelete}>
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
export default ArchiveTask;
