import globalStyles from '../../styles/globalStyles';
// React Native Imports
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Profile = () => {
    const insets = useSafeAreaInsets();
    return (
      <View style={{
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        }}
      >
      <Text style={globalStyles.text}>profile</Text>
    </View>
  )
}

export default Profile