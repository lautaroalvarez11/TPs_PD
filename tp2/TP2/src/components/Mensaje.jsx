import { useState } from "react";

function Mensaje() {
  const [texto, setTexto] = useState("¡Hola, mundo!");

  const cambiarTexto = () => {
    setTexto("Contenido actualizado dinámicamente 🚀");
  };

  return (
    <div>
      <h2>{texto}</h2>
      <button onClick={cambiarTexto}>Cambiar mensaje</button>
    </div>
  );
}

export default Mensaje;
