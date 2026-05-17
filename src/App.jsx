import "./App.css";
import Body from "./Components/Body";
import Signin from "./Components/Signpage";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  return <Body />;
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);

function Root() {
  return <RouterProvider router={appRouter} />;
}

export default Root;