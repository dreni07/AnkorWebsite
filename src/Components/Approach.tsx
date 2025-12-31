import './Approach.css';

export function Approach () {
    const handleButtonScroll = (targetId: string) => {
        const element = document.getElementById(targetId);
        if (element) {
            const headerHeight = 70;
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
            <section id="approach" className="approach">
                <div className="container">
                    <div className="approach-text">
                        <p className="approach-label">OUR PROCESS</p>
                        <h1 className="approach-title">IT Outsourcing, Made Easy</h1>
                    </div>
                    <div className="approach-container">
                        <div className="approach-card">
                            <div className="approach-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                                    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h1 className="approach-card-title">Discover</h1>
                            <p className="approach-card-text">Understand your goals and challenges before planning.</p>
                        </div>
                        <div className="approach-card">
                            <div className="approach-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" fill="none"/>
                                    <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
                                    <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
                                    <path d="M12 2v20" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h1 className="approach-card-title">Strategize</h1>
                            <p className="approach-card-text">Build smart, long-term solutions, not quick fixes.</p>
                        </div>
                        <div className="approach-card">
                            <div className="approach-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12h14M5 12l4-4M5 12l4 4M19 12l-4-4M19 12l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h1 className="approach-card-title">Execute</h1>
                            <p className="approach-card-text">Deliver projects efficiently with quality and innovation.</p>
                        </div>
                        <div className="approach-card">
                            <div className="approach-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h1 className="approach-card-title">Integrate</h1>
                            <p className="approach-card-text">Work hand-in-hand with your team seamlessly.</p>
                        </div>
                        <div className="approach-card">
                            <div className="approach-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <h1 className="approach-card-title">Optimize</h1>
                            <p className="approach-card-text">Measure results, refine processes, and stay transparent.</p>
                        </div>
                    </div>
                    <div className="approach-button-container">
                        <button className="approach-button" onClick={() => handleButtonScroll('transform')}>Request a Project</button>
                    </div>
                </div>
            </section>
        </>
    )
}
