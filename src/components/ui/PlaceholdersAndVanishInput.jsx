import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function PlaceholdersAndVanishInput({ placeholders, onChange, onSubmit }) {
    const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
    const [error, setError] = useState(false);
    const intervalRef = useRef(null);
    const canvasRef = useRef(null);
    const newDataRef = useRef([]);
    const inputRef = useRef(null);
    const [value, setValue] = useState("");
    const [animating, setAnimating] = useState(false);

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const startAnimation = () => {
        if (!placeholders || !Array.isArray(placeholders)) return;
        intervalRef.current = setInterval(() => {
            setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
        }, 3000);
    };

    const handleVisibilityChange = () => {
        if (document.visibilityState !== "visible" && intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        } else if (document.visibilityState === "visible") {
            startAnimation();
        }
    };

    useEffect(() => {
        startAnimation();
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [placeholders]);

    const draw = useCallback(() => {
        if (!inputRef.current || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = 800;
        canvas.height = 800;
        ctx.clearRect(0, 0, 800, 800);
        const computedStyles = getComputedStyle(inputRef.current);

        const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
        ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
        ctx.fillStyle = "#2D2D2D";
        ctx.fillText(value, 16, 40);

        const imageData = ctx.getImageData(0, 0, 800, 800);
        const pixelData = imageData.data;
        const newData23 = [];

        for (let t = 0; t < 800; t++) {
            let i = 4 * t * 800;
            for (let n = 0; n < 800; n++) {
                let e = i + 4 * n;
                if (
                    e + 3 < pixelData.length &&
                    pixelData[e] !== 0 &&
                    pixelData[e + 1] !== 0 &&
                    pixelData[e + 2] !== 0
                ) {
                    newData23.push({
                        x: n,
                        y: t,
                        color: [
                            pixelData[e] || 0,
                            pixelData[e + 1] || 0,
                            pixelData[e + 2] || 0,
                            pixelData[e + 3] || 255,
                        ],
                    });
                }
            }
        }

        newDataRef.current = newData23.map(({ x, y, color }) => ({
            x,
            y,
            r: 1,
            color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
        }));
    }, [value]);

    useEffect(() => {
        draw();
    }, [value, draw]);

    const animate = (start) => {
        const animateFrame = (pos = 0) => {
            requestAnimationFrame(() => {
                const newArr = [];
                for (let i = 0; i < newDataRef.current.length; i++) {
                    const current = newDataRef.current[i];
                    if (current.x < pos) {
                        newArr.push(current);
                    } else {
                        if (current.r <= 0) {
                            current.r = 0;
                            continue;
                        }
                        current.x += Math.random() > 0.5 ? 1 : -1;
                        current.y += Math.random() > 0.5 ? 1 : -1;
                        current.r -= 0.05 * Math.random();
                        newArr.push(current);
                    }
                }
                newDataRef.current = newArr;
                const ctx = canvasRef.current?.getContext("2d");
                if (ctx) {
                    ctx.clearRect(pos, 0, 800, 800);
                    newDataRef.current.forEach((t) => {
                        const { x: n, y: i, r: s, color } = t;
                        if (n > pos) {
                            ctx.beginPath();
                            ctx.rect(n, i, s, s);
                            ctx.fillStyle = color;
                            ctx.strokeStyle = color;
                            ctx.stroke();
                        }
                    });
                }
                if (newDataRef.current.length > 0) {
                    animateFrame(pos - 8);
                } else {
                    setValue("");
                    setAnimating(false);
                    setError(false);
                }
            });
        };
        animateFrame(start);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !animating) {
            vanishAndSubmit();
        }
    };

    const vanishAndSubmit = () => {
        if (!isValidEmail(value)) {
            setError(true);
            return;
        }

        setAnimating(true);
        draw();
        if (value && inputRef.current && newDataRef.current.length > 0) { // Removed const value declaration
            const maxX = newDataRef.current.reduce(
                (prev, current) => (current.x > prev ? current.x : prev),
                0
            );
            animate(maxX);
            onSubmit && onSubmit({ target: { value } });
        } else {
            setValue("");
            setAnimating(false);
            setError(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        vanishAndSubmit();
    };

    return (
        <div className="relative w-[80%] max-w-xl">
            <form
                className={cn(
                    "relative text-[#F5F5F5] bg-[#2D2D2D] placeholder-[#B0B0B0] h-12 rounded-lg overflow-hidden transition duration-200",
                    value && "text-[#F5F5F5] bg-[#2D2D2D]",
                    error && "ring-2 ring-red-500"
                )}
                onSubmit={handleSubmit}
            >
                <canvas
                    className={cn(
                        "absolute pointer-events-none text-base transform scale-50 top-[20%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0 pr-20",
                        !animating ? "opacity-0" : "opacity-100"
                    )}
                    ref={canvasRef}
                />
                <input
                    onChange={(e) => {
                        if (!animating) {
                            setValue(e.target.value);
                            setError(false);
                            onChange && onChange(e);
                        }
                    }}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                    value={value}
                    type="email"
                    className={cn(
                        "w-full relative text-sm sm:text-base z-50 border-none text-[#F5F5F5] bg-[#2D2D2D] placeholder-[#B0B0B0] dark:text-white bg-transparent h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20",
                        animating && "text-transparent"
                    )}
                />
                <button
                    disabled={!value || animating}
                    type="submit"
                    className="absolute right-2 top-1/2 z-50 -translate-y-1/2 h-8 w-8 rounded-sm disabled:bg-gray-300 bg-white dark:bg-zinc-900 dark:disabled:bg-zinc-800 transition duration-200 flex items-center justify-center"
                >
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black h-4 w-4"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <motion.path
                            d="M5 12l14 0"
                            initial={{ strokeDasharray: "50%", strokeDashoffset: "50%" }}
                            animate={{ strokeDashoffset: value ? 0 : "50%" }}
                            transition={{ duration: 0.3, ease: "linear" }}
                        />
                        <path d="M13 18l6 -6" />
                        <path d="M13 6l6 6" />
                    </motion.svg>
                </button>
                <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
                    <AnimatePresence mode="wait">
                        {!value && placeholders?.length > 0 && (
                            <motion.p
                                key={placeholders[currentPlaceholder]}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="text-sm sm:text-base font-normal text-[#B0B0B0] pl-4 sm:pl-12 text-left w-[calc(100%-2rem)] truncate"
                            >
                                {placeholders[currentPlaceholder]}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </form>
            {error && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 absolute left-4"
                >
                    Please enter a valid email address
                </motion.p>
            )}
        </div>
    );
}