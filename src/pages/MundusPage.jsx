
import React from 'react';

const MundusPage = () => {
    const styles = {
        container: {
            backgroundColor: '#2e3b28', // Earthy green/dark
            color: '#e8f5e9',
            minHeight: '100vh',
            fontFamily: '"Georgia", serif',
            padding: '3rem',
            backgroundImage: 'linear-gradient(to bottom right, #2e3b28, #1b2618)',
        },
        header: {
            textAlign: 'center',
            marginBottom: '4rem',
            borderBottom: '2px solid #81c784',
            paddingBottom: '2rem',
        },
        title: {
            fontSize: '4rem',
            margin: '0',
            textTransform: 'uppercase',
            letterSpacing: '0.2rem',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        card: {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '2rem',
            borderRadius: '8px',
            borderLeft: '4px solid #81c784',
        }
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Mundus</h1>
                <p>Global Perspectives & Earthly Matters</p>
            </header>
            <div style={styles.grid}>
                <div style={styles.card}>
                    <h3>Global Climate Summit</h3>
                    <p>Leaders gather to discuss the future of our planet.</p>
                </div>
                <div style={styles.card}>
                    <h3>Cultural Festivals</h3>
                    <p>Celebrating diversity across the seven continents.</p>
                </div>
                <div style={styles.card}>
                    <h3>Wildlife Conservation</h3>
                    <p>New initiatives to protect endangered species in the Amazon.</p>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <a href="/Nuntium/" style={{ color: '#81c784' }}>Return Home</a>
            </div>
        </div>
    );
};

export default MundusPage;
