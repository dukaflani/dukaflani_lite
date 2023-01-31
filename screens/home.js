import globalStyles from '../styles/globalStyles';

import { View, Text } from 'react-native'

import { Button } from '@rneui/themed'

const Home = ({ navigation }) => {

  const handlePress = () => {
    navigation.navigate('VideoDetail')
  }


  return (
    <View>
      <Text style={globalStyles.text}>home screen</Text>
      <Button title="watch video" onPress={handlePress}  />
    </View>
  )
}

export default Home;