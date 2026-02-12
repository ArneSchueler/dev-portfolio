import { useState } from "react";

const CONTACT_CONTENT = [
  {
    id: "email",
    title: "E-Mail",
    link: "arne@schueler.dev",
  },
  {
    id: "github",
    title: "Github",
    link: "github.com/ArneSchueler",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    link: "linkedin.com/in/arneschueler",
  },
];

export function ContactSection() {
  return (
    <div className="grid lg:grid-cols-3 gap-x-20 gap-y-8 items-start justify-center max-w-400">
      <h1 className="text-display font-semibold">Contact</h1>

      <div className="flex flex-col col-1 gap-4">
        <h2>Let’s work together</h2>
        <p>
          Frontend Developer with a strong UX focus, building clear and
          accessible interfaces where design translates directly into code. Open
          to frontend opportunities and digital products.
        </p>
      </div>
      <div className="col-1 lg:col-span-2 items-start ">
        {renderContactInfo(CONTACT_CONTENT)}
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
            href={id === "email" ? `mailto:${link}` : `https://www.${link}`}
            target="_blank"
          >
            <li key={id} className="ps-2 border-s-2  border-cyan-500">
              <h3>{title}</h3>
              <p>{link}</p>
            </li>
          </a>
        );
      })}
    </ul>
  );
}
