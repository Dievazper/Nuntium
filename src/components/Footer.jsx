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
                <h3>NVNTIVM</h3>
                <p style={{ margin: '1rem 0' }}>{t.footer.rights} © {year}</p>
            </div>
        </footer>
    );
};

export default Footer;
