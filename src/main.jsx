import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Initial from "./layout/Initial";
import Feature from "./components/Feature";

import Testimonial from "./components/Testimonial";
import Home from "./components/Home";
import About from "./components/About";
import Property from "./components/Property";
import Agent from "./components/Agent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Initial/>,
    children:[
      {
        path: "/",
        element: <Home/>
      
      },
{
  path: "/feature",
  element: <Feature/>

},
{
  path: "/testimonial",
  element: <Testimonial/>

},
{
  path: "/about",
  element:<About/>

},
{
  path: "/property",
  element:<Property/>,

},
{
  path: "/agent",
  element:<Agent/>,

},
{
  path: "/testimonial",
  element:<Testimonial/>

},



    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);