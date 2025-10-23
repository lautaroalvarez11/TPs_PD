import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function OptimizacionAnimaciones() {
  const gsapBoxRef = useRef(null);
  const animeBoxRef = useRef(null);
  const gsapTimeline = useRef(null);
  const isAnimatingRef = useRef(false); // <-- ref que controla el estado real
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Crear timeline GSAP solo una vez
    gsapTimeline.current = gsap.timeline({ paused: true });
    gsapTimeline.current
      .to(gsapBoxRef.current, { duration: 1, x: 150, scale: 1.2, backgroundColor: "#ff7f50" })
      .to(gsapBoxRef.current, { duration: 1, y: 80, backgroundColor: "#20b2aa" })
      .to(gsapBoxRef.current, { duration: 1, x: 0, y: 0, scale: 1, backgroundColor: "#32cd32" });

    return () => {
      gsapTimeline.current.kill();
    };
  }, []);

  // Animación manual optimizada con requestAnimationFrame
  const animateBlueBox = () => {
    const element = animeBoxRef.current;
    let startTime = null;

    const animate = (timestamp) => {
      if (!isAnimatingRef.current) return; // Detiene si se cambia el estado
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const x = Math.sin(elapsed / 500) * 100; // Movimiento oscilante
      element.style.transform = `translateX(${x}px)`;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const toggleAnimaciones = () => {
    if (!isAnimatingRef.current) {
      // Iniciar animaciones
      isAnimatingRef.current = true;
      setIsAnimating(true);
      gsapTimeline.current.restart();
      animateBlueBox();
    } else {
      // Detener animaciones
      isAnimatingRef.current = false;
      setIsAnimating(false);
      gsapTimeline.current.pause();
      animeBoxRef.current.style.transform = "translateX(0)";
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <div style={{ display: "flex", justifyContent: "center", gap: "60px", marginTop: "30px" }}>
        {/* Caja verde animada con GSAP */}
        <div
          ref={gsapBoxRef}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#32cd32",
            borderRadius: "10px",
          }}
        ></div>

        {/* Caja azul animada con requestAnimationFrame */}
        <div
          ref={animeBoxRef}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#6495ed",
            borderRadius: "10px",
          }}
        ></div>
      </div>

      <button
        onClick={toggleAnimaciones}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {isAnimating ? "Detener animaciones" : "Iniciar animaciones"}
      </button>
    </div>
  );
}
