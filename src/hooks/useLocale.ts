import { useEffect } from 'react'
import i18n from '@/lang/locales'
import { useAppSelector } from '@/store'

function useLocale() {
    const locale = useAppSelector((state) => state.locale.currentLang)

    useEffect(() => {
        const formattedLang = locale.replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase()
        })
        if (locale !== i18n.language) {
            i18n.changeLanguage(formattedLang)
        }
    }, [locale])

    return locale
}

export default useLocale
