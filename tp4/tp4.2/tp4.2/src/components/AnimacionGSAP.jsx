import { useRef, useState } from "react";
import { gsap } from "gsap";

export default function AnimacionGSAP() {
  const cajaRef = useRef(null);
  const [animando, setAnimando] = useState(false);

  const ejecutarAnimacion = () => {
    const caja = cajaRef.current;

    if (!animando) {
      // Secuencia de animación con GSAP
      gsap
        .timeline()
        .to(caja, { duration: 1, x: 200, backgroundColor: "#f08080", scale: 1.5 })
        .to(caja, { duration: 1, y: 100, backgroundColor: "#87CEFA", scale: 1 })
        .to(caja, { duration: 1, x: 0, y: 0, backgroundColor: "#32CD32" });

      setAnimando(true);
    } else {
      // Si se presiona de nuevo, se frena o reinicia la animación
      gsap.to(caja, { duration: 0.5, x: 0, y: 0, scale: 1, backgroundColor: "#32CD32" });
      setAnimando(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Animaciones con GSAP en React</h2>

      <div
        ref={cajaRef}
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "#32CD32",
          margin: "0 auto",
          borderRadius: "10px",
        }}
      ></div>

      <button
        onClick={ejecutarAnimacion}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      >
        {animando ? "Reiniciar animación" : "Iniciar animación"}
      </button>
    </div>
  );
}
