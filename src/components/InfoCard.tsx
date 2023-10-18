import { VStack, Text, Box } from "native-base";
import { ImageBackground } from "react-native";
import Button from "./Button";

export default function InfoCard() {
  const imgSource = { uri: "https://legacy.reactjs.org/logo-og.png" };
  //   const imgSource = { uri: require("../assets/bginfobginfo.png") };
  return (
    <VStack bg={"primary.500"} py={2} px={8} rounded={16}>
      <Text
        color={"primary.100"}
        fontSize={"lg"}
        w={"1/2"}
        fontWeight={"black"}
      >
        Encontre outros Quizzer’s para jogarem contigo!
      </Text>

      <Button
        title="Encontrar"
        width={"40%"}
        rounded={20}
        fontWeight={"semibold"}
        h={10}
        my={4}
        bgColor={"primary.400"}
      />
    </VStack>
  );
}
