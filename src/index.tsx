import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { appConfig } from "./constant";
import { ChakraProvider } from "@chakra-ui/react";
import AuthorizedApolloProvider from "./apollo/AuthApolloProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const { AUTH0_DOMAIN, AUTH0_CLIENT_ID, CALLBACK_URL, AUTH0_AUDIENCE } =
  appConfig;

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={`${AUTH0_DOMAIN as string}`}
      clientId={AUTH0_CLIENT_ID as string}
      authorizationParams={{
        redirect_uri: CALLBACK_URL as string,
        audience: AUTH0_AUDIENCE,
      }}
    >
      <AuthorizedApolloProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </AuthorizedApolloProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
