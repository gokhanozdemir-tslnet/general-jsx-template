import './i18n/i18n'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const LanguageHelper = (stringContent) => {

  const { t } = useTranslation()
  const trnlan = t(stringContent)

  return trnlan
}

export const LangSelector = (lang) => {
  const { i18n } = useTranslation()
  i18n.changeLanguage(lang)
}

export default LanguageHelper
