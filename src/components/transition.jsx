import { motion } from "framer-motion";

const Transition = (Component) => {
    return function WrappedComponent(props) {
        return (
            <>
                <Component {...props} />
                {/* Slide In Effect (When entering a page) */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}

                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "#111",
                        zIndex: 9999,
                        transformOrigin: "bottom",
                    }}
                />
                {/* Slide Out Effect (When leaving a page) */}
                <motion.div
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "#111",
                        zIndex: 9999,
                        transformOrigin: "top",
                    }}
                />
            </>
        );
    };
};

export default Transition;