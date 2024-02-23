import {useContext} from 'react';
import {FlatList, Text} from 'react-native';
import {AppContext} from '../../context/AppDataProvider';
import Card from '../../components/Card';

const FavoriteTask = () => {
  const {toDoList} = useContext(AppContext);

  return (
    <FlatList
      data={toDoList.filter(e => e.isFavorite && !e.isArchive)}
      ListEmptyComponent={<Text>No Data</Text>}
      renderItem={({item,index}) => <Card key={index*0.090909} item={item} type="favorite" />}
    />
  );
};
export default FavoriteTask;
