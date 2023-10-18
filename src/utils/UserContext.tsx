import React from "react";
export interface UserInterFace {
  id?: string;
  name: string;
  geomeId: string;
  has_vehicle: boolean;
  photo?: string;
  imei?: string;
}

export interface AuthUserContextInterface {
  user: UserInterFace;
  signin?: () => {};
  signinFB?: () => {};
  signinWithID: (id: string) => {};
  setUser: any;
  isLoading: boolean;
}
export const UserContext = React.createContext({} as AuthUserContextInterface);
