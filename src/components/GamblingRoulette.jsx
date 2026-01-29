import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Dices } from 'lucide-react';
import './GamblingRoulette.css';

const GamblingRoulette = () => {
    const { t } = useLanguage();
    const [isSpinning, setIsSpinning] = useState(false);
    const [result, setResult] = useState(null);

    const spinWheel = () => {
        if (isSpinning) return;

        setIsSpinning(true);
        setResult(null);

        // Simulate spin time
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 36) + 1;
            setResult(randomNum);
            setIsSpinning(false);

            // Redirect after showing result briefly
            setTimeout(() => {
                window.open('https://www.ludopatia.org/ca/', '_blank');
            }, 1500);
        }, 3000);
    };

    return (
        <section className="roulette-section container">
            <div className="roulette-container glass-panel">
                <div className="roulette-header">
                    <h2>{t.roulette.title} <Dices className="dice-icon" /></h2>
                    <p>{t.roulette.desc}</p>
                </div>

                <div className={`roulette-wheel ${isSpinning ? 'spinning' : ''}`}>
                    <div className="wheel-inner">
                        {result !== null ? (
                            <span className="result-number">{result}</span>
                        ) : (
                            <span className="wheel-center">?</span>
                        )}
                    </div>
                </div>

                <button
                    className="btn btn-primary spin-btn"
                    onClick={spinWheel}
                    disabled={isSpinning}
                >
                    {isSpinning ? '...' : t.roulette.spin}
                </button>

                {result !== null && (
                    <div className="win-message">
                        {t.roulette.win}
                    </div>
                )}
            </div>
        </section>
    );
};

export default GamblingRoulette;
