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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
