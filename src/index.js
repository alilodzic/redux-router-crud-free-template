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
import Details from "./components/Details";
import Edit from "./components/Edit";

const filterParms =({ params }) => {
  if (isNaN(params.id)) {
    throw new Response("bad request", {
      statusText: "please make sure to insert correct post ID",
      status: 400,
    })
  }
}


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
        path: "post/:id",
        element: <Details />,
        loader: filterParms
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "post/:id/edit",
        element: <Edit />,
        loader: filterParms

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
