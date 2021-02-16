import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList206232Navigator from '../features/NotificationList206232/navigator';
import Settings206231Navigator from '../features/Settings206231/navigator';
import Settings206223Navigator from '../features/Settings206223/navigator';
import UserProfile206221Navigator from '../features/UserProfile206221/navigator';
import BlankScreen0206127Navigator from '../features/BlankScreen0206127/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList206232: { screen: NotificationList206232Navigator },
Settings206231: { screen: Settings206231Navigator },
Settings206223: { screen: Settings206223Navigator },
UserProfile206221: { screen: UserProfile206221Navigator },
BlankScreen0206127: { screen: BlankScreen0206127Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
