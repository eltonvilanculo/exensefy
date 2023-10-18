import React from "react";
import { Skeleton, VStack, Center, NativeBaseProvider } from "native-base";

const MySkeleton = () => {
  return (
    <Center w="100%">
      <VStack
        w="100%"
        space={8}
        borderRadius={2}
        overflow="hidden"
        _dark={{
          borderColor: "coolGray.900",
        }}
        _light={{
          borderColor: "coolGray.100",
        }}
      >
        <Skeleton h="20" />
        <Skeleton h="20" />
        <Skeleton h="20" />
        <Skeleton h="20" />
        <Skeleton h="20" />
        <Skeleton.Text px="4" />
      </VStack>
    </Center>
  );
};

export default MySkeleton;
