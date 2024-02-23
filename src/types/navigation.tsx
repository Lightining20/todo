import * as Navigation from '@react-navigation/native'
type RootNavigationScreens={
    Drawer:Navigation.NavigatorScreenParams<DrawerNavigationScreens>;
    SplashScreen:undefined
   
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

type AllScreens=RootNavigationScreens & TabBarNavigationScreens & DrawerNavigationScreens
export type {RootNavigationScreens,TabBarNavigationScreens,DrawerNavigationScreens,AllScreens}