import React from "react";
import './App.css';

import { initNotification } from "./services/firebaseServices";

function App() {
  return (
    <div className="App">
     <h1>heloo word</h1>
     <button onClick={initNotification}> Configure Notifications</button>
    </div>
  );
}

export default App;
