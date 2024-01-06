import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Componet/Navbar";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<>inicio</>} />
                    <Route path="projetos" element={<div>projetos</div>} />
                    <Route path="contatos" element={<div>contatos</div>} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default Router