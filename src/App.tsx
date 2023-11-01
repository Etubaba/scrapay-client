import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./layout/Root";
import Profile from "./pages/profile";
import Home from "./pages/Home";
import CreateBook from "./pages/dasboard/CreateBook";
import BooksList from "./pages/dasboard/BooksList";
import { ApolloProvider } from "@apollo/client/react";
import client from "./apollo/client";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route
        path="profile"
        element={<Profile />}
        //  loader={getData}
      >
        <Route index element={<BooksList />} />
        <Route
          path="/profile/create-book"
          element={<CreateBook />}
          //  loader={getData}
        />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </div>
  );
}

export default App;
