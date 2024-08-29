import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App";
import Home from "./routes/Home";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bag from "./routes/Bag";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import myntraStore from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/Bag",
        element: <Bag />,
        // action: createPostAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
