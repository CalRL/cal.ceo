import { useRef } from "react";
import gsap from "gsap";

export function GrabCard() {
    const ref = useRef<HTMLDivElement>(null);

    function handleMove(e: React.MouseEvent<HTMLDivElement>) {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(el, {
            x: x * 0.25,
            y: y * 0.25,
            rotateX: -y * 0.05,
            rotateY: x * 0.05,
            duration: 0.3,
            ease: "power3.out",
        });
    }

    function handleLeave() {
        gsap.to(ref.current, {
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.4)",
        });
    }

    return (
        <div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="grab-card"
        >
            Hover me
        </div>
    );
}