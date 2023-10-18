import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import SettingScreen from "../../screens/SettingScreen";
import HistoryScreen from "../../screens/report/HistoryScreen";
import Toptab from "../toptab";
import { useTheme } from "native-base";
import {
  Activity,
  HouseSimple,
  PlusCircle,
  Power,
  SignOut,
  SoccerBall,
  UserCircleMinus,
} from "phosphor-react-native";
import { Button, TouchableOpacity } from "react-native";
import { useUser } from "../../hooks/useUser";
import { storeData } from "../../utils/Storage";
import FakeHome from "../../screens/FakeHome";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const { setUser } = useUser();
  const handleLogout = async () => {
    await storeData("user_token", null, (result: any) => {
      if (result === true) {
        setUser("user_token", null);
      } else {
        console.log("token not saved" + result);
      }
    });
  };
  const { colors, sizes } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary[900],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarLabelPosition: "beside-icon",
        headerShown: false,
        headerTitleStyle: {
          color: "white",
          fontWeight: "500",
          textTransform: "uppercase",
        },
        headerStyle: {
          backgroundColor: colors.primary[400],
        },
        tabBarStyle: {
          position: "absolute",
          borderTopWidth: 0,
          backgroundColor: colors.primary[100],
          height: sizes[24],
        },
      }}
    >
      <Tab.Screen
        name="Início"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <HouseSimple color={color} />,
          title: "Home",
        }}
      />
      <Tab.Screen
        name="Actividades"
        component={Toptab}
        options={{
          tabBarIcon: ({ color }) => <Activity color={color} />,
          title: "Actividades",
          headerRight: () => (
            <TouchableOpacity
              onPress={handleLogout}
              style={{ paddingRight: 12 }}
            >
              <SignOut color="white" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      {/* <Tab.Screen
        name="Definições"
        
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color }) => <UserCircleMinus color={color} />,
          title: "Settings",
          headerRight: () => (
            <Button onPress={handleLogout} title="Sair" color="#fff" />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
