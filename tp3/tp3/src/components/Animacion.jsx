import { useState } from "react";

function Animacion() {
  const [movido, setMovido] = useState(false);

  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "green",
          position: "relative",
          left: movido ? "300px" : "0",
          transition: "left 1s ease-in-out",
        }}
      />
      <button onClick={() => setMovido(!movido)}>Mover</button>
    </div>
  );
}

export default Animacion;