import "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import AppRoutes from "./src/routes";
import { theme } from "./src/utils/theme";
import AuthProvider from "./src/utils/Provider";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import useCustomFonts from "./src/hooks/useCustomFonts";

export default function App() {
  const { fontsLoaded } = useCustomFonts();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <NativeBaseProvider theme={theme}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </NativeBaseProvider>
    </View>
  );
}
