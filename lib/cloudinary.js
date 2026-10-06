const UPLOAD_MARKER = "/upload/";

/**
 * Inject Cloudinary delivery transforms into a delivery URL.
 * @param {string} src
 * @param {{ width?: number }} [opts]
 */
export function cldUrl(src, { width = 800 } = {}) {
  if (!src || typeof src !== "string") return src;
  const trimmed = src.trim();
  const i = trimmed.indexOf(UPLOAD_MARKER);
  if (i === -1) return trimmed;
  const after = trimmed.slice(i + UPLOAD_MARKER.length);
  if (/^(f_auto|q_auto|w_|c_|fl_)/.test(after)) return trimmed;
  return `${trimmed.slice(0, i + UPLOAD_MARKER.length)}f_auto,q_auto,w_${width}/${after}`;
}

export const HERO_IMAGE =
  "https://res.cloudinary.com/dam7wdzvx/image/upload/v1703670731/pohrebniustavcibulka/hero_ambr9j.webp";
