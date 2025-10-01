import { useState } from "react";

function CambioEstilo() {
  const [color, setColor] = useState("lightblue");

  const cambiarColor = () => {
    setColor(color === "lightblue" ? "lightcoral" : "lightblue");
  };

  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          margin: "20px auto",
          backgroundColor: color,
        }}
      />
      <button onClick={cambiarColor}>Cambiar color</button>
    </div>
  );
}

export default CambioEstilo;
