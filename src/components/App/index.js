import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import AppNavBar from "./AppNavbar";
import PageContent from "./PageContent";

const MainApp = () => {
  const { logout } = useAuth0();

  return (
    <>
      <AppNavBar />
      <PageContent />
    </>
  )
}

export default MainApp;