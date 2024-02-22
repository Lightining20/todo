import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootNavigationScreens } from "../types/navigation"
import { NavigationContainer } from "@react-navigation/native"
import DrawerNavigation from "./Drawer"

const Stack=createNativeStackNavigator<RootNavigationScreens>()
const RootNavigation=()=>{
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Drawer" component={DrawerNavigation}  options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
}

export default RootNavigation