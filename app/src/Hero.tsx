import { useRef } from "react";
import gsap from "gsap";

const TEXT = "HERE WE PLAY";

export function HeroText() {
    const ref = useRef<HTMLDivElement>(null);
    const last = useRef({ x: 0, y: 0, time: 0 });

    function handleMove(e: React.MouseEvent<HTMLDivElement>) {
        const wrap = ref.current;
        if (!wrap) return;

        const now = performance.now();

        if (last.current.time === 0) {
            last.current = { x: e.clientX, y: e.clientY, time: now };
            return;
        }

        const dt = Math.max(16, now - last.current.time);
        const dx = e.clientX - last.current.x;
        const dy = e.clientY - last.current.y;

        last.current = { x: e.clientX, y: e.clientY, time: now };

        const pxPerSecond = (Math.sqrt(dx * dx + dy * dy) / dt) * 1000;

        const stretch = gsap.utils.clamp(
            0,
            1,
            gsap.utils.mapRange(100, 2500, 0, 1, pxPerSecond)
        );

        const direction = dx >= 0 ? 1 : -1;



        wrap.querySelectorAll(".stretch-title").forEach((title) => {
            const layerStrength = Number(
                (title as HTMLElement).dataset.strength ?? 1
            );

            title.querySelectorAll(".char").forEach((char) => {
                const el = char as HTMLElement;
                const rect = el.getBoundingClientRect();

                const charX = rect.left + rect.width / 2;
                const distance = Math.abs(e.clientX - charX);
                const falloff = gsap.utils.clamp(0, 1, 1 - distance / 160);

                const distanceY = Math.abs(e.clientY - (rect.top + rect.height / 2));
                const distance2D = Math.sqrt(distance * distance + distanceY * distanceY);

                const warpFalloff = gsap.utils.clamp(0, 1, 1 - distance2D / 220);
                const warp = warpFalloff * warpFalloff; // smoother gradient

                const amount = stretch * falloff * layerStrength;
                const zoom = 1 + warp * 0.12;

                gsap.to(el, {
                    scaleX: (1 + amount * 0.45) * zoom,
                    scaleY: (1 - amount * 0.08) * zoom,
                    skewX: direction * amount * 10,
                    x: direction * amount * 6,
                    y: -warp * 2,
                    transformOrigin: "center center",
                    duration: 0.55,
                    ease: "elastic.out(1, 0.32)",
                });
            });
        });
    }

    function handleLeave() {
        last.current.time = 0;

        gsap.to(ref.current?.querySelectorAll(".char") ?? [], {
            scaleX: 1,
            scaleY: 1,
            skewX: 0,
            x: 0,
            duration: 0.75,
            ease: "elastic.out(1, 0.28)",
        });
    }

    return (
        <div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="hero-text-wrap"
        >
            <HeroTextLayer text={TEXT} className="text-blue" strength={2.3} />
            <HeroTextLayer text={TEXT} className="text-green" strength={1.5} />
            <div className="magnifier">
                <HeroTextLayer text={TEXT} className="text-main magnifier-text" strength={1} />
            </div>

        </div>
    );
}

function HeroTextLayer({
                           text,
                           className,
                           strength,
                       }: {
    text: string;
    className: string;
    strength: number;
}) {
    return (
        <h1 className={`stretch-title ${className}`} data-strength={strength}>
            {text.split("").map((char, i) => (
                <span className="char" key={i}>
          {char === " " ? "\u00A0" : char}
        </span>
            ))}
        </h1>
    );
}