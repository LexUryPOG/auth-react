import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Table1 from "./pages/Table1";
import Table2 from "./pages/Table2";
import Logout from "./pages/Logout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Table1" element={<Table1 />} />
      <Route path="/Table2" element={<Table2 />} />
      <Route path="/logout" element={<Logout />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
