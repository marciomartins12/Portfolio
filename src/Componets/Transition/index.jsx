
import Style from "./transition.module.css";
import { motion } from "framer-motion"

const Transition = () => {

    const transitionVariants = {
        initial: {
            x: '100%',
            width: '100%',
        },
        animate: {
            x: '0%',
            width: '0%',
        },
        exit: {
            x: ['0%', '100%'],
            width: ['0%', '100%'],
        }
    };
    return (
        <>
            <motion.div className={`${Style.divtransition} ${Style.animate1}`}
                variants={transitionVariants} initial='initial' animate='animate' exit='exit' transition={{ delay: 0.4, duration: 1.8, ease: "easeInOut" }}
            ></motion.div>

            <motion.div className={`${Style.divtransition} ${Style.animate2}`}
                variants={transitionVariants} initial='initial' animate='animate' exit='exit' transition={{ delay: 0.3, duration: 0.9, ease: "easeInOut" }}
            ></motion.div>

            <motion.div className={`${Style.divtransition} ${Style.animate3}`}
                variants={transitionVariants} initial='initial' animate='animate' exit='exit' transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
            ></motion.div>

        </>
    );
};
export default Transition;