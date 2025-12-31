import { useState } from 'react';

export function useHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return {
        isMenuOpen,
        toggleMenu,
        closeMenu
    };
}

