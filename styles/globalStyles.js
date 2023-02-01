// React Native Imports
import { StyleSheet } from "react-native";
// Project Constants
import { THEME_COLORS } from "../constants/colors";





const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: THEME_COLORS.appBackground
    },
    text: {
      fontFamily: 'Roboto-Regular',
      fontSize: 18,
      color: THEME_COLORS.textColor
    },
    paragraph: {
      marginVertical: 8,
      lineHeight: 20,
    },
    heading: {
      fontFamily: 'Roboto-Medium',
      color: THEME_COLORS.textColor
    }
  });


export default globalStyles
  