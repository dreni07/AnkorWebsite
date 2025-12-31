import './Home.css';
import { HomeCanvas } from './canvas-code/home-canvas';

export function Home () {
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
        <>
        <section id="home" className="home">
            <HomeCanvas />
            <div className="container">
                <div>
                  <h1>Your Trusted IT Outsourcing Partner</h1>
                </div>
                <div>
                    <p>Partner with us to grow your business. Our strategic approach and industry expertise make achieving your goals faster and easier.</p>

                    <button className="home-button" onClick={() => handleButtonScroll('services')}>Learn More <span className="arrow-down">↓</span></button>
                </div>
            </div>
        </section>
        </>
    )
}