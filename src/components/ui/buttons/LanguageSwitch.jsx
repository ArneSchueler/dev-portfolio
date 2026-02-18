import { useLanguage } from "../../../state/language.context.jsx";

export default function LanguageSwitch() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLang("en")}
        className={lang === "en" ? "text-cyan-500" : ""}
      >
        EN
      </button>
      <span>|</span>
      <button
        onClick={() => setLang("de")}
        className={lang === "de" ? "text-cyan-500" : ""}
      >
        DE
      </button>
    </div>
  );
}
