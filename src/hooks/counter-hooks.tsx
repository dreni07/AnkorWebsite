import { useState, useEffect, useRef } from 'react';

export function useCounter() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const hasAnimatedRef = useRef(false);

    const targetValues = {
        count1: 50,
        count2: 300,
        count3: 3
    };

    const texts = {
        text1: 'Projects Completed',
        text2: 'Lines of Code Written',
        text3: 'Years of Experience'
    };

    const animateCounter = (target: number, setCount: React.Dispatch<React.SetStateAction<number>>) => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
    };

    useEffect(() => {
        if (hasAnimatedRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimatedRef.current) {
                        hasAnimatedRef.current = true;
                        // setHasAnimated(true);
                        animateCounter(targetValues.count1, setCount1);
                        animateCounter(targetValues.count2, setCount2);
                        animateCounter(targetValues.count3, setCount3);
                        // Disconnect observer after animation starts
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return {
        count1,
        count2,
        count3,
        sectionRef,
        texts
    };
}

