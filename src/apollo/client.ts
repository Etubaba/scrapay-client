import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  Observable,
} from "@apollo/client";
import { appConfig } from "../constant";
import { useAuth0 } from "@auth0/auth0-react";

const { BASE_URL } = appConfig;

const httpLink = new HttpLink({
  uri: (BASE_URL as string) + "graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  const { getAccessTokenSilently } = useAuth0();

  return new Observable((observer) => {
    getAccessTokenSilently()
      .then((token) => {
        if (token) {
          operation.setContext({
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
        }
        forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        });
      })
      .catch((error) => {
        console.error("Error while getting access token:", error);
        observer.error(error);
      });
  });
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
