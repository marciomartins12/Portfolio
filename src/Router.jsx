import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultPage from "./Componets/Home/DefaultPage"

function Router() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<DefaultPage/>}>
      <Route/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default Router
