import React, { useState, useEffect, useRef } from 'react';

interface GlitchTextProps {
    text: string;
    as?: React.ElementType; // Allows rendering as 'span', 'h1', 'p', etc.
    className?: string;
    wordClassName?: string;
    speed?: number; // Delay in ms between words
    style?: React.CSSProperties; // Allow custom styles
}

const GlitchText: React.FC<GlitchTextProps> = ({
    text,
    as: Component = 'span',
    className = '',
    wordClassName = '',
    speed = 50,
    style
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (ref.current) {
            observer.observe(ref.current as HTMLElement);
        }

        return () => observer.disconnect();
    }, []);

    // Split text into words to animate individually
    const words = text.split(' ');

    return (
        <Component ref={ref} className={`${className} inline-block`} style={style}>
            {words.map((word, i) => (
                <span
                    key={i}
                    className={`inline-block mr-[0.25em] ${isVisible ? 'animate-glitch-word' : 'opacity-0'} ${wordClassName}`}
                    style={{ animationDelay: `${i * speed}ms` }}
                >
                    {word}
                </span>
            ))}
        </Component>
    );
};

export default GlitchText;
