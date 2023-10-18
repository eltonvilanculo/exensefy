import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../../screens/auth/Login";
import HistoryScreen from "../../../screens/report/HistoryScreen";
import DetailScreen from "../../../screens/report/DetailScreen";

export default function StackTabRoutes() {
  const Stack = createStackNavigator();

  const configHeader = {
    headerShown: false,
  };
  return (
    <Stack.Navigator screenOptions={configHeader}>
      <Stack.Screen name="alarm" component={HistoryScreen} />
      <Stack.Screen name="details" component={DetailScreen} />
    </Stack.Navigator>
  );
}
