import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Signup from ".././src/Components/signupform/Signup";
import LoginForm from ".././src/Components/LoginForm/LoginForm";
// import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

// const express = require("express");
// const path = require("path");
// const bcrypt = require("bcrypt");

// const app = express();

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("login");
// });

// app.get("/signup", (req, res) => {
//   res.render("signup");
// });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`server running on:${port}`);
// });

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // element: (
    //   <div>
    //     <h1>Hello World</h1>
    //     <Link to="about">About Us</Link>
    //   </div>
    // ),
  },
  {
    path: "/Signup.jsx",
    element: <Signup />,
  },
  {
    path: "/LoginForm.jsx",
    element: <LoginForm />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
