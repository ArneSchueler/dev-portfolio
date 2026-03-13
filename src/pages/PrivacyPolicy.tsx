import Footer from "../components/Footer.jsx";

export default function PrivacyPolicy() {
  return (
    <main className="flex h-screen flex-col overflow-y-scroll p-6 sm:ms-40 sm:p-40 md:ms-30 md:snap-y md:snap-mandatory">
      <section className="flex flex-col gap-12">
        <h1>Datenschutzerklärung</h1>
        <div>
          <h3>1. Datenschutz auf einen Blick</h3>
          <p>
            Diese Website dient meiner persönlichen Vorstellung als{" "}
            <strong>Frontend Entwickler</strong>. Personenbezogene Daten werden
            nur im technisch notwendigen Umfang erhoben.
          </p>
        </div>
        <div>
          <h3>2. Verantwortlicher</h3>
          <p>
            Arne Schüler
            <br />
            31303 Burgdorf
            <br />
            E-Mail: arne@schueler.dev
          </p>
        </div>
        <div>
          <h3>3. Hosting durch Vercel</h3>
          <p>
            Meine Website wird bei <strong>Vercel Inc.</strong> (340 S Lemon Ave
            #4133, Walnut, CA 91789, USA) gehostet. Beim Aufruf der Seite
            erfasst Vercel automatisch Server-Log-Dateien (u. a. IP-Adresse,
            Browsertyp, Zeitpunkt des Zugriffs). Dies ist für den sicheren
            Betrieb der Website erforderlich. Rechtsgrundlage ist Art. 6 Abs. 1
            lit. f DSGVO.
          </p>
        </div>
        <div>
          <h3>4. Externe Dienste & Verlinkungen</h3>
          <ul>
            <li>
              <strong>Google Fonts & Iconify:</strong> Ich nutze Schriftarten
              von Google und Icons von Iconify (Phosphor Icons). Diese werden
              zur Darstellung der Inhalte von externen Servern geladen. Dabei
              wird Ihre IP-Adresse an den jeweiligen Anbieter übertragen.
            </li>
            <li>
              <strong>Externe Links:</strong> Auf dieser Seite sind Links zu
              LinkedIn, GitHub und Behance enthalten. Wenn Sie diese anklicken,
              verlassen Sie meine Website. Die Datenverarbeitung auf diesen
              Plattformen liegt in der Verantwortung der jeweiligen Betreiber.
            </li>
          </ul>
        </div>
        <div>
          <h3>5. Ihre Rechte</h3>
          <p>
            Sie haben das Recht auf kostenlose Auskunft über Ihre gespeicherten
            Daten sowie ein Recht auf Berichtigung oder Löschung. Bei Fragen
            wenden Sie sich bitte an die oben genannte E-Mail-Adresse.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
