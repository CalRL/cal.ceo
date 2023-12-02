import React, { useEffect, useRef } from "react";
import { Neko } from "neko-ts";

export const NekoPonent: React.FC = () => {
    const neko = useRef<Neko | null>(null);

    useEffect(() => {
        if (!neko.current) {
            neko.current = new Neko({
                origin: {
                    x: 100,
                    y: 100,
                },
            });
        }
        // Perform any cleanup if needed when the component unmounts
        return () => {
            if (neko.current) {
                // Cleanup logic, e.g., neko.current.destroy();
            }
        };
    }, []);

    // Your component JSX goes here
    return <div className="neko-container"></div>;
};
