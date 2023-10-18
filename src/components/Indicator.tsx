import { HStack, Text, useTheme } from "native-base";

import {
  ArrowArcRight,
  ArrowElbowRight,
  ArrowRight,
} from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

type IndicatorProps = {
  name: string;
  link: string;
};

export default function Indicator({ name, link }: IndicatorProps) {
  const { colors } = useTheme();
  return (
    <HStack
      justifyContent={"space-between"}
      mt={"6"}
      mb={"6"}
      px={2}
      alignItems={"center"}
    >
      <Text color="gray.500" fontSize={"xl"} fontWeight={"bold"}>
        {name}
      </Text>
      <TouchableOpacity>
        <HStack alignItems={"center"}>
          <Text color="primary.200" fontSize={"md"} fontWeight={"bold"} mr={2}>
            Ver Mais
          </Text>
          <ArrowRight size={20} color={colors.primary[200]} />
        </HStack>
      </TouchableOpacity>
    </HStack>
  );
}
