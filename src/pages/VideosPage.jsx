
import React from 'react';

const VideosPage = () => {
    const styles = {
        container: {
            backgroundColor: '#006994', // Ocean blue
            color: '#ffffff',
            minHeight: '100vh',
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            padding: '2rem',
            backgroundImage: 'linear-gradient(to bottom, #006994, #003366)',
        },
        header: {
            textAlign: 'center',
            marginBottom: '3rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        },
        title: {
            fontSize: '3.5rem',
            margin: '0',
            fontWeight: '300',
            letterSpacing: '2px',
        },
        subtitle: {
            fontSize: '1.2rem',
            opacity: '0.9',
            marginTop: '1rem',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        card: {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            transition: 'transform 0.3s ease',
        },
        videoWrapper: {
            position: 'relative',
            paddingBottom: '56.25%', /* 16:9 */
            height: '0',
        },
        iframe: {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            border: 'none',
        },
        cardContent: {
            padding: '1.5rem',
        },
        cardTitle: {
            fontSize: '1.25rem',
            marginBottom: '0.5rem',
            color: '#e0f7fa',
        },
        cardText: {
            fontSize: '0.9rem',
            color: '#b2ebf2',
        },
        homeLink: {
            display: 'inline-block',
            marginTop: '3rem',
            color: 'white',
            textDecoration: 'underline',
            cursor: 'pointer',
        }
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Nuntium Oceanus</h1>
                <p style={styles.subtitle}>Immerse yourself in the serene world of dolphins</p>
            </header>

            <div style={styles.grid}>
                {/* Video 1 */}
                <div style={styles.card}>
                    <div style={styles.videoWrapper}>
                        <iframe
                            style={styles.iframe}
                            src="https://www.youtube.com/embed/CjG20ZtXz28"
                            title="Dolphin Relaxation"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div style={styles.cardContent}>
                        <h3 style={styles.cardTitle}>Coral Reef Dance</h3>
                        <p style={styles.cardText}>Witness the grace of dolphins in their natural coral habitat.</p>
                    </div>
                </div>

                {/* Video 2 */}
                <div style={styles.card}>
                    <div style={styles.videoWrapper}>
                        <iframe
                            style={styles.iframe}
                            src="https://www.youtube.com/embed/8V9a9qTjqBw"
                            title="Dolphins 4K"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div style={styles.cardContent}>
                        <h3 style={styles.cardTitle}>Deep Blue Serenity</h3>
                        <p style={styles.cardText}>relaxing 4K footage of the ocean's most intelligent mammals.</p>
                    </div>
                </div>

                {/* Video 3 */}
                <div style={styles.card}>
                    <div style={styles.videoWrapper}>
                        <iframe
                            style={styles.iframe}
                            src="https://www.youtube.com/embed/p9tTFaT2tYs"
                            title="Ocean Sounds"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div style={styles.cardContent}>
                        <h3 style={styles.cardTitle}>Sounds of the Sea</h3>
                        <p style={styles.cardText}>Complete immersion with underwater sounds and visuals.</p>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center' }}>
                <a href="/" style={styles.homeLink}>&larr; Return to Nuntium Main</a>
            </div>
        </div>
    );
};

export default VideosPage;
