import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Seccion3GSAP() {
  const boxRef = useRef();
  const [activo, setActivo] = useState(false);
  const timeline = useRef();

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(boxRef.current, { duration: 0.8, backgroundColor: "#ff6f61", scale: 1.3 })
      .to(boxRef.current, { duration: 0.8, x: 150, backgroundColor: "#1e90ff" })
      .to(boxRef.current, { duration: 0.8, x: 0, scale: 1, backgroundColor: "#32cd32" });
  }, []);

  const toggleAnimacion = () => {
    if (!activo) {
      timeline.current.restart();
    } else {
      timeline.current.pause(0);
    }
    setActivo(!activo);
  };

  return (
    <section>
      <h2>Sección 3 - Animaciones con GSAP</h2>

      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#32cd32",
          borderRadius: "10px",
          margin: "20px auto",
        }}
      ></div>

      <button
        onClick={toggleAnimacion}
        style={{ padding: "8px 15px", cursor: "pointer" }}
      >
        {activo ? "Detener animación" : "Iniciar animación"}
      </button>
    </section>
  );
}
