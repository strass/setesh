import React, { createContext, useState, FunctionComponent } from "react";

const AuthContext = createContext<{
  access_token: string;
  avatar: string;
  discriminator: string;
  expires_in: string;
  // flags: number;
  id: string;
  locale: string;
  // mfa_enabled: boolean;
  scope: string;
  token_type: string;
  username: string;
}>({
  access_token: "",
  avatar: "",
  discriminator: "",
  expires_in: "",
  // flags: 0,
  id: "",
  locale: "",
  // mfa_enabled: false,
  scope: "",
  token_type: "",
  username: ""
});

export const SetAuthContext = createContext<
  React.Dispatch<
    React.SetStateAction<{
      access_token: string;
      avatar: string;
      discriminator: string;
      expires_in: string;
      // flags: number;
      id: string;
      locale: string;
      // mfa_enabled: boolean;
      scope: string;
      token_type: string;
      username: string;
    }>
  >
>(() => console.error("AuthContext missing Provider"));

export const AuthContextProvider: FunctionComponent = ({ children }) => {
  const [state, setState] = useState({
    access_token: "",
    avatar: "",
    discriminator: "",
    expires_in: "",
    // flags: 0,
    id: "",
    locale: "",
    // mfa_enabled: false,
    scope: "",
    token_type: "",
    username: ""
  });
  return (
    <SetAuthContext.Provider value={setState}>
      <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
    </SetAuthContext.Provider>
  );
};

export default AuthContext;
