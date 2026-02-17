import { GYMNIO_DETAIL } from "./gymnio";
import { HATTENDORF_DETAIL } from "./hattendorf-kosmetik";
import { FRONTEND_SHOWCASE_DETAIL } from "./frontend-showcase-masterarbeit";
import { TAMI_KITA_APP_DETAIL } from "./tami-kita-app";
import { SCHUELER_DEV_PORTFOLIO_DETAIL } from "./schueler-dev-portfolio";

const DETAILS = [
  GYMNIO_DETAIL,
  HATTENDORF_DETAIL,
  FRONTEND_SHOWCASE_DETAIL,
  TAMI_KITA_APP_DETAIL,
  SCHUELER_DEV_PORTFOLIO_DETAIL,
];

export const PROJECT_DETAILS_BY_SLUG = Object.fromEntries(
  DETAILS.map((project) => [project.slug, project])
);
