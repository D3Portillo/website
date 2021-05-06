import { screens } from "tailwindcss/defaultTheme"

/**
 * Tailwind min-width sizes in format:
 * @media (min-width: { screens[wantedSize] })
 */
const onMedia = {
  /** media min-width for tailwind screens.lg */
  lg: `@media (min-width: ${screens.lg})`,
  /** media min-width for tailwind screens.xl */
  xl: `@media (min-width: ${screens.xl})`,
}

export default onMedia
