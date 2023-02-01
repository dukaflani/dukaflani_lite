import 'react-native-gesture-handler';
// Styles
import globalStyles from './styles/globalStyles';
// React Imports
import { useCallback } from 'react';
// Expo Imports
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as NavigationBar from 'expo-navigation-bar';

// React Native Imports
import {  View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
// Project Routes
import HomeStack from './routes/mainRoutes/homeStack';
// Shared Components
import BottomTabNavigator from './components/sharedComponents/BottomTabNavigator';


SplashScreen.preventAutoHideAsync();

export default function App() {
  NavigationBar.setBackgroundColorAsync("white");
  NavigationBar.setButtonStyleAsync("dark");
  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <View style={globalStyles.container} onLayout={onLayoutRootView} >
          <HomeStack/>
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

