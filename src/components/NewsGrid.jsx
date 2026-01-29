import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { mockNews } from '../data/mockNews';
import { ExternalLink } from 'lucide-react';
import './NewsGrid.css';

const NewsGrid = () => {
    const { t, language } = useLanguage();
    const newsItems = mockNews.slice(1); // Skip first (hero)

    return (
        <section className="news-grid-section container" id="world">
            <div className="grid-header">
                <h2>{t.nav.world}</h2>
                <div className="line"></div>
            </div>

            <div className="news-grid">
                {newsItems.map((item) => {
                    const content = item.content[language];
                    return (
                        <article key={item.id} className="news-card glass-panel">
                            <div className="card-image-wrapper">
                                <img src={item.image} alt={content.title} />
                                <span className="card-category">{item.category}</span>
                            </div>
                            <div className="card-content">
                                <span className="card-date">{item.date}</span>
                                <h3>{content.title}</h3>
                                <p>{content.description}</p>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="card-link">
                                    {t.hero.readMore} <ExternalLink size={14} />
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default NewsGrid;
