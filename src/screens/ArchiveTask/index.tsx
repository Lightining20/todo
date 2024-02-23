import {useContext} from 'react';
import {FlatList, Text} from 'react-native';
import {AppContext} from '../../context/AppDataProvider';
import Card from '../../components/Card';

const ArchiveTask = () => {
  const {toDoList} = useContext(AppContext);

  return (
    <FlatList
      data={toDoList.filter(e => e.isArchive)}
      ListEmptyComponent={() => <Text>No Data</Text>}
      renderItem={({item,index}) => <Card key={index*0.234} item={item} type="archive" />}
    />
  );
};
export default ArchiveTask;
