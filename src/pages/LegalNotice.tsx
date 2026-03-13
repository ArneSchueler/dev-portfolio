import Footer from "../components/Footer.jsx";

export default function LegalNotice() {
  return (
    <main className="flex h-screen flex-col overflow-y-scroll p-6 sm:ms-40 sm:p-40 md:ms-30 md:snap-y md:snap-mandatory">
      <section className="flex flex-col gap-12">
        <h1>Impressum</h1>
        <div>
          <p>
            <strong>Angaben gemäß § 5 TMG:</strong>
          </p>
          <p>
            Arne Schüler
            <br />
            31303 Burgdorf (Vollständige Anschrift auf Anfrage)
          </p>
        </div>

        <div>
          <p>
            <strong>Kontakt:</strong>
          </p>
          <p>
            E-Mail:
            <a href="mailto:deine-email@beispiel.de">arne@schueler.dev</a>
          </p>
        </div>
        <div>
          <p>
            <strong>
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
            </strong>
          </p>
          <p>
            Arne Schüler
            <br />
            31303 Burgdorf
          </p>
        </div>
        <div>
          <hr />
          <p>
            <em>
              Hinweis: Diese Website dient rein der persönlichen Vorstellung und
              Bewerbung (Portfolio).
            </em>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
