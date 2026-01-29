import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, MapPin } from 'lucide-react';
import './AmpostaSection.css';

const AmpostaSection = () => {
    const { t } = useLanguage();

    const ampostaNews = [
        {
            id: 1,
            title: "Jazzy Souffle - Notícies Destacades",
            desc: "Actualitat i novetats locals presentades per Jazzy Souffle.",
            link: "https://6968ae180337b13c2201571c--jazzy-souffle-6342be.netlify.app/",
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            title: "Podcast UCDM - Episodi MF",
            desc: "Escolta l'últim podcast sobre temes d'actualitat a la UCDM.",
            link: "https://ucdm.cat/podcastMF.php?t=5",
            image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac618?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section className="amposta-section container" id="amposta">
            <div className="grid-header">
                <h2>{t.nav.amposta} <MapPin size={32} style={{ marginLeft: '10px', color: 'var(--accent)' }} /></h2>
                <div className="line"></div>
            </div>

            <div className="amposta-grid">
                {ampostaNews.map((item) => (
                    <article key={item.id} className="news-card glass-panel amposta-card">
                        <div className="card-image-wrapper">
                            <img src={item.image} alt={item.title} />
                            <span className="card-category">Local</span>
                        </div>
                        <div className="card-content">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="card-link">
                                {t.hero.readMore} <ExternalLink size={14} />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default AmpostaSection;
