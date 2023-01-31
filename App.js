import globalStyles from './globalStyles';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={globalStyles.container}>
        <StatusBar style="auto" />
        <Text>Dukaflani Mobile App!</Text>
      </View>
    </SafeAreaProvider>
  );
}

