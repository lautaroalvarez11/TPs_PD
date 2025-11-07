import { useState } from 'react'
import './App.css'
import Seccion1DOM from "./components/Seccion1DOM";
import Seccion2JQuery from "./components/Seccion2JQuery";
import Seccion3GSAP from "./components/Seccion3GSAP";
import Seccion4Anime from "./components/Seccion4Anime";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Trabajo Práctico Integrador - React, JS, jQuery, GSAP y Anime.js
      </h1>
      <p>
        Lautaro Ezequiel Álvarez
      </p>

      <Seccion1DOM />
      <hr style={{ margin: "40px 0" }} />
      <Seccion2JQuery />
      <hr style={{ margin: "40px 0" }} />
      <Seccion3GSAP />
      <hr style={{ margin: "40px 0" }} />
      <Seccion4Anime />
    </div>
  );
}

export default App