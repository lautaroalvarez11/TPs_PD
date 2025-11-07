import { useEffect, useRef, useState } from "react";
import anime from "animejs";

export default function Seccion4Anime() {
  const listaRef = useRef();
  const [velocidad, setVelocidad] = useState(1000);
  const [elementos] = useState(["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4"]);

  const animarSecuencia = () => {
    anime({
      targets: listaRef.current.children,
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(velocidad / 4),
      duration: velocidad,
      easing: "easeOutBounce",
    });
  };

  useEffect(() => {
    animarSecuencia();
  }, [velocidad]);

  return (
    <section>
      <h2>Sección 4 - Animaciones en Secuencia con Anime.js</h2>

      <label>
        Velocidad (ms):{" "}
        <input
          type="number"
          value={velocidad}
          onChange={(e) => setVelocidad(Number(e.target.value))}
          min="200"
          max="3000"
          step="100"
        />
      </label>

      <ul
        ref={listaRef}
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: "20px",
        }}
      >
        {elementos.map((item, i) => (
          <li
            key={i}
            style={{
              marginBottom: "10px",
              backgroundColor: "#87ceeb",
              padding: "10px",
              borderRadius: "8px",
              width: "150px",
              textAlign: "center",
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      <button
        onClick={animarSecuencia}
        style={{ marginTop: "10px", padding: "5px 15px", cursor: "pointer" }}
      >
        Repetir animación
      </button>
    </section>
  );
}
