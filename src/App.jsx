import { useState } from "react";
import reactLogo from "./assets/spook.png";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div>
        <a href="https://es.vitejs.dev" target="_blank">
          <img src="/avatarRojo.png" className="logo" alt="Vite logo" />
        </a>

        <a href="https://es.react.dev/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Hello React</h1>

      <div className="card">
        Aquí comienza nuestra aventura con React{" "}
        <a href="https://sites.google.com/fi.unju.edu.ar/0-introduccion-a-react" target="_blank" rel="noreferer noopener">
          {" "}
          🤜🤛
        </a>
      </div>
      <p> Hoy es {new Date().toLocaleDateString()}.</p>
      <p> Saludos Humano!</p>
    </div>
  );
}

export default App;
