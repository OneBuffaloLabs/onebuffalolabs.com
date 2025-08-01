import type { Viewport } from 'next';

// Define the theme color constant
const THEME_COLOR = '#010123';

/**
 * Generates the viewport configuration for the site.
 * @returns A Next.js Viewport object.
 */
export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    userScalable: true,
    themeColor: THEME_COLOR,
  };
}
