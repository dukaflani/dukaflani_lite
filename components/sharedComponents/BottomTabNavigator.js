// React Navigation Imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// Screens
import Home from '../../screens/mainScreens/home';
import Profile from '../../screens/mainScreens/profile';
import Settings from '../../screens/mainScreens/settings';
// Project Constants
import { ROUTES } from '../../constants/routes'
import { THEME_COLORS } from '../../constants/colors';



const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: THEME_COLORS.activeIcon,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarItemStyle: {paddingTop: 3}
      }}
    >
      <Tab.Screen 
            name={ROUTES.HOME_TAB} 
            component={Home} 
            options={{
              tabBarLabel: 'Home', 
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
          }} 
          />
      <Tab.Screen 
            name={ROUTES.PROFILE_TAB} 
            component={Profile} 
            options={{
              tabBarLabel: 'Profile', 
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-details" color={color} size={size} />
              ),
              }} 
            />
      <Tab.Screen 
            name={ROUTES.SETTINGS_TAB} 
            component={Settings} 
            options={{
              tabBarLabel: 'Settings', 
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cogs" color={color} size={size} />
              ),
              }} 
            />
      <Tab.Screen 
            name={ROUTES.UPLOADS_TAB} 
            component={Settings} 
            options={{
              tabBarLabel: 'Add', 
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="plus-circle-outline" color={color} size={size} />
              ),
              }} 
            />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;