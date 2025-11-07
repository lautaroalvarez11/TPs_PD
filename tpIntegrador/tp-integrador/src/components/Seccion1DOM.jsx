import { useState } from "react";

export default function Seccion1DOM() {
  // Versión React
  const [color, setColor] = useState("lightblue");
  const [posicion, setPosicion] = useState(0);

  const cambiarEstiloReact = () => {
    setColor(color === "lightblue" ? "lightcoral" : "lightblue");
    setPosicion(posicion === 0 ? 150 : 0);
  };

  // Versión JavaScript nativo
  const cambiarEstiloJS = () => {
    const box = document.getElementById("box-js");
    box.style.backgroundColor =
      box.style.backgroundColor === "lightgreen" ? "lightpink" : "lightgreen";
    box.style.transform =
      box.style.transform === "translateX(150px)"
        ? "translateX(0)"
        : "translateX(150px)";
  };

  return (
    <section>
      <h2>Sección 1 - Manipulación del DOM</h2>

      <h3>JavaScript Nativo</h3>
      <div
        id="box-js"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "lightgreen",
          transition: "all 0.5s ease",
          borderRadius: "8px",
        }}
      ></div>
      <button
        onClick={cambiarEstiloJS}
        style={{ marginTop: "10px", padding: "5px 15px", cursor: "pointer" }}
      >
        Cambiar estilo (JS)
      </button>

      <h3 style={{ marginTop: "30px" }}>React</h3>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
          transform: `translateX(${posicion}px)`,
          transition: "all 0.5s ease",
          borderRadius: "8px",
        }}
      ></div>
      <button
        onClick={cambiarEstiloReact}
        style={{ marginTop: "10px", padding: "5px 15px", cursor: "pointer" }}
      >
        Cambiar estilo (React)
      </button>
    </section>
  );
}