import { useState, useEffect } from "react";
import { codeToHtml } from "shiki";

export function CodeBlock({
  code,
  lang = "javascript",
  theme = "github-light",
}) {
  const [html, setHtml] = useState("<pre>Loading...</pre>");

  useEffect(() => {
    async function highlight() {
      const out = await codeToHtml(code, {
        lang,
        theme,
      });
      setHtml(out);
    }
    highlight();
  }, [code, lang, theme]);

  return (
    <div
      className="shiki-container overflow-hidden bg-transparent text-xs"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
