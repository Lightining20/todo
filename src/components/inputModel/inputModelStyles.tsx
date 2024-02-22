import {StyleSheet} from 'react-native';
import {COLORS, MATRIX} from '../../theme';

const styles = StyleSheet.create({
  priorityList: {
    flexDirection: 'row',
  },
  addBtn: {
    padding: 5,
    backgroundColor: COLORS.WHITE_100,
  },
  addBtnTxt: {
    color: COLORS.PRIMARY,
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputField: {
    width: MATRIX.scale(250),

    color: COLORS.WHITE_100,
    borderBottomColor: COLORS.WHITE_100,
    borderBottomWidth: 1,
  },
  dateTxt: {
    width: MATRIX.scale(250),
    color: COLORS.WHITE_100,
    borderBottomColor: COLORS.WHITE_100,
    borderBottomWidth: 1,
  },
  modalInput: {
    height: 250,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.PRIMARY,
  },
  priortyTxt: {
    width: MATRIX.moderateScale(64),
    color: COLORS.PRIMARY,
    padding: 5,
    margin: 5,
    backgroundColor: COLORS.WHITE_100,
    borderRadius: 10,
  },
});
export default styles;
