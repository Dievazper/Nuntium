import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { mockNews } from '../data/mockNews';
import { ArrowRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
    const { t, language } = useLanguage();
    const heroNews = mockNews[0]; // First item as hero
    const content = heroNews.content[language];

    return (
        <section className="hero" id="home">
            <div className="hero-bg" style={{ backgroundImage: `url(${heroNews.image})` }}></div>
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <span className="hero-tag">{t.hero.trending}</span>
                <h2 className="hero-title">{content.title}</h2>
                <p className="hero-desc">{content.description}</p>

                <a href={heroNews.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary hero-btn">
                    {t.hero.readMore} <ArrowRight size={16} />
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
