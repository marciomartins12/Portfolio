import PaginaPrincipal from "./Componets/PagePrincipal/PageMain";
import Projects from "./Componets/Projects/Projects";

function App() {
 const carregou=()=>{
  console.log("carregou")
  
 }
   return(
<section onLoad={carregou()}>
<PaginaPrincipal/>

<Projects/>
</section>
  );
};

export default App
