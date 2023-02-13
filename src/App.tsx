import React from 'react';
import './App.css';
import {QRCodeGenerator} from "./features/qrcode/QRCodeGenerator";
import {NavBar} from "./ui-components";

function App() {

  return (
    <div className="App">

      <NavBar />
      <QRCodeGenerator/>

    </div>
  );
}

export default App;
