import { motion } from "framer-motion";

const FadeInUp = ({
    children,
    delay = 0,
    duration = 0.8, // smoother by default
    offset = 30,
    once = true
    }) => {
    return (
        <motion.div
        initial={{ opacity: 0, y: offset }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, amount: 0.2 }} // Trigger when 20% visible
        transition={{
            duration,
            ease: [0.25, 0.46, 0.45, 0.94], // custom cubic-bezier easeOutBack like animation
            delay
        }}
        >
        {children}
        </motion.div>
    );
};

export default FadeInUp;
