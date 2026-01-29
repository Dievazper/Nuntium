
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import NewsGrid from '../components/NewsGrid';
import AmpostaSection from '../components/AmpostaSection';
import SubscriptionPlans from '../components/SubscriptionPlans';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <div className="app-wrapper">
            <Header />
            <main>
                <HeroSection />
                <NewsGrid />
                <AmpostaSection />
                <SubscriptionPlans />
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;
