import React, { createContext, useContext, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('la'); // Default Latin

    const value = {
        language,
        setLanguage,
        t: translations[language], // Current language translations
        availableLanguages: [
            { code: 'la', name: 'Latina' },
            { code: 'ca', name: 'Català' },
            { code: 'es', name: 'Español' },
            { code: 'en', name: 'English' },
        ],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
