import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import es from './locales/es.json'


const resources = {
    en: {
        translation: en,
    },
    es: {
        translation: es
    }
}

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: true
    }
})

export default i18n;