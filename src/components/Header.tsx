import React from "react";
import { Box, Center, HStack, Text, Image, Stack } from "native-base";
import { useUser } from "../hooks/useUser";
import Logo from "../assets/logo.svg";
interface HeaderProps {
  title: string;
  leftRad?: number;
  rightRad?: number;
}
export default function Header({ title, leftRad, rightRad }: HeaderProps) {
  const { user } = useUser();
  return (
    <HStack
      bgColor={"primary.100"}
      h={"26"}
      justifyContent={"space-between"}
      alignItems={"center"}
      mt={4}
      borderBottomLeftRadius={leftRad}
      borderBottomRightRadius={rightRad}
    >
      <Logo />

      <Image
        size={8}
        borderRadius={20}
        source={{
          uri: `${
            user.photo
              ? user.photo
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMHEPs-P9DtPUY-NCawjLDbTIZltNz2nNFQ&usqp=CAU"
          }`,
        }}
        alt="Alternate Text"
      />
    </HStack>
  );
}
