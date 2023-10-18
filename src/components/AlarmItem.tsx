import { Ionicons } from "@expo/vector-icons";
import { Box, Text, HStack, Button, useTheme } from "native-base";
import { TouchableOpacity } from "react-native";
import { AlarmResponsInterface } from "../utils/Interface";
import { useNavigation } from "@react-navigation/native";

export default function AlarmItem({
  item,
  handlePopupDetail,
}: {
  item: AlarmResponsInterface;
  handlePopupDetail: any;
}) {
  const navigation = useNavigation();
  const handleScreenDetail = () => {
    // navigation.navigate("details", { item });
  };
  return (
    <Box
      bg="white"
      borderRadius={10}
      p={2}
      mb={3}
      shadow={2}
      borderWidth={1}
      borderColor="gray.200"
    >
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box ml={2} mr={2}>
          <Text fontSize={20} fontWeight="bold" mb={1} color="gray.600">
            {item.type}
          </Text>
          <Text fontSize={16} color="gray.500" mb={1}>
            Alarm Time: {new Date(item.created_at).toLocaleString()}
          </Text>

          <HStack space={2} mt={2}>
            <TouchableOpacity onPress={handlePopupDetail}>
              <Ionicons name="information-circle" size={16} color="#0172BD" />
            </TouchableOpacity>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
