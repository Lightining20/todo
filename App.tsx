import 'react-native-gesture-handler';
import RootNavigation from "./src/navigation/RootNavigation"
import { AppDataProvider } from './src/context/AppDataProvider';

const App=()=>{
  return  <AppDataProvider>
    <RootNavigation />
  </AppDataProvider>
}
export default App