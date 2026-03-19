// function to scroll to section
export function scrollToSection(id) {
  // optional chaining to evade null response
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
}

// export function handleSectionNavigation({ id, location, navigate }) {
//   const targetUrl = id === "hero" ? "/" : `/${id}`;

//   // checks if page is detail or legal
//   const isDetailOrLegal =
//     location.pathname.startsWith("/project/") ||
//     location.pathname === "/imprint" ||
//     location.pathname === "/privacy";

//   if (isDetailOrLegal) {
//     navigate(targetUrl);
//     return;
//   }

//   scrollToSection(id);
// }

export function handleSectionNavigation({ id, location, navigate }) {
  // Wenn wir schon auf der Home-Seite sind (nicht im Detail/Legal)
  const isHome =
    !location.pathname.startsWith("/project/") &&
    location.pathname !== "/imprint" &&
    location.pathname !== "/privacy";

  if (isHome) {
    // WICHTIG: Direkt scrollen, da navigate('/') bei bereits aktiver Home-URL nichts tut
    scrollToSection(id);
    // URL trotzdem aktualisieren für die Optik
    const nextUrl = id === "hero" ? "/" : `/${id}`;
    window.history.pushState(null, "", nextUrl);
  } else {
    // Von Unterseiten zurück zur Home navigieren
    const targetUrl = id === "hero" ? "/" : `/${id}`;
    navigate(targetUrl);
  }
}
