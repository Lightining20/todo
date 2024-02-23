import {useContext} from 'react';
import {FlatList, Text} from 'react-native';
import {AppContext} from '../../context/AppDataProvider';
import Card from '../../components/Card';
import moment from 'moment';

const CompeleteTask = () => {
  const {toDoList, date} = useContext(AppContext);

  return (
    <FlatList
      data={toDoList.filter(
        e =>
          moment(e.date).format('l') == moment(date).format('l') &&
          e.isCheck &&
          !e.isArchive,
      )}
      ListEmptyComponent={() => <Text>No Data</Text>}
      renderItem={({item,index}) => <Card key={index*0.888} item={item} type="default" />}
    />
  );
};
export default CompeleteTask;
