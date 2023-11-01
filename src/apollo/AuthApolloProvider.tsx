import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import { setContext } from "@apollo/link";
import React from "react";
import { appConfig } from "../constant";
import { useAuth0 } from "@auth0/auth0-react";

const AuthorizedApolloProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { BASE_URL } = appConfig;
  const { getAccessTokenSilently } = useAuth0();

  const httpLink = createHttpLink({
    uri: BASE_URL as string,
  });

  const authLink = setContext(async () => {
    const token = await getAccessTokenSilently();

    console.log("token=>", token);
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  });

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default AuthorizedApolloProvider;
