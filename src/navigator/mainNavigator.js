import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial143097Navigator from '../features/Tutorial143097/navigator';
import Camera143096Navigator from '../features/Camera143096/navigator';
import EmailAuth143095Navigator from '../features/EmailAuth143095/navigator';
import Feed143091Navigator from '../features/Feed143091/navigator';
import Dashboard1143089Navigator from '../features/Dashboard1143089/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial143097: { screen: Tutorial143097Navigator },
Camera143096: { screen: Camera143096Navigator },
EmailAuth143095: { screen: EmailAuth143095Navigator },
Feed143091: { screen: Feed143091Navigator },
Dashboard1143089: { screen: Dashboard1143089Navigator },

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
