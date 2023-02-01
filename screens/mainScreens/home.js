import globalStyles from '../../styles/globalStyles';
// Project Constants
import { ROUTES } from '../../constants/routes';
// React Native Imports
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// React Native Elements Imports
import { Button } from '@rneui/themed'

const Home = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const handlePlayVideo = () => {
    navigation.navigate(ROUTES.VIDEODETAIL)
  }

  const handleGoToLoginPage = () => {
    navigation.navigate(ROUTES.LOGIN)
  }


  return (
      <View style={{
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          }}
        >
        <Text style={globalStyles.text}>home screen</Text>
        <Button title="watch video" onPress={handlePlayVideo}  />
        <Button title="Login" onPress={handleGoToLoginPage}  />
      </View>
  )
}

export default Home;