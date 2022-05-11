import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

// const dotenv = require("dotenv")
// const mongoose = require('mongoose');

// dotenv.config();

// mongoose.connect(process.env.MONGO_URL,
//   { useNewUrlParser:true,useUnifiedTopologay:true},
//   ()=>{
//   console.log("connected to mongoDB")
// });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
