import { useHeader } from '../hooks/header-hooks';
import './Header.css';

export function Header () {
    const { isMenuOpen, toggleMenu, closeMenu } = useHeader();

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
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
        closeMenu();
    };

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
        closeMenu();
    };

    return (
      <>
        <header className="header">
          <div className="header-container">
           
            <div className="header-logo">
              <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>
                <img src="/codeblacklogo.png" alt="Ankor Logo" className="logo-image" />
              </a>
            </div>

          
            <nav className="header-nav">
              <ul className="nav-list">
                <li>
                  <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a>
                </li>
                <li><a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')}>Services</a></li>
                <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a></li>
                <li><a href="#approach" onClick={(e) => handleSmoothScroll(e, 'approach')}>Our Process</a></li>
                <li><a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')}>FAQ</a></li>
                <li><a href="#transform" onClick={(e) => handleSmoothScroll(e, 'transform')}>Contact Us</a></li>
              </ul>
            </nav>

        
            <div className="header-right">
              <a href="tel:+38349202063" className="phone-link">+383 43 808 150</a>
              <button className="quote-button" onClick={() => handleButtonScroll('transform')}>Request a Project</button>
            </div>

            
            <button className={`hamburger-menu ${isMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
              <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            </button>
          </div>
        </header>

      
        <div className={`sidebar-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
        <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
          <button className="sidebar-close" onClick={closeMenu} aria-label="Close menu">
            ×
          </button>
          <nav className="sidebar-nav">
            <ul className="sidebar-nav-list">
              <li>
                <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a>
              </li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')}>Services</a></li>
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a></li>
              <li><a href="#approach" onClick={(e) => handleSmoothScroll(e, 'approach')}>Our Process</a></li>
              <li><a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')}>FAQ</a></li>
              <li><a href="#transform" onClick={(e) => handleSmoothScroll(e, 'transform')}>Contact Us</a></li>
            </ul>
          </nav>
        </aside>
      </>
    )
}