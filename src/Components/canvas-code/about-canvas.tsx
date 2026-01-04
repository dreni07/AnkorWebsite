import './about-canvas.css';

export function AboutCanvas() {
    return (
        <div className="about-canvas-container">
            <svg className="about-animated-lines" viewBox="0 0 1920 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="aboutLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--red-color)" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="var(--red-color)" stopOpacity="0.15" />
                    </linearGradient>
                </defs>
                
                <path d="M0,100 Q480,200 960,100 T1920,100" stroke="var(--red-color)" strokeWidth="1.5" fill="none" opacity="0.1">
                    <animate attributeName="d" 
                        values="M0,100 Q480,200 960,100 T1920,100;M0,300 Q480,50 960,300 T1920,300;M0,100 Q480,200 960,100 T1920,100" 
                        dur="12s" 
                        repeatCount="indefinite" />
                </path>
                
                <path d="M0,250 Q640,150 1280,250 T1920,250" stroke="var(--red-color)" strokeWidth="1.5" fill="none" opacity="0.09">
                    <animate attributeName="d" 
                        values="M0,250 Q640,150 1280,250 T1920,250;M0,450 Q640,350 1280,450 T1920,450;M0,250 Q640,150 1280,250 T1920,250" 
                        dur="14s" 
                        repeatCount="indefinite" />
                </path>
                
                <path d="M0,400 Q800,300 1600,400 T1920,400" stroke="var(--red-color)" strokeWidth="1.5" fill="none" opacity="0.095">
                    <animate attributeName="d" 
                        values="M0,400 Q800,300 1600,400 T1920,400;M0,200 Q800,500 1600,200 T1920,200;M0,400 Q800,300 1600,400 T1920,400" 
                        dur="16s" 
                        repeatCount="indefinite" />
                </path>
                
                <path d="M0,600 Q480,500 960,600 T1920,600" stroke="var(--red-color)" strokeWidth="1.5" fill="none" opacity="0.08">
                    <animate attributeName="d" 
                        values="M0,600 Q480,500 960,600 T1920,600;M0,350 Q480,700 960,350 T1920,350;M0,600 Q480,500 960,600 T1920,600" 
                        dur="18s" 
                        repeatCount="indefinite" />
                </path>
            </svg>
        </div>
    );
}

