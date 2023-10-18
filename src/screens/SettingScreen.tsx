import React from "react";
import { Box, Text } from "native-base";
import { Switch, Select } from "native-base";
import { FontAwesome5, MaterialIcons, AntDesign } from "@expo/vector-icons";

export default function SettingScreen() {
  return (
    <Box flex={1} bg="gray.100" p={4}>
      <Box bg="white" borderRadius={10} p={3} mb={3} shadow={3}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box flexDirection="row" alignItems="center">
            <FontAwesome5
              name="bell"
              size={20}
              color="#4186F4"
              style={{ marginRight: 10 }}
            />
            <Text fontSize={16} fontWeight="bold" color="#4186F4">
              Notificações
            </Text>
          </Box>
          <Switch color="#4186F4" />
        </Box>
      </Box>
      <Box bg="white" borderRadius={10} p={3} mb={3} shadow={3}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box flexDirection="row" alignItems="center">
            <MaterialIcons
              name="language"
              size={20}
              color="#4186F4"
              style={{ marginRight: 10 }}
            />
            <Text fontSize={16} fontWeight="bold" color="#4186F4">
              Idioma
            </Text>
          </Box>
          <Select
            minWidth="200"
            accessibilityLabel="Selecione o Idioma"
            placeholder="Selecione o Idioma"
            mt={1}
            onValueChange={(itemValue) => console.log(itemValue)}
          >
            <Select.Item label="Inglês" value="en" />
            <Select.Item label="Português" value="pt" />
          </Select>
        </Box>
      </Box>

      <Box bg="white" borderRadius={10} p={3} mb={3} shadow={3}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box flexDirection="row" alignItems="center">
            <AntDesign
              name="bulb1"
              size={20}
              color="#4186F4"
              style={{ marginRight: 10 }}
            />
            <Text fontSize={16} fontWeight="bold" color="#4186F4">
              Modo Escuro
            </Text>
          </Box>
          <Switch color="#4186F4" />
        </Box>
      </Box>

      <Box bg="white" borderRadius={10} p={3} mb={3} shadow={3}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box flexDirection="row" alignItems="center">
            <MaterialIcons
              name="location-on"
              size={20}
              color="#4186F4"
              style={{ marginRight: 10 }}
            />
            <Text fontSize={16} fontWeight="bold" color="#4186F4">
              Permissão de Localização
            </Text>
          </Box>
          <Switch color="#4186F4" />
        </Box>
      </Box>
    </Box>
  );
}
