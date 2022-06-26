import React, { useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import LandingPageContent from "./LandingPageContent/LandingPageContent";
import LoadingOverlay from "../utils/LoadingOverlay";

const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = (event) => setScrollTop(event.target.scrollTop);
  return [scrollTop, { onScroll }];
}

const WebSite = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [scrollTop, scrollProps] = useScrollTop();

  return (
    <>
    {
      isLoading ? <LoadingOverlay /> :
      isAuthenticated ? <Navigate to="/app" replace /> :
      <div {...scrollProps} className="alpha-container wrapper display-flex">
        <NavBar scrollTop={scrollTop} />
        <LandingPageContent />
      </div>
    }
    </>
  )
}


export default WebSite;