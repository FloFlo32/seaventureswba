/**
 * SeaVentures ships light-only by design (brand.config.ts theme.defaultScheme).
 * No toggle, no localStorage, no dark class ever applied. This component only
 * exists so app/layout.tsx has a single, stable place to note that decision.
 */
export function ThemeScript() {
  return null;
}
