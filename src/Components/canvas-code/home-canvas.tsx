import './home-canvas.css';

export function HomeCanvas() {
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
                
          
                
                
                <polygon points="300,300 900,300 600,1000" fill="none" stroke="var(--red-color)" strokeWidth="2" opacity="0.4">
                    <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite" />
                </polygon>
                
            </svg>
        </div>
    );
}

