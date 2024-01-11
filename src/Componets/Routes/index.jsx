import { Route, Routes, useLocation } from "react-router-dom"
import DefaultPage from "../DefaultPage"
import Home from '../Home'
import Projects from '../Projects'
import Contacts from '../Contacts'
import About from '../About'
import { AnimatePresence, motion } from "framer-motion"
import Transition from "../Transition"
const RoutesAnimated = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<DefaultPage />}>
                    <Route index element={<Home />} />
                    <Route path="aboutme" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contacts" element={<Contacts />} />
                </Route>
            </Routes>
       <Transition/>
        </AnimatePresence>
    );
};
export default RoutesAnimated;