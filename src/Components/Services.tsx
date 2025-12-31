import './Services.css';

export function Services () {
    return (
  <>
  <section id="services" className="services">
    <div className="container">
        <div className="service-text">
            <p className="service-label">OUR SERVICES</p>
            <h1 className="service-title">IT Solutions Designed for Efficiency and Growth</h1>
        </div>
        <div className="service-container">
            <div className="service-card service-card-1">
                <h2 className="service-card-title">Software Development</h2>
            </div>
            <div className="service-card service-card-2">
                <h2 className="service-card-title">Maintenance & Support</h2>
            </div>
            <div className="service-card service-card-3">
                <h2 className="service-card-title">QA & Testing Services</h2>
            </div>
        </div>
    </div>
  </section>
  </>
    )
}