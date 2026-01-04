import './Footer.css';
import logo from '../assets/ankor-logo-2.png';

export function Footer() {
    return(
        <>
        <footer className="footer">
            <div className="container">
                <div className="footer-left">
                    <div className="footer-logo">
                        <a href="#home">
                            <img src={logo} alt="Ankor Logo" className="footer-logo-image" />
                        </a>
                    </div>
                </div>
                <div className="footer-right">
                    <p>© 2025 ankor. All rights reserved.</p>
                </div>
            </div>
        </footer>
        </>
    )
}
