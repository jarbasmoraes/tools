import React from "react";
import {createBrowserRouter} from "react-router-dom";
import {QRCodeGenerator} from "../features/qrcode/QRCodeGenerator";
import ErrorPage from "./ErrorPage";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/qr-code-generator",
    element: <QRCodeGenerator/>,
  }

]);

export {router}
