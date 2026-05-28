// Navigace — příjezd shora při načtení
export const navAnimation = {
    initial: { opacity: 0, y: -30, x: "-50%" },
    animate: { opacity: 1, y: 0, x: "-50%" },
    transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
};

// Hero nadpisy — vplutí zespodu při načtení
export const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, delay: 0.5, ease: "easeOut" }
};

// Hero label — vplutí zleva při načtení
export const fadeInRight = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, delay: 0.3, ease: "easeOut" }
};

// Sekce — vplutí zespodu při scrollování
export const fadeInUpScroll = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true },
};

// Sekce — vplutí zleva při scrollování
export const slideInLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true },
};

// Sekce — vplutí zprava při scrollování
export const slideInRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.9, ease: "easeOut" },
    viewport: { once: true },
};

// Karty — vplutí zespodu s volitelným zpožděním
export const cardFadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" },
    viewport: { once: true },
});
