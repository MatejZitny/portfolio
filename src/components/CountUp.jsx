import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';

// Komponenta která animovaně počítá číslo od "from" do "to"
// když se prvek dostane do pohledu při scrollování
export default function CountUp({ from = 0, to, duration = 2 }) {
    const ref = useRef(null);

    // Počáteční hodnota animace
    const motionValue = useMotionValue(from);

    // Pružná animace — dává efekt zpomalení na konci
    const springValue = useSpring(motionValue, {
        damping: 20 + 40 * (1 / duration),
        stiffness: 100 * (1 / duration),
    });

    // Sleduje jestli je prvek viditelný na obrazovce
    const isInView = useInView(ref, { once: true });

    // Spustí animaci jakmile je prvek vidět
    useEffect(() => {
        if (isInView) {
            motionValue.set(to);
        }
    }, [isInView, motionValue, to]);

    // Aktualizuje zobrazené číslo při každém kroku animace
    useEffect(() => {
        return springValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.round(latest);
            }
        });
    }, [springValue]);

    return <span ref={ref}>{from}</span>;
}
