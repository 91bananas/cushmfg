// Resolve a path inside `public/` against the app's base URL.
//
// Vite rewrites asset imports it can see statically, but plain strings in our
// data files are shipped to the browser verbatim. Those strings must therefore
// be prefixed with `import.meta.env.BASE_URL` or they 404 once the app is
// served from a sub-path.
//
// BASE_URL is NOT consistent about its trailing slash: it is `/cushmfg/` in the
// production build but `/cushmfg` in the dev server. So normalise it here rather
// than assuming, otherwise dev yields `/cushmfgimages/...`.
//
// Pass paths WITHOUT a leading slash, e.g. asset('images/logo.png').
export function asset(path) {
  if (!path) return path
  // Fully qualified or data URLs are already absolute; leave them alone.
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(path)) return path
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '')
  return `${base}/${path.replace(/^\/+/, '')}`
}
