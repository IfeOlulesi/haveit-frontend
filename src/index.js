import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


import "./fonts/Raleway-Bold.ttf";
import "./fonts/Raleway-SemiBold.ttf";
import "./fonts/Raleway-Regular.ttf";
import "./fonts/Raleway-Light.ttf";
import "./fonts/Raleway-Medium.ttf";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-8gitaj8h.us.auth0.com"
    clientId="0GmNKWutRlQ7Ni6Jmdb2QXmWB2dNyfFs"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);

