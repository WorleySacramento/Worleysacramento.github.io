export const SITE_URL = "https://worleysacramento.github.io";
export const SITE_NAME = "Worley Sacramento";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/worfoto.jpg`;

export const buildCanonicalUrl = (path = "/") => {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
};
