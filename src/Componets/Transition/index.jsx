
import Style from "./transition.module.css";
import {motion} from "framer-motion"
const Transition = () => {
    const transitionVariants = {
        initial: {
            x: "100%",
            width: "100%"
        },
        animate: {
            x: "0%",
            width: "0%"
        },
        exit: {
            x: ["0%", "100%"],
            width: ["0%", "100%"]
        }
    }
    return (
        <>
            <motion.div className={Style.divtransition}
                variants={transitionVariants} initial="initial" animate="animate" exit="exit" transition={{ delay: 0.1, duration: 0.7, ease: "easeInOut" }}
            >1</motion.div>
            
        </>
    );
};
export default Transition;