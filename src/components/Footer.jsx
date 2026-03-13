import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-muted fixed right-0 bottom-0 z-0 flex w-full items-center justify-end gap-150 p-6 text-xs sm:ms-40 sm:w-[calc(100%-10rem)] sm:px-40 md:ms-3 md:w-[calc(100%-7.5rem)]">
      <div className="flex gap-24">
        <Link to="/legal-notice" className="hover:text-cyan-500">
          Legal Notice
        </Link>
        <Link to="/privacy" className="hover:text-cyan-500">
          Privacy Policy
        </Link>
        <p>© 2026 Arne Schüler</p>
      </div>
    </footer>
  );
}
