import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mensaje from "./components/Mensaje";

function App() {
  return (
    <div>
      <h1>Mi primer proyecto con React + Vite</h1>
      <Mensaje />
    </div>
  );
}

export default App