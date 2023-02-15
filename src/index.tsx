import {ThemeProvider} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import {Amplify} from 'aws-amplify';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import awsconfig from './aws-exports';
import './index.css';
import './pages/App.css';
import {router} from "./pages/routes";
import reportWebVitals from './reportWebVitals';
import studioTheme from './ui-components/studioTheme';

Amplify.configure(awsconfig);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div className="App">
    <React.StrictMode>

      <ThemeProvider theme={studioTheme}>

        <RouterProvider router={router}/>
      </ThemeProvider>
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
