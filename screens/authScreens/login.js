import globalStyles from '../../styles/globalStyles';
// React Native Imports
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Login = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      }}
    >
      <Text style={globalStyles.text}>login screen</Text>
    </View>
  )
}

export default Login;