import { Container, Text, Box, Card, Icon } from "native-base";
import React, { useEffect } from "react";
import { View } from "react-native";
import { AlarmResponsInterface } from "../../utils/Interface";
import { NavigationProp } from "@react-navigation/native";
import MyMap from "../../components/MyMap";
import MyPolyline from "../../components/Pollyline";

// import { Container } from './styles';

const DetailScreen: React.FC = ({ route }: NavigationProp) => {
  const data: AlarmResponsInterface = route.params.item;
  useEffect(() => {
    console.log(data.imei);
  }, []);
  return (
    <Container>
      <Box>
        <View style={{ flex: 1 }}>
          <Box bg={"primary.900"} p={3} flexDirection="row" alignItems="center">
            {/* Infobar1 */}
            <Card flex={1}>
              <Text
                color="white"
                fontSize="md"
                fontWeight="bold"
                textAlign="center"
              >
                {data.acc === "1" ? "ACC: ON" : "ACC: OFF"}
              </Text>
            </Card>
            {/* Infobar2 */}
            <Box mx={2} height={4} width={1} bg="white" />
            <Box flex={1}>
              <Text
                color="white"
                fontSize="md"
                fontWeight="bold"
                textAlign="center"
              >
                {data.door == "1" ? "DOOR: OPENED" : "DOOR: CLOSED"}
              </Text>
            </Box>
          </Box>
          <MyMap
            lat={data.latitude}
            lng={data.longitude}
            type="Standard"
            points={[{ id: data.id, lat: data.latitude, lng: data.longitude }]}
          ></MyMap>
        </View>
      </Box>
    </Container>
  );
};

export default DetailScreen;
