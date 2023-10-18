import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HistoryScreen from "../../screens/report/HistoryScreen";
import SpeedScreen from "../../screens/report/AlarmStatsScreen";
import StackTabRoutes from "./stacktab";
import AlarmStats from "../../screens/report/AlarmStatsScreen";
import { useTheme } from "native-base";
import { ChartLine, ClockClockwise, CloudCheck } from "phosphor-react-native";

const Tab = createMaterialTopTabNavigator();

export default function Toptab() {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          flexDirection: "row",
        },
        tabBarActiveTintColor: colors.primary[900],
        tabBarInactiveTintColor: colors.gray[300],
      }}
    >
      <Tab.Screen
        name="History"
        component={StackTabRoutes}
        options={{
          tabBarShowIcon: true,
          animationEnabled: true,

          tabBarLabel: "Event History",
          tabBarIcon: ({ color }) => <ClockClockwise color={color} />,
        }}
      />
      <Tab.Screen
        name="Alarm"
        component={AlarmStats}
        options={{
          tabBarShowIcon: true,
          animationEnabled: true,

          tabBarLabel: "Alarm Stats",
          tabBarIcon: ({ color }) => <ChartLine color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
