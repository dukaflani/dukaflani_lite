import globalStyles from '../../styles/globalStyles';
// React Native Imports
import { View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Project Constants
import { THEME_COLORS } from '../../constants/colors';



const Header = ({ navigation }) => {
  return (
    <View style={globalStyles.headerNav}>
      <View>
        <Text style={globalStyles.text}>Headrer</Text>
      </View>
      <View style={globalStyles.navIconContainer}>
        <MaterialCommunityIcons style={globalStyles.navIcon} name="magnify" color={THEME_COLORS.iconColor} size={25} />
        <MaterialCommunityIcons style={globalStyles.navIcon} name="bell-outline" color={THEME_COLORS.iconColor} size={25} />
        <MaterialCommunityIcons style={globalStyles.navIcon} name="account-circle" color={THEME_COLORS.iconColor} size={25} />
        <MaterialCommunityIcons style={globalStyles.navIcon} name="dots-vertical" color={THEME_COLORS.iconColor} size={25} />
      </View>
    </View>
  )
}

export default Header