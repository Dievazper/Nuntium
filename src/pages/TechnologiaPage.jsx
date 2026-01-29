
import React from 'react';

const TechnologiaPage = () => {
    const styles = {
        container: {
            backgroundColor: '#0a0a12', // Very dark blue/black
            color: '#00ff9d', // Neon green/cyan
            minHeight: '100vh',
            fontFamily: '"Courier New", monospace',
            padding: '3rem',
            backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #000000 100%)',
        },
        header: {
            textAlign: 'center',
            marginBottom: '4rem',
        },
        title: {
            fontSize: '4rem',
            margin: '0',
            textShadow: '0 0 10px #00ff9d',
            letterSpacing: '5px',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        card: {
            border: '1px solid #00ff9d',
            padding: '2rem',
            backgroundColor: 'rgba(0, 255, 157, 0.05)',
            boxShadow: '0 0 15px rgba(0, 255, 157, 0.1)',
        }
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>TECHNOLOGIA</h1>
                <p style={{ color: '#fff', marginTop: '1rem' }}>// INNOVATION_HUB_LOADED</p>
            </header>
            <div style={styles.grid}>
                <div style={styles.card}>
                    <h3>AI Revolution</h3>
                    <p>Neural networks reshaping the digital landscape.</p>
                </div>
                <div style={styles.card}>
                    <h3>Quantum Computing</h3>
                    <p>Breaking the barriers of binary processing.</p>
                </div>
                <div style={styles.card}>
                    <h3>Cyber Security</h3>
                    <p>Protecting data in an interconnected world.</p>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <a href="/Nuntium/" style={{ color: '#00ff9d', textDecoration: 'none' }}>[ RETURN_MAIN ]</a>
            </div>
        </div>
    );
};

export default TechnologiaPage;
