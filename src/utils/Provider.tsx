import React, { useEffect, useState } from "react";
import { UserContext, UserInterFace } from "./UserContext";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";

import * as Facebook from "expo-auth-session/providers/facebook";
import { ResponseType } from "expo-auth-session";
import { api } from "../services/api";
import { getUserByToken } from "./helper";
import { makeRedirectUri } from "expo-auth-session";
import { storeData } from "./Storage";
// WebBrowser.maybeCompleteAuthSession();

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserInterFace>({} as UserInterFace);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   clientId:
  //     "948217935463-2r6m8pd4900n4es5osngt5i5duo7grtj.apps.googleusercontent.com",
  //   scopes: ["email", "profile"],
  //   redirectUri: makeRedirectUri(),
  // });

  // const [requestFb, responsefb, promptAsyncfb] = Facebook.useAuthRequest({
  //   clientId: "978270193562861",
  //   responseType: ResponseType.Token,
  //   redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
  // });

  // useEffect(() => {
  // //   if (response?.type === "success") {
  // //     const { accessToken } = response.authentication;
  // //     signinWithGoogleToken(accessToken);
  // //   }
  // // }, [response]);

  // useEffect(() => {
  //   if (responsefb?.type === "success") {
  //     const { access_token } = responsefb.params;
  //     signinWithFBToken(access_token);
  //   }
  // }, [responsefb]);

  // async function signin() {
  //   setIsLoading(true);
  //   promptAsync();
  // }
  // async function signinFB() {
  //   setIsLoading(true);
  //   promptAsyncfb();
  // }

  async function signinWithGoogleToken(access_token: string) {
    try {
      const response = await api.post("/auth/google", {
        access_token,
      });
      const token = await response.data.token;
      console.log(
        "🚀 ~ file: Provider.tsx:64 ~ signinWithGoogleToken ~ token:",
        token
      );

      const user = await getUserByToken(token);
      console.log(
        "🚀 ~ file: Provider.tsx ~ line 65 ~ signinWithGoogleToken ~ user",
        user
      );
      api.defaults.headers.common["Authorization"] = "Bearer " + token;

      setUser(user);
    } catch (error) {
      setIsLoading(false);
      console.log(
        "🚀 ~ file: Provider.tsx ~ line 63 ~ signinWithGoogleToken ~ error",
        error
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function signinWithFBToken(access_token: string) {
    try {
      const response = await api.post("/auth/fb", {
        access_token,
      });
      const token = await response.data.token;

      const user = await getUserByToken(token);

      console.log(token);

      api.defaults.headers.common["Authorization"] = "Bearer " + token;
      setUser(user);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  async function signinWithID(id: string) {
    const response = await api.post("/auth/geomeid", {
      geomeId: id,
    });

    const { token } = response.data;
    try {
      const user = await getUserByToken(token);

      if (user && user.geomeId) {
        console.log("🚀 ~ file: Provider.tsx:119 ~ signinWithID ~ user:", user);
        api.defaults.headers.common["Authorization"] = "Bearer " + token;
        await storeData("user_token", token, (result: any) => {
          if (result === true) {
            console.log("token saved");
          } else {
            console.log("token not saved" + result);
          }
        });
        setUser(user);
      } else {
      }
    } catch (error) {
      console.log("🚀 ~ file: Provider.tsx:132 ~ signinWithID ~ error:", error);
    }
  }
  return (
    <UserContext.Provider value={{ user, isLoading, setUser, signinWithID }}>
      {children}
    </UserContext.Provider>
  );
}
