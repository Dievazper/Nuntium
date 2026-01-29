
import React from 'react';

const NegotiumPage = () => {
    const styles = {
        container: {
            backgroundColor: '#f5f5f5', // Light grey
            color: '#333333',
            minHeight: '100vh',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            padding: '3rem',
        },
        header: {
            textAlign: 'center',
            marginBottom: '4rem',
        },
        title: {
            fontSize: '3.5rem',
            margin: '0',
            color: '#2c3e50', // Dark blue
            fontWeight: '700',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        card: {
            backgroundColor: '#ffffff',
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            borderTop: '5px solid #2c3e50',
        }
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>NEGOTIUM</h1>
                <p style={{ color: '#7f8c8d' }}>Markets, Finance & Corporate Strategies</p>
            </header>
            <div style={styles.grid}>
                <div style={styles.card}>
                    <h3>Market Watch</h3>
                    <p>Global stocks reach new highs amidst recovery hopes.</p>
                </div>
                <div style={styles.card}>
                    <h3>Crypto Analysis</h3>
                    <p>The latest trends in decentralized finance.</p>
                </div>
                <div style={styles.card}>
                    <h3>Startup Ecosystem</h3>
                    <p>Emerging unicorns disrupting traditional industries.</p>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <a href="/Nuntium/" style={{ color: '#2c3e50', fontWeight: 'bold' }}>Return to Home</a>
            </div>
        </div>
    );
};

export default NegotiumPage;
