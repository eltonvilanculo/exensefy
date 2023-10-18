import React, { useEffect, useState } from "react";
import { View, Button } from "react-native";
import { Badge, HStack, IModalProps, Modal, Text } from "native-base";
import { AlarmResponsInterface } from "../utils/Interface";
import MyMap from "./MyMap";
import { readData } from "../utils/Storage";

interface BottomSheetProps extends IModalProps {
  visible: boolean;
  toggleBottomSheet: () => void;
  currentItem: AlarmResponsInterface;
}

const BottomSheet = ({
  visible,
  toggleBottomSheet,
  currentItem,
  ...rest
}: BottomSheetProps) => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    async function getPoints() {
      const data = await readData("busstops");

      setPoints(data);
    }
    getPoints();
  }, [points]);

  return (
    <View>
      <Button title="Open BottomSheet" onPress={toggleBottomSheet} />

      <Modal
        isOpen={visible}
        onClose={toggleBottomSheet}
        animationType="slide"
        transparent
      >
        {/* Your BottomSheet content goes here */}
        <View
          style={{
            backgroundColor: "#FFF",
            padding: 16,
            height: "40%",
            width: "80%",
          }}
        >
          {/* <HStack justifyContent={"space-around"}>
            <Badge colorScheme="info" variant="solid">
              <Text>{currentItem.acc == 0 ? "Desligado" : "Ligado"}</Text>
            </Badge>
            <Badge colorScheme="info" variant="solid">
              <Text>B</Text>
            </Badge>
            <Badge colorScheme="info" variant="solid">
              <Text>B</Text>
            </Badge>
            <Badge colorScheme="info" variant="solid">
              <Text>B</Text>
            </Badge>
          </HStack> */}
          <MyMap
            lat={currentItem.latitude}
            lng={currentItem.longitude}
            points={points}
            region={{
              latitude: currentItem.latitude,
              longitude: currentItem.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
      </Modal>
    </View>
  );
};
export default BottomSheet;
