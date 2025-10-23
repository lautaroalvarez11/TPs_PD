import { useEffect, useRef } from "react";
import $ from "jquery";

export default function JQueryDemo() {
  const parrafoRef = useRef(null);
  const imagenRef = useRef(null);

  // Integración de jQuery con el ciclo de vida de React
  useEffect(() => {
    // Asegura que el DOM esté incluido antes de usar jQuery
    const $parrafo = $(parrafoRef.current);
    const $imagen = $(imagenRef.current);

    // Botón de cambio de color
    $("#btnColor").on("click", () => {
      const colorActual = $parrafo.css("background-color");
      const nuevoColor = colorActual === "rgb(173, 216, 230)" ? "#f08080" : "#add8e6";
      $parrafo.css("background-color", nuevoColor);
    });

    // Botón de ocultar/mostrar con efecto fade in/out
    $("#btnFade").on("click", () => {
      $imagen.fadeToggle(500);
    });

    // Limpieza: evita múltiples listeners al volver a renderizar
    return () => {
      $("#btnColor").off("click");
      $("#btnFade").off("click");
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Manipulación del DOM con jQuery en React</h2>

      <p
        ref={parrafoRef}
        style={{
          backgroundColor: "#add8e6",
          padding: "20px",
          borderRadius: "10px",
          display: "inline-block",
        }}
      >
        Este párrafo cambiará de color al hacer clic en el botón
      </p>
      <br />
      <button id="btnColor" style={{ margin: "15px", padding: "8px 15px" }}>
        Cambiar color con jQuery
      </button>

      <hr style={{ margin: "40px 0" }} />

      <img
        ref={imagenRef}
        src="https://unnoba.edu.ar/wp-content/uploads/ENCABEZADO_UNNOBA_COLOR.png"
        alt="Ejemplo jQueryDemo para tp4.1"
        style={{ borderRadius: "10px" }}
      />
      <br />
      <button id="btnFade" style={{ margin: "15px", padding: "8px 15px" }}>
        Mostrar / Ocultar con Fade in/out
      </button>
    </div>
  );
}