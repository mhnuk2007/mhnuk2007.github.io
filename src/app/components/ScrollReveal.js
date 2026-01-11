'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
    children,
    animation = 'fade-up',
    delay = 0,
    threshold = 0.1,
    className = ''
}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    const getAnimationClass = () => {
        if (!isVisible) return 'opacity-0';

        switch (animation) {
            case 'fade-up':
                return 'animate-fade-in-up';
            case 'fade-down':
                return 'animate-fade-in-down';
            case 'fade':
                return 'animate-fade-in';
            case 'slide-left':
                return 'animate-slide-left';
            case 'slide-right':
                return 'animate-slide-right';
            default:
                return 'animate-fade-in';
        }
    };

    return (
        <div
            ref={ref}
            className={`${getAnimationClass()} ${className}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
