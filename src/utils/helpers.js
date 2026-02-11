// function to scroll to section
export function scrollToSection(id) {
  // optional chaining to evade null response
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
  // renders section name to url
  window.history.pushState(null, "", id === "hero" ? "/" : `/${id}`);
}
