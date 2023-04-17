import Titulo from "./components/titulo";
import { Items } from "./components/itemList";
import { Navb } from "./components/navBar";
import "./App.css";
import { useState } from "react";
import { Contenedor } from "./components/compra";

function App() {
  return (
    <div>
      <div className="sup">
        <Titulo titulo="Centro de ropa" />
        <Navb />
      </div>

      <div>
        <Contenedor/>
        <Items />
      </div>
    </div>
  );
}

export default App;
