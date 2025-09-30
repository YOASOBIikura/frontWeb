import about from "@/locales/aboutPage/index.js"
import {createI18n} from "vue-i18n";

const message = {
    en: {
        about: about.En
    },
    jp: {
        about: about.Jp
    }
}

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'jp',
    globalInjection: true,
    messages: message,
    interpolation: {
        escapeValue: false
    }
})

export default i18n

