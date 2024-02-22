import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './inputModelStyles';
import DatePicker from 'react-native-date-picker';
import {useContext, useState} from 'react';
import {AppContext} from '../../context/AppDataProvider';
import moment from 'moment';
import {CONATANT_ARR} from '../../constant';
import { COLORS } from '../../theme';

const InputModel = ({
  modalState,
  setModalState,
}: {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {setTodoList} = useContext(AppContext);
  const [datePickerState, setDatePickerState] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [priority, setPrioroty] = useState<string>('High');
  
  const dateFormater = (date: Date, formate: string) => {
    return moment(date).format(formate);
  };

  const addToDoList = () => {
    setTodoList(e => [
      ...e,
      {
        id: new Date().toString(),
        date: date,
        isArchive: false,
        isCheck: false,
        isFavorite: false,
        priority: priority,
        title: title,
      },
    ]);
    setModalState(false)
  };
  return (
    <View>
      <Modal
        visible={modalState}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalState(false)}>
        <View style={styles.modal}>
          <View style={styles.modalInput}>
          <TextInput onChangeText={(e)=>setTitle(e)} style={styles.inputField} placeholder="Task Name" placeholderTextColor='white' />
          <Text onPress={() => setDatePickerState(true)} style={styles.dateTxt}>
            {dateFormater(date, 'dddd, D MMMM')}
          </Text>
          <View style={styles.priorityList}>
            {CONATANT_ARR.PRIORITY_LIST.map(e => {
              return <Text style={styles.priortyTxt} onPress={() => setPrioroty(e)}>{e}</Text>;
            })}
          </View>
          <TouchableOpacity onPress={addToDoList} style={styles.addBtn}>
            <Text style={styles.addBtnTxt}>Add Task</Text>
          </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  );
};
export default InputModel;
