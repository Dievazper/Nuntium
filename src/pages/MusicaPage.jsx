
import React from 'react';

const MusicaPage = () => {
    const styles = {
        container: {
            backgroundColor: '#1a120b', // Deep dark brown
            color: '#d4af37', // Gold
            minHeight: '100vh',
            fontFamily: '"Cinzel", "Times New Roman", serif',
            padding: '3rem',
            backgroundImage: 'radial-gradient(circle at center, #2c1e12 0%, #000000 100%)',
        },
        frame: {
            border: '4px double #d4af37',
            padding: '2rem',
            maxWidth: '800px',
            margin: '0 auto',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            boxShadow: '0 0 50px rgba(0, 0, 0, 0.8)',
        },
        header: {
            textAlign: 'center',
            marginBottom: '3rem',
            borderBottom: '1px solid #d4af37',
            paddingBottom: '1rem',
        },
        title: {
            fontSize: '4rem',
            margin: '0',
            textTransform: 'uppercase',
            letterSpacing: '5px',
            fontWeight: '400',
        },
        latin: {
            fontStyle: 'italic',
            fontSize: '1.2rem',
            marginTop: '1rem',
            color: '#aa8844',
        },
        spotifyContainer: {
            margin: '2rem 0',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)',
        },
        homeLink: {
            display: 'block',
            textAlign: 'center',
            marginTop: '3rem',
            color: '#8b4513',
            textDecoration: 'none',
            fontSize: '1rem',
            fontFamily: 'sans-serif',
            opacity: 0.6,
            transition: 'opacity 0.3s',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.frame}>
                <header style={styles.header}>
                    <h1 style={styles.title}>Nuntium Sacra</h1>
                    <p style={styles.latin}>"Cantus Gregorianus - Vox Fidelium"</p>
                </header>

                <div style={styles.spotifyContainer}>
                    <iframe
                        style={{ borderRadius: '12px' }}
                        src="https://open.spotify.com/embed/playlist/6W6uYmz7WoM8TLccEWk1Ye?utm_source=generator&theme=0"
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title="Gregorian Chant Playlist"
                    ></iframe>
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem', color: '#d4af37' }}>
                    <p>Experiri pacem silentii et cantus.</p>
                </div>
            </div>
            <a href="/" style={styles.homeLink}>Return to Nuntium</a>
        </div>
    );
};

export default MusicaPage;
