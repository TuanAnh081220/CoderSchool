import Constants from "expo-constants";
import { Dimensions } from "react-native";

const statusBarHeight = Constants.statusBarHeight;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export {
    statusBarHeight,
    screenWidth,
    screenHeight
};