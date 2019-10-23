import React, { useContext } from "react";
import AuthContext from "../context/Auth";
import { Callout } from "@blueprintjs/core";
import { useHistory } from "react-navi";

const LoginStatusOrganism = () => {
  const { location } = useHistory();
  const auth = useContext(AuthContext);
  const loggedIn = !!auth.id;

  return (
    <Callout
      intent={!loggedIn ? "warning" : "success"}
      icon={
        !loggedIn ? (
          "user"
        ) : (
          <img
            alt="user icon"
            src={`https://cdn.discordapp.com/avatars/${auth.id}/${
              auth.avatar
            }.png?size=32`}
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              height: 20,
              width: 20,
              borderRadius: "50%"
            }}
          />
        )
      }
    >
      {!loggedIn ? (
        <a
          href={`https://discordapp.com/api/oauth2/authorize?response_type=token&client_id=${
            process.env.REACT_APP_CLIENT_ID
          }&scope=identify&redirect_uri=${
            window.location.origin
          }/oauth/discord&state=${btoa(location.pathname)}`}
        >
          Please log in
        </a>
      ) : (
        <div>
          @{auth.username}#{auth.discriminator}
        </div>
      )}
    </Callout>
  );
};

export default LoginStatusOrganism;
