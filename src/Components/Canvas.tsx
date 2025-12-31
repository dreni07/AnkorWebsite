import './Canvas.css';

export function Canvas() {
    return (
        <div className="canvas-container">
            <svg className="animated-triangle" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--red-color)" stopOpacity="0.2">
                            <animate attributeName="stopOpacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" stopColor="var(--red-color)" stopOpacity="0.6">
                            <animate attributeName="stopOpacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" />
                        </stop>
                    </linearGradient>
                </defs>
                
                {/* Multiple thin animated lines creating a triangle pattern */}
                {/* Horizontal lines */}
                <line x1="300" y1="300" x2="900" y2="300" stroke="var(--red-color)" strokeWidth="1" opacity="0.3">
                    <animate attributeName="x1" values="300;350;300" dur="5s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="900;850;900" dur="5s" repeatCount="indefinite" />
                </line>
                <line x1="330" y1="330" x2="870" y2="330" stroke="var(--red-color)" strokeWidth="1" opacity="0.25">
                    <animate attributeName="x1" values="330;380;330" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="870;820;870" dur="6s" repeatCount="indefinite" />
                </line>
                <line x1="360" y1="360" x2="840" y2="360" stroke="var(--red-color)" strokeWidth="1" opacity="0.2">
                    <animate attributeName="x1" values="360;410;360" dur="7s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="840;790;840" dur="7s" repeatCount="indefinite" />
                </line>
                
                {/* Vertical lines */}
                <line x1="600" y1="200" x2="600" y2="1000" stroke="var(--red-color)" strokeWidth="1" opacity="0.3">
                    <animate attributeName="y1" values="200;250;200" dur="5.5s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="1000;950;1000" dur="5.5s" repeatCount="indefinite" />
                </line>
                <line x1="570" y1="250" x2="570" y2="950" stroke="var(--red-color)" strokeWidth="1" opacity="0.25">
                    <animate attributeName="y1" values="250;300;250" dur="6.5s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="950;900;950" dur="6.5s" repeatCount="indefinite" />
                </line>
                <line x1="630" y1="250" x2="630" y2="950" stroke="var(--red-color)" strokeWidth="1" opacity="0.25">
                    <animate attributeName="y1" values="250;300;250" dur="6.5s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="950;900;950" dur="6.5s" repeatCount="indefinite" />
                </line>
                
                {/* Diagonal lines forming triangle sides */}
                {/* Left side of triangle */}
                <line x1="300" y1="300" x2="600" y2="1000" stroke="var(--red-color)" strokeWidth="1" opacity="0.3">
                    <animate attributeName="x1" values="300;350;300" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="y1" values="300;350;300" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="600;550;600" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="1000;950;1000" dur="4s" repeatCount="indefinite" />
                </line>
                <line x1="330" y1="350" x2="600" y2="1000" stroke="var(--red-color)" strokeWidth="1" opacity="0.25">
                    <animate attributeName="x1" values="330;380;330" dur="4.5s" repeatCount="indefinite" />
                    <animate attributeName="y1" values="350;400;350" dur="4.5s" repeatCount="indefinite" />
                </line>
                <line x1="360" y1="400" x2="600" y2="1000" stroke="var(--red-color)" strokeWidth="1" opacity="0.2">
                    <animate attributeName="x1" values="360;410;360" dur="5s" repeatCount="indefinite" />
                    <animate attributeName="y1" values="400;450;400" dur="5s" repeatCount="indefinite" />
                </line>
                
                {/* Right side of triangle */}
                <line x1="900" y1="300" x2="600" y2="1000" stroke="var(--red-color)" strokeWidth="1" opacity="0.3">
                    <animate attributeName="x1" values="900;850;900" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="y1" values="300;350;300" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="600;650;600" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="1000;950;1000" dur="4s" repeatCount="indefinite" />
                </line>
                <line x1="870" y1="350" x2="600" y2="1000" stroke="var(--red-color)" strokeWidth="1" opacity="0.25">
                    <animate attributeName="x1" values="870;820;870" dur="4.5s" repeatCount="indefinite" />
                    <animate attributeName="y1" values="350;400;350" dur="4.5s" repeatCount="indefinite" />
                </line>
                <line x1="840" y1="400" x2="600" y2="1000" stroke="var(--red-color)" strokeWidth="1" opacity="0.2">
                    <animate attributeName="x1" values="840;790;840" dur="5s" repeatCount="indefinite" />
                    <animate attributeName="y1" values="400;450;400" dur="5s" repeatCount="indefinite" />
                </line>
                
                {/* Base of triangle */}
                <line x1="300" y1="300" x2="900" y2="300" stroke="var(--red-color)" strokeWidth="1" opacity="0.3">
                    <animate attributeName="x1" values="300;350;300" dur="3.5s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="900;850;900" dur="3.5s" repeatCount="indefinite" />
                </line>
                <line x1="330" y1="300" x2="870" y2="300" stroke="var(--red-color)" strokeWidth="1" opacity="0.25">
                    <animate attributeName="x1" values="330;380;330" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="870;820;870" dur="4s" repeatCount="indefinite" />
                </line>
                
                {/* Main triangle outline */}
                <polygon points="300,300 900,300 600,1000" fill="none" stroke="var(--red-color)" strokeWidth="2" opacity="0.4">
                    <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite" />
                </polygon>
                
                {/* Additional decorative lines inside triangle */}
                <line x1="450" y1="450" x2="750" y2="450" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3">
                    <animate attributeName="x1" values="450;500;450" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="750;700;750" dur="6s" repeatCount="indefinite" />
                </line>
                <line x1="525" y1="600" x2="675" y2="600" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3">
                    <animate attributeName="x1" values="525;575;525" dur="7s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="675;625;675" dur="7s" repeatCount="indefinite" />
                </line>
            </svg>
        </div>
    );
}

