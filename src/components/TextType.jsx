import { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';

// Komponenta která postupně píše a maže text — efekt psacího stroje
// Parametry:
//   text            — string nebo pole stringů (přepíná mezi nimi)
//   typingSpeed     — rychlost psaní v ms na znak (výchozí: 50)
//   deletingSpeed   — rychlost mazání v ms na znak (výchozí: 30)
//   pauseDuration   — pauza po dopsání textu v ms (výchozí: 2000)
//   initialDelay    — zpoždění před začátkem animace v ms (výchozí: 0)
//   showCursor      — zobrazit blikající kurzor (výchozí: true)
//   cursorCharacter — znak kurzoru (výchozí: '|')
const TextType = ({
    text,
    typingSpeed = 50,
    deletingSpeed = 30,
    pauseDuration = 2000,
    initialDelay = 0,
    showCursor = true,
    cursorCharacter = '|',
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const cursorRef = useRef(null);

    // Zajistí že text je vždy pole (i když přijde jeden string)
    const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

    // Animace blikání kurzoru přes gsap
    useEffect(() => {
        if (showCursor && cursorRef.current) {
            gsap.to(cursorRef.current, {
                opacity: 0,
                duration: 0.5,
                repeat: -1,
                yoyo: true,
                ease: 'power2.inOut',
            });
        }
    }, [showCursor]);

    // Hlavní logika psaní a mazání
    useEffect(() => {
        let timeout;
        const currentText = textArray[currentTextIndex];

        const tick = () => {
            if (isDeleting) {
                // Mazání — odeber poslední znak
                if (displayedText === '') {
                    // Text smazán — přejdi na další
                    setIsDeleting(false);
                    setCurrentTextIndex(prev => (prev + 1) % textArray.length);
                    setCurrentCharIndex(0);
                } else {
                    timeout = setTimeout(() => {
                        setDisplayedText(prev => prev.slice(0, -1));
                    }, deletingSpeed);
                }
            } else {
                if (currentCharIndex < currentText.length) {
                    // Psaní — přidej další znak
                    timeout = setTimeout(() => {
                        setDisplayedText(prev => prev + currentText[currentCharIndex]);
                        setCurrentCharIndex(prev => prev + 1);
                    }, typingSpeed);
                } else {
                    // Text dopsán — počkej a začni mazat
                    timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            }
        };

        // První spuštění — počkej initialDelay
        if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
            timeout = setTimeout(tick, initialDelay);
        } else {
            tick();
        }

        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentCharIndex, displayedText, isDeleting, currentTextIndex]);

    return (
        <span>
            <span>{displayedText}</span>
            {showCursor && (
                <span ref={cursorRef}>{cursorCharacter}</span>
            )}
        </span>
    );
};

export default TextType;
