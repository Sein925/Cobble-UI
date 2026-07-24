export type ThemeMode = 'light' | 'dark' | 'system'

export interface MinecraftTheme {
  mode: ThemeMode
  pixelSize: number
  colors: {
    primary: string
    primaryDark: string
    secondary: string
    secondaryDark: string
    accent: string
    accentDark: string
    background: string
    backgroundDark: string
    surface: string
    surfaceDark: string
    border: string
    borderDark: string
    text: string
    textDark: string
    textSecondary: string
    textSecondaryDark: string
    success: string
    warning: string
    error: string
    info: string
  }
}
