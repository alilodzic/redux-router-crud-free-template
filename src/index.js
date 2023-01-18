import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Index from './components/items/Index.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/Error";
import Add from "./components/Add";
import store from './store/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "add",
        element: <Add />,
      }
    ]
  },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>

);
