import type { MinecraftTheme, ThemeMode } from '@/types/theme'

export function createMinecraftTheme(
  options: Partial<MinecraftTheme> = {}
): MinecraftTheme {
  return {
    mode: options.mode ?? 'system',
    pixelSize: options.pixelSize ?? 4,
    colors: {
      primary: options.colors?.primary ?? '#4CAF50',
      primaryDark: options.colors?.primaryDark ?? '#2E7D32',
      secondary: options.colors?.secondary ?? '#FF9800',
      secondaryDark: options.colors?.secondaryDark ?? '#EF6C00',
      accent: options.colors?.accent ?? '#E91E63',
      accentDark: options.colors?.accentDark ?? '#C2185B',
      background: options.colors?.background ?? '#F5F5F5',
      backgroundDark: options.colors?.backgroundDark ?? '#1A1A1A',
      surface: options.colors?.surface ?? '#FFFFFF',
      surfaceDark: options.colors?.surfaceDark ?? '#2D2D2D',
      border: options.colors?.border ?? '#BDBDBD',
      borderDark: options.colors?.borderDark ?? '#424242',
      text: options.colors?.text ?? '#212121',
      textDark: options.colors?.textDark ?? '#FFFFFF',
      textSecondary: options.colors?.textSecondary ?? '#757575',
      textSecondaryDark: options.colors?.textSecondaryDark ?? '#BDBDBD',
      success: options.colors?.success ?? '#4CAF50',
      warning: options.colors?.warning ?? '#FF9800',
      error: options.colors?.error ?? '#F44336',
      info: options.colors?.info ?? '#2196F3'
    }
  }
}

export const defaultTheme: MinecraftTheme = createMinecraftTheme()

export function applyThemeToDocument(theme: MinecraftTheme, mode: ThemeMode) {
  const isDark = mode === 'dark' || (mode === 'system' && 
    window.matchMedia('(prefers-color-scheme: dark)').matches)
  
  const colors = isDark ? {
    '--mc-primary': theme.colors.primaryDark,
    '--mc-secondary': theme.colors.secondaryDark,
    '--mc-accent': theme.colors.accentDark,
    '--mc-background': theme.colors.backgroundDark,
    '--mc-surface': theme.colors.surfaceDark,
    '--mc-border': theme.colors.borderDark,
    '--mc-text': theme.colors.textDark,
    '--mc-text-secondary': theme.colors.textSecondaryDark
  } : {
    '--mc-primary': theme.colors.primary,
    '--mc-secondary': theme.colors.secondary,
    '--mc-accent': theme.colors.accent,
    '--mc-background': theme.colors.background,
    '--mc-surface': theme.colors.surface,
    '--mc-border': theme.colors.border,
    '--mc-text': theme.colors.text,
    '--mc-text-secondary': theme.colors.textSecondary
  }

  Object.entries(colors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value)
  })
}
