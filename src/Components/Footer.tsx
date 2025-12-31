import './Footer.css';

export function Footer() {
    return(
        <>
        <footer className="footer">
            <div className="container">
                <div className="footer-left">
                    <div className="footer-logo">
                        <a href="#home">
                            <img src="/codewhitelogo.png" alt="Ankor Logo" className="footer-logo-image" />
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
