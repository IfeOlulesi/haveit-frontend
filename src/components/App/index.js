import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const MainApp = () => {
  const { logout } = useAuth0();

  return (
    <>
      This is the main app 
      and the <div onClick={() => logout({ returnTo: "http://localhost:3000/" })}> logout </div> button.  
    </>
  )
}

export default MainApp;