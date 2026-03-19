import { useLanguage } from "../../../state/language.context";

export function ContactSection() {
  const { data } = useLanguage();
  const { CONTACT } = data.site;
  return (
    <div className="grid max-w-400 items-start justify-center gap-x-20 gap-y-8 lg:grid-cols-3">
      <h1 className="text-display font-semibold">{CONTACT.title}</h1>

      <div className="col-1 flex flex-col gap-4">
        <h2>{CONTACT.header}</h2>
        <p>{CONTACT.description}</p>
      </div>
      <div className="col-1 items-start lg:col-span-2">
        {renderContactInfo(CONTACT.content)}
      </div>
    </div>
  );
}

function renderContactInfo(items) {
  return (
    <ul className="flex flex-col gap-6">
      {items.map(({ id, title, link }) => {
        return (
          <a
            key={id}
            href={id === "email" ? `mailto:${link}` : `https://www.${link}`}
            target="_blank"
          >
            <li key={id} className="border-s-2 border-cyan-500 ps-2">
              <h3>{title}</h3>

              <p>{link}</p>
            </li>
          </a>
        );
      })}
    </ul>
  );
}
