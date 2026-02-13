import { hero } from "../data/hero/hero-en";

// function to scroll to section
export function scrollToSection(id) {
  // optional chaining to evade null response
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
}

export function handleSectionNavigation({ id, location, navigate }) {
  const targetUrl = id === "hero" ? "/" : `/${id}`;

  // checks if page is detail or legal
  const isDetailOrLegal =
    location.pathname.startsWith("/project/") ||
    location.pathname === "/imprint" ||
    location.pathname === "/privacy";

  if (isDetailOrLegal) {
    navigate(targetUrl);
    return;
  }

  scrollToSection(id);
}
