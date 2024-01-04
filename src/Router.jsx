import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Componet/Navbar";

const Router = ()=>{
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element= {<Navbar/>}>
        <Route path="sobre mim" element= {<div>aaaaaa teste tes</div>}/>
        </Route>

    </Routes>
    </BrowserRouter>
    );
};

export default Router