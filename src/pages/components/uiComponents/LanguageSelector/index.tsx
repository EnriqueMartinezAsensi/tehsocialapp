import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyledLangSelect } from "./LanguageSelector.styled";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [lang, setLang] = useState(currentLanguage);

  useEffect(() => {
    i18n.changeLanguage(lang);
    window.localStorage.setItem("language", lang);
  }, [lang, i18n]);

  return (
    <StyledLangSelect value={lang} onChange={(e) => setLang(e.target.value)}>
      <option value="es_ES">🇪🇸</option>
      <option value="en_GB">🇬🇧</option>
      <option value="jp_JP">🇯🇵</option>
    </StyledLangSelect>
  );
};

export default LanguageSelector;
