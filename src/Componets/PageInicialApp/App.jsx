import { useEffect, useState } from "react";
import PaginaPrincipal from "../PagePrincipal/PageMain";
import Projects from "../Projects/Projects";
import Style from "./App.module.css";


function App() {
  const [carregou, setcarregou] = useState(true);

 
  const timerparacarregar = () => {
    setTimeout(() => {
      setcarregou(false);
    }, 2000);
  }

  timerparacarregar();

  return (

    <>
      {carregou ?
        <div className={Style.preload}>
          <img src="/src/assets/preload.png" alt="preload" />
          loading...
          </div> :
        <div>
          <PaginaPrincipal />
          <Projects />
        </div>
      }

    </>

  );
};

export default App
