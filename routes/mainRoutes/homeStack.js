import React from 'react';
// React Navigation
import { createStackNavigator } from '@react-navigation/stack';
// Project Constants
import { ROUTES } from '../../constants/routes';
import { THEME_COLORS } from '../../constants/colors';
// Shared Components
import BottomTabNavigator from '../../components/sharedComponents/BottomTabNavigator';
import Header from '../../components/sharedComponents/Header';
// Screens 
import Login from '../../screens/authScreens/login';
import VideoDetail from '../../screens/mainScreens/videoDetail';



const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
        initialRouteName={ROUTES.HOME}
        screenOptions={{
            headerMode: 'screen',
            headerTintColor: THEME_COLORS.textColor,
            headerStyle: { backgroundColor: THEME_COLORS.headerColor },
          }}
    >
      <Stack.Screen 
        name={ROUTES.HOME} 
        component={BottomTabNavigator}
        options={({ navigation }) => {
          return {
            headerTitle: () => <Header navigation={navigation} />,
          }
        }}
         />
      <Stack.Screen 
        name={ROUTES.VIDEODETAIL} 
        component={VideoDetail}
        options={{
            title: 'Play Video',
            headerShown: false
          }}
         />
      <Stack.Screen 
        name={ROUTES.LOGIN} 
        component={Login}
        options={{
            title: 'Login',
            headerShown: false
          }}
         />
    </Stack.Navigator>
  );
}

export default HomeStack;