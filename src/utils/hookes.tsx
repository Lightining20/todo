import * as Navigation from '@react-navigation/native'
import { AllScreens } from '../types/navigation'


const useNavigation=()=>Navigation.useNavigation<Navigation.NavigationProp<AllScreens>>()

export {useNavigation}