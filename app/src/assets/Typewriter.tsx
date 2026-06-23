import { useEffect, useState } from "react";

export type TypewriterOptions = {
    delim?: string;
    content: string;
    pause?: number
    delay?: number
};

export function Typewriter(options: TypewriterOptions) {
    const [buf, setBuf] = useState("");
    const [cursor, setCursor] = useState(0);
    const [direction, setDirection] = useState<"R" | "L">("R");

    useEffect(() => {
        const isAtEnd = direction === "R" && cursor >= options.content.length;
        const isAtStart = direction === "L" && cursor <= 0;

        const timeout = setTimeout(() => {
            if (direction === "R") {
                if (cursor < options.content.length) {
                    setBuf((prev) => prev + options.content[cursor]);
                    setCursor((prev) => prev + 1);
                } else {
                    setDirection("L");
                }
            } else {
                if (cursor > 0) {
                    setBuf((prev) => prev.slice(0, -1));
                    setCursor((prev) => prev - 1);
                } else {
                    setDirection("R");
                }
            }
        }, isAtEnd || isAtStart ? options.pause ?? 1000 : options.delay ?? 300);

        return () => clearTimeout(timeout);
    }, [cursor, direction, options.content, options.delay, options.pause]);

    return (
        <>
            {buf}
            <span>{options.delim}</span>
        </>
    );
}