import './About.css';
import { AboutCanvas } from './canvas-code/about-canvas';

export function About () {
    const handleButtonScroll = (targetId: string) => {
        const element = document.getElementById(targetId);
        if (element) {
            const headerHeight = 70; // Header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="about" className="about">
            <AboutCanvas />
            <div className="container">
                <p className="about-label">ABOUT US</p>
                <h1 className="about-title">At Ankor, we turn IT outsourcing obstacles like inefficient workflows, communication gaps, and complex processes into opportunities for growth. <strong>We innovate the way IT outsourcing works!</strong> With strong expertise in <strong>managed IT services</strong> and <strong>modern digital tools</strong>, we support businesses in <strong>cutting costs</strong>, <strong>improving operations</strong>, and <strong>scaling smoothly</strong>. We deliver <strong>competitive solutions</strong>, foster <strong>seamless collaboration</strong>, and provide <strong>top-quality service</strong>, all guided by <strong>industry best practices</strong> for consistency and excellence.</h1>
                <button className="about-button" onClick={() => handleButtonScroll('transform')}>Request a Project <span className="arrow-right">→</span></button>
            </div>
        </section>
    )
    
}