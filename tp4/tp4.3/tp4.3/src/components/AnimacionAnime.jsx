import { useEffect, useRef, useState } from "react";
import anime from "animejs";

export default function AnimacionAnime() {
  const [items, setItems] = useState(["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5"]);
  const listaRef = useRef(null);

  const animarLista = () => {
    const elementos = listaRef.current.querySelectorAll(".item");

    // Animación secuencial con Anime.js
    anime({
      targets: elementos,
      translateY: [-50, 0], // Baja desde arriba
      opacity: [0, 1], // Aparece progresivamente
      delay: anime.stagger(300), // Aparece uno atras de otro
      duration: 800,
      easing: "easeOutElastic(1, .8)", // Efecto rebote
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Animaciones en serie con Anime.js</h2>

      <ul ref={listaRef} style={{ listStyle: "none", padding: 0 }}>
        {items.map((texto, index) => (
          <li
            key={index}
            className="item"
            style={{
              backgroundColor: "#87CEFA",
              color: "#fff",
              padding: "12px 25px",
              margin: "10px auto",
              width: "200px",
              borderRadius: "8px",
              opacity: 0, // Empiezan invisibles
              transform: "translateY(-50px)",
            }}
          >
            {texto}
          </li>
        ))}
      </ul>

      <button
        onClick={animarLista}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      >
        Iniciar animación
      </button>
    </div>
  );
}