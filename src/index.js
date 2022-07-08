import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './App'; 
import { Auth0Provider } from "@auth0/auth0-react";


import "./fonts/Raleway-Bold.ttf";
import "./fonts/Raleway-SemiBold.ttf";
import "./fonts/Raleway-Regular.ttf";
import "./fonts/Raleway-Light.ttf";
import "./fonts/Raleway-Medium.ttf";


const root = document.getElementById('root');
render(
  <Auth0Provider
    domain="dev-8gitaj8h.us.auth0.com"
    clientId="0GmNKWutRlQ7Ni6Jmdb2QXmWB2dNyfFs"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>, root 
);

