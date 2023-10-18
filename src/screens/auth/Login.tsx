import { VStack, Box, Button, Text, Icon, Center } from "native-base";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo_big.svg";
import Illustration from "../../assets/Illustration.svg";
import { Fontisto } from "@expo/vector-icons";
import { useUser } from "../../hooks/useUser";
import Input from "../../components/Input";
import socket from "../../utils/Socket";
import { readData } from "../../utils/Storage";
import { getUserByToken } from "../../utils/helper";
import { UserInterFace } from "../../utils/UserContext";

export default function Login() {
  const { setUser } = useUser();
  useEffect(() => {
    // verifyUserSession();
  }, []);
  const { signinFB, signin, isLoading, signinWithID } = useUser();
  socket.on("world", (data) => {
    console.log(data);
  });

  return (
    <VStack bgColor={"primary.100"} flex={1} alignItems="center" p={28}>
      <Box mt={8}>
        <Logo />
      </Box>
      <Illustration />

      <Center>
        <Text
          color={"primary.600"}
          fontWeight={"medium"}
          fontFamily={"mono"}
          fontSize={32}
        >
          Crie,desafie e{" "}
          <Text color={"primary.200"} fontWeight={"black"} fontSize={36}>
            Jogue
          </Text>{" "}
          com os teus amigos
        </Text>
      </Center>

      <Button
        width={"100%"}
        height={"14"}
        mt={8}
        bg={"social.google"}
        borderRadius={"16"}
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="sm" />}
        onPress={() => setUser({ id: "sdjhshgdsdsg" })}
        isLoading={isLoading}
      >
        ENTRAR COM GOOGLE
      </Button>
      <Button
        width={"100%"}
        height={"14"}
        mt={8}
        bg={"social.fb"}
        borderRadius={"16"}
        leftIcon={
          <Icon as={Fontisto} name="facebook" color="white" size="sm" />
        }
        onPress={signinFB}
        isLoading={isLoading}
      >
        ENTRAR COM FACEBOOK
      </Button>
    </VStack>
  );
}
