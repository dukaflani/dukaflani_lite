import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import VideoDetail from '../screens/videoDetail';



const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}
    >
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
            title: 'Home',
          }}
         />
      <Stack.Screen 
        name="VideoDetail" 
        component={VideoDetail}
        options={{
            title: 'Play Video',
          }}
         />
    </Stack.Navigator>
  );
}

export default HomeStack;