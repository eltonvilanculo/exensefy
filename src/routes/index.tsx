import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import TabRoutes from "./tabroutes";
import { useUser } from "../hooks/useUser";
import AuthRoutes from "./stackroutes/AuthRoutes";

export default function AppRoutes() {
  const { user } = useUser();
  return (
    <NavigationContainer>
      {!user.id ? (
        <AuthRoutes />
      ) : user.has_vehicle ? (
        user.id ? (
          <TabRoutes />
        ) : (
          <TabRoutes />
        )
      ) : (
        <TabRoutes />
      )}
    </NavigationContainer>
  );
}
