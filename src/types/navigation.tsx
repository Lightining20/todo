import * as Navigation from '@react-navigation/native'
type RootNavigationScreens={
    Drawer:Navigation.NavigatorScreenParams<DrawerNavigationScreens>;
   
}
type TabBarNavigationScreens={
    All:undefined;
    Incomplete:undefined
    complete:undefined
}

type DrawerNavigationScreens={
    Home:Navigation.NavigatorScreenParams<TabBarNavigationScreens>
    Favorite:undefined;
    Archive:undefined
   
}

export type {RootNavigationScreens,TabBarNavigationScreens,DrawerNavigationScreens}