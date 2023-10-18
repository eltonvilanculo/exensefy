import { Container, Text, Box, Card, Icon } from "native-base";
import React, { useEffect } from "react";
import { View } from "react-native";
import { AlarmResponsInterface } from "../../utils/Interface";
import { NavigationProp } from "@react-navigation/native";

// import { Container } from './styles';

const DetailScreen: React.FC = ({ route }: NavigationProp) => {
  const data: AlarmResponsInterface = route.params.item;
  useEffect(() => {
    console.log(data.imei);
  }, []);
  return (
    <Container>
      <Box>
        <View style={{ height: "50%" }}>
          {/* Add the map component here */}
        </View>
        <View style={{ height: "50%" }}>
          <Card animated>
            <Icon name="card-icon-1" />
            <Text>Card 1 Text</Text>
          </Card>
          <Card animated>
            <Icon name="card-icon-2" />
            <Text>Card 2 Text</Text>
          </Card>
          <Card animated>
            <Icon name="card-icon-3" />
            <Text>Card 3 Text</Text>
          </Card>
        </View>
      </Box>
    </Container>
  );
};

export default DetailScreen;
