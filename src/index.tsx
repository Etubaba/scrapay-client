import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { appConfig } from "./constant";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const { AUTH0_DOMAIN, AUTH0_CLIENT_ID } = appConfig;

// console.log(AUTH0_CLIENT_ID);
// console.log(AUTH0_DOMAIN);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={`${process.env.REACT_APP_AUTH0_DOMAIN as string}`}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
      authorizationParams={{
        redirect_uri: (process.env.REACT_APP_BASE_URL as string) + "/profile",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
