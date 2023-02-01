// React Navigation Imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import Home from '../../screens/mainScreens/home';
import Profile from '../../screens/mainScreens/profile';
// Project Constants
import { ROUTES } from '../../constants/routes'



const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROUTES.HOME_TAB} component={Home} options={{title: 'Home', headerShown: false}} />
      <Tab.Screen name={ROUTES.PROFILE_TAB} component={Profile} options={{title: 'Profile', headerShown: false}} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;