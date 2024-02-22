import { createDrawerNavigator } from "@react-navigation/drawer"
import { DrawerNavigationScreens } from "../types/navigation"
import TabBarNavigation from "./TabBar"
import FavoriteTask from "../screens/FavoriteTask"
import ArchiveTask from "../screens/ArchiveTask"

const Drawer = createDrawerNavigator<DrawerNavigationScreens>()
const DrawerNavigation=()=>{
    return <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabBarNavigation} />
        <Drawer.Screen name='Favorite' component={FavoriteTask}/>
        <Drawer.Screen name="Archive" component={ArchiveTask}/>
    </Drawer.Navigator>
}

export default DrawerNavigation