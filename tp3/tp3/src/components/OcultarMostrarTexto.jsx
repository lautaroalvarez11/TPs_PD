import { useState } from "react";

function OcultarMostrarTexto() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <p
        style={{
          opacity: visible ? 1 : 0,
          visibility: visible ? "visible" : "hidden",
          transition: "opacity 0.5s ease",
        }}
      >
        Este es un texto que se puede ocultar o mostrar.
      </p>
      <button onClick={() => setVisible(!visible)}>Mostrar / Ocultar</button>
    </div>
  );
}

export default OcultarMostrarTexto;