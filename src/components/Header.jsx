import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
    const { t, language, setLanguage, availableLanguages } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    return (
        <header className="header glass-panel">
            <div className="container header-content">
                <div className="logo">
                    <h1>NVNTIVM</h1>
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul>
                        <li><a href="#home">{t.nav.home}</a></li>
                        <li><a href="#world">{t.nav.world}</a></li>
                        <li><a href="#tech">{t.nav.tech}</a></li>
                        <li><a href="#business">{t.nav.business}</a></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    {/* Language Selector */}
                    <div className="lang-selector-wrapper">
                        <button
                            className="lang-btn"
                            onClick={() => setIsLangOpen(!isLangOpen)}
                        >
                            <Globe size={20} />
                            <span>{language.toUpperCase()}</span>
                        </button>

                        {isLangOpen && (
                            <div className="lang-dropdown glass-panel">
                                {availableLanguages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        className={`lang-option ${language === lang.code ? 'active' : ''}`}
                                        onClick={() => {
                                            setLanguage(lang.code);
                                            setIsLangOpen(false);
                                        }}
                                    >
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <a href="#subscribe" className="btn btn-primary btn-sm">{t.nav.subscribe}</a>

                    <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <nav className="mobile-nav glass-panel">
                    <ul>
                        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</a></li>
                        <li><a href="#world" onClick={() => setIsMenuOpen(false)}>{t.nav.world}</a></li>
                        <li><a href="#tech" onClick={() => setIsMenuOpen(false)}>{t.nav.tech}</a></li>
                        <li><a href="#business" onClick={() => setIsMenuOpen(false)}>{t.nav.business}</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
