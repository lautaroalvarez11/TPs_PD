import { useEffect, useRef } from "react";
import $ from "jquery";

export default function Seccion2JQuery() {
  const galeriaRef = useRef();

  useEffect(() => {
    $(galeriaRef.current).hide().fadeIn(800); // Aparece con efecto suave
  }, []);

  const toggleGaleria = () => {
    $(galeriaRef.current).fadeToggle(800);
  };

  return (
    <section>
      <h2>Sección 2 - Efectos de Ocultamiento con jQuery</h2>

      <div ref={galeriaRef} style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
        <img 
        src="https://files.readme.io/320345b-React_Logo_256x256.png"
        alt="img1"
        style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
        />

        <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
        alt="img2"
        style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
        />

        <img
        src="https://cdn.iconscout.com/icon/free/png-512/free-jquery-icon-svg-download-png-1175155.png?f=webp&w=512"
        alt="img3"
        style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
        />

        <img
        src="https://miro.medium.com/v2/1*CPF3XWLLwtr43AU37kQwrA.jpeg"
        alt="img4"
        style={{ width: "200px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
        />

        <img
        src="https://uploads.sitepoint.com/wp-content/uploads/2016/10/1477673935anime-logo.png"
        alt="img5"
        style={{ width: "400px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
        />
      </div>

      <button
        onClick={toggleGaleria}
        style={{ marginTop: "15px", padding: "5px 15px", cursor: "pointer" }}
      >
        Mostrar / Ocultar galería
      </button>
    </section>
  );
}
