import React, { FunctionComponent, useContext, useEffect } from "react";
import { useNavigation } from "react-navi";
import { SetAuthContext } from "../../../context/Auth";

const OAuthLandingPage: FunctionComponent<{
  hash: string;
}> = ({ hash }) => {
  const setState = useContext(SetAuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    const asyncFunc = async () => {
      const hashFields = hash.split("&");
      const newAuth: Record<
        "token_type" | "access_token" | "expires_in" | "scope" | "state",
        string
      > = {
        token_type: "",
        access_token: "",
        expires_in: "",
        scope: "",
        state: ""
      };
      hashFields.forEach(pair => {
        const split = pair.split("=");
        const key = (split[0].startsWith("#")
          ? split[0].substr(1)
          : split[0]) as "token_type" | "access_token" | "expires_in" | "scope";
        const value = split[1];
        newAuth[key] = value;
      });
      console.log(newAuth);
      const response = await fetch("https://discordapp.com/api/v6/users/@me", {
        headers: {
          Authorization: `${newAuth.token_type} ${newAuth.access_token}`
        }
      });

      const body = await response.json();
      setState({ ...newAuth, ...body });
      navigation.navigate(
        newAuth.state ? atob(decodeURIComponent(newAuth.state)) : "/"
      );
    };
    asyncFunc();
  }, [hash, navigation, setState]);

  return <div />;
};

export default OAuthLandingPage;
