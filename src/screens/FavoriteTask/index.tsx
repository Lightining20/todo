
import {useContext, useEffect, useState} from 'react';
import { FlatList, Text, TouchableOpacity, View} from 'react-native';
import {AppContext, ToDoList} from '../../context/AppDataProvider';
import Card from '../../components/card/Card';

import styles from './favoriteTaskStyles';
import { CheckBox, Delete, EmptyBox, EmptyStar, FilledStar } from '../../assets/svg';

const FavoriteTask = () => {
  const {toDoList, setTodoList} = useContext(AppContext);
  const [favoriteList,setFavoriteList]=useState<ToDoList[]>([])
  useEffect(()=>{
    const filteredData=toDoList.filter((e)=>e.isFavorite && !e.isArchive)    
    setFavoriteList(filteredData)
  },[toDoList])

  return (
    <FlatList
      data={favoriteList}
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
export default FavoriteTask;
