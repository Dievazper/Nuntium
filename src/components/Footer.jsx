import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer style={{
            padding: '4rem 2rem',
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            color: '#666',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} NVNTIVM. {t.footer.rights}</p>
                    <a href="/Nuntium/hola.html" style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem', display: 'block' }}>Greeting Page</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
