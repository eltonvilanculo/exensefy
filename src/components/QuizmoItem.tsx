import { Box, Image, VStack, Text, HStack } from "native-base";

export default function QuizmoItem() {
  return (
    <VStack rounded={"8"} bg={"amber.100"} w={"1/6"} mr={2}>
      <Box w={"100%"} rounded={"8"}>
        <Image source={require("../assets/services/item.jpg")} w={"100%"} />
      </Box>

      <VStack p={2}>
        <Text color={"gray.500"} fontWeight={"bold"}>
          Convide os teus amigos
        </Text>

        <HStack shadow={"2"}>
          <Image />
          <Text>Elton Vilanculo</Text>
        </HStack>
      </VStack>
    </VStack>
  );
}
