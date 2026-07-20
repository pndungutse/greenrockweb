/** CRA sets this from package.json "homepage" (e.g. "/greenrockweb" on GitHub Pages). */
export const PUBLIC_URL = process.env.PUBLIC_URL || '';

/** Prefix a root-relative asset path for correct GitHub Pages / subdirectory deploys. */
export function asset(path) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${PUBLIC_URL}${normalized}`;
}
