import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/auth/Login";

export default function AuthRoutes() {
  const Stack = createStackNavigator();

  const configHeader = {
    headerShown: false,
  };
  return (
    <Stack.Navigator screenOptions={configHeader}>
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
}
