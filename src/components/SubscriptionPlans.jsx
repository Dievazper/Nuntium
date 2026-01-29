import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check } from 'lucide-react';
import './SubscriptionPlans.css';

const SubscriptionPlans = () => {
    const { t } = useLanguage();

    return (
        <section className="subs-section" id="subscribe">
            <div className="container">
                <div className="subs-header text-center">
                    <h2>{t.subs.title}</h2>
                    <p>{t.subs.subtitle}</p>
                </div>

                <div className="plans-grid">
                    {t.subs.plans.map((plan, index) => (
                        <div key={index} className={`plan-card glass-panel ${index === 1 ? 'featured' : ''}`}>
                            {index === 1 && <div className="popular-badge">{t.subs.popular}</div>}

                            <div className="plan-header">
                                <h3>{plan.name}</h3>
                                <div className="price">{plan.price}<span>/mo</span></div>
                            </div>

                            <ul className="plan-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>
                                        <Check size={16} className="feature-icon" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`btn ${index === 1 ? 'btn-primary' : 'btn-outline'} plan-btn`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SubscriptionPlans;
