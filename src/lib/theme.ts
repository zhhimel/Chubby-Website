// Theme utility functions for managing CSS variables and color conversions

/**
 * Convert hex color to HSL values
 */
export function hexToHsl(hex: string): string {
  // Remove the hash if present
  hex = hex.replace('#', '');
  
  // Parse the hex values
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  // Convert to degrees and percentages
  const hue = Math.round(h * 360);
  const saturation = Math.round(s * 100);
  const lightness = Math.round(l * 100);

  return `${hue} ${saturation}% ${lightness}%`;
}

/**
 * Apply theme colors to CSS variables
 */
export function applyThemeColors(colors: ThemeColors | Record<string, string>): void {
  const root = document.documentElement;
  
  // Map color keys to CSS variable names
  const colorMappings: Record<string, string> = {
    primary: '--primary',
    secondary: '--secondary', 
    accent: '--peach',
    background: '--background'
  };

  // Apply each color as an HSL CSS variable
  Object.entries(colors).forEach(([key, hexColor]) => {
    const cssVar = colorMappings[key];
    if (cssVar && hexColor) {
      const hslValue = hexToHsl(hexColor);
      root.style.setProperty(cssVar, hslValue);
    }
  });
}

// Define the color scheme type
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

/**
 * Load and apply saved theme colors from localStorage or defaults
 */
export function loadSavedTheme(): ThemeColors {
  const defaultColors: ThemeColors = {
    primary: '#2C3E50',
    secondary: '#5D9CEC', 
    accent: '#F39C7A',
    background: '#FFFEF7'
  };

  try {
    const saved = localStorage.getItem('theme_colors');
    if (saved) {
      const colors = JSON.parse(saved);
      // Ensure we have all required properties
      const validColors: ThemeColors = {
        primary: colors.primary || defaultColors.primary,
        secondary: colors.secondary || defaultColors.secondary,
        accent: colors.accent || defaultColors.accent,
        background: colors.background || defaultColors.background
      };
      applyThemeColors(validColors);
      return validColors;
    }
  } catch (error) {
    console.error('Error loading saved theme:', error);
  }
  
  // Return default colors if nothing saved
  return defaultColors;
}

/**
 * Save theme colors to localStorage and apply them
 */
export function saveAndApplyTheme(colors: ThemeColors): void {
  try {
    localStorage.setItem('theme_colors', JSON.stringify(colors));
    applyThemeColors(colors);
  } catch (error) {
    console.error('Error saving theme:', error);
    throw error;
  }
}