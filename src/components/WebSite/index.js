import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import LandingPageContent from "./LandingPageContent/LandingPageContent";
import LoadingOverlay from "../utils/LoadingOverlay";

const WebSite = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <>
    {
      isLoading ? <LoadingOverlay /> :
      isAuthenticated ? <Navigate to="/app" replace /> :
      <div className="alpha-container wrapper display-flex">
        <NavBar />
        <LandingPageContent />
      </div>
    }
    </>
  )
}


export default WebSite;