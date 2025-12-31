import { useState } from 'react';

export function useFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return {
        openIndex,
        toggleFaq
    };
}

