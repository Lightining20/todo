import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootNavigationScreens } from "../types/navigation"
import { NavigationContainer } from "@react-navigation/native"
import DrawerNavigation from "./Drawer"
import SplashScreen from "../screens/SplashScreen/SplashScreen"

const Stack=createNativeStackNavigator<RootNavigationScreens>()
const RootNavigation=()=>{
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Drawer" component={DrawerNavigation}  options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
}

export default RootNavigation