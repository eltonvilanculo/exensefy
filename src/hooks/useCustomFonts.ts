import { useFonts } from "expo-font";

export default function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    Nunito: require("../../assets/fonts/Nunito/Nunito.ttf"),
    NunitoThin: require("../../assets/fonts/Nunito/static/Nunito-ExtraLight.ttf"),
    NunitoRegular: require("../../assets/fonts/Nunito/static/Nunito-Regular.ttf"),
    NunitoMedium: require("../../assets/fonts/Nunito/static/Nunito-Medium.ttf"),
    NunitoSemi: require("../../assets/fonts/Nunito/static/Nunito-SemiBold.ttf"),
    NunitoBold: require("../../assets/fonts/Nunito/static/Nunito-Bold.ttf"),
    NunitoExtra: require("../../assets/fonts/Nunito/static/Nunito-ExtraBold.ttf"),
    RubikMedium: require("../../assets/fonts/Rubik/Rubik-Medium.ttf"),
    RubikSemiBold: require("../../assets/fonts/Rubik/Rubik-SemiBold.ttf"),
    RubikBold: require("../../assets/fonts/Rubik/Rubik-Bold.ttf"),
  });

  return { fontsLoaded };
}
