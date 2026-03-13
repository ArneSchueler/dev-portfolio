import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import {
  HeroSection,
  ProjectsSection,
  AboutSection,
  ContactSection,
} from "./components/index.js";

import { scrollToSection } from "../../utils/helpers.js";
import Footer from "../../components/Footer.jsx";

// points to dom element

const sectionIds = ["hero", "projects", "about", "contact"];

export default function Home({ setActiveSection }) {
  // returns section from url
  const { section } = useParams();
  const containerRef = useRef(null);

  // code that runs after render
  // renders url of section on click
  useEffect(
    () => {
      if (!section) return;
      scrollToSection(section);
    },
    // run useEffect when section changes
    [section]
  );
  // internal Observer
  // renders url and sidebar of section on scroll

  useEffect(
    () => {
      const container = containerRef.current;

      if (!container) return;

      // callback: what happens on change
      // options: how to observe
      const observer = new IntersectionObserver(
        // entries list of visibilty reports
        // entry: single report(which element, % visibility, is it visible)
        // entries are like sensors
        (entries) => {
          // callback
          const visibleSection = entries
            // filter sections which are visible
            .filter((entry) => entry.isIntersecting)
            // which section is more visible (most visible first)
            .sort(
              (sectionA, sectionB) =>
                sectionB.intersectionRatio - sectionA.intersectionRatio
            )[0];

          if (!visibleSection) return;

          // set active section for sidebar
          const activeId = visibleSection.target.id;
          setActiveSection(activeId);

          // get id of visible section
          const sectionId = visibleSection.target.id;
          // define url
          const nextUrl = sectionId === "hero" ? "/" : `/${sectionId}`;

          // change url replaces current entry
          if (window.location.pathname !== nextUrl) {
            window.history.replaceState(null, "", nextUrl);
          }
        },
        // options
        {
          root: container,
          threshold: [0.6],
        }
      );

      sectionIds.forEach((id) => {
        // gets section element
        const element = document.getElementById(id);
        // observer starts observing
        if (element) observer.observe(element);
      });

      // all observation are ended
      return () => observer.disconnect();
    },
    // run useEffect once on render

    []
  );

  return (
    <main
      ref={containerRef}
      className="flex h-screen flex-col overflow-y-scroll p-6 sm:ms-40 sm:p-40 md:ms-30 md:snap-y md:snap-mandatory"
    >
      <section
        id="hero"
        className="box-border flex snap-start flex-col items-center py-40 text-slate-950 sm:min-h-screen"
      >
        <HeroSection />
      </section>

      <section
        id="projects"
        className="box-border flex snap-start flex-col items-center py-40 text-slate-950 sm:min-h-screen"
      >
        <ProjectsSection></ProjectsSection>
      </section>

      <section
        id="about"
        className="box-border flex snap-start flex-col items-center py-40 text-slate-950 sm:min-h-screen"
      >
        <AboutSection></AboutSection>
      </section>

      <section
        id="contact"
        className="box-border flex snap-start flex-col items-center py-40 text-slate-950 sm:min-h-screen"
      >
        <ContactSection></ContactSection>
      </section>
      <Footer />
    </main>
  );
}
