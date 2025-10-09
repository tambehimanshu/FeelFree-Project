import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginWithGoogle = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className=" items-center">Log vdf In</button>;
};

export default LoginWithGoogle;