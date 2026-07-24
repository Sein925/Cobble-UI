import { ref, computed, watch } from 'vue'
import type { ThemeMode, MinecraftTheme } from '@/types/theme'

const currentTheme = ref<MinecraftTheme | null>(null)
const themeMode = ref<ThemeMode>('system')

export function useTheme() {
  const isDark = computed(() => {
    if (themeMode.value === 'dark') return true
    if (themeMode.value === 'light') return false
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const effectiveTheme = computed(() => {
    if (!currentTheme.value) return null
    return {
      ...currentTheme.value,
      mode: isDark.value ? 'dark' : 'light'
    }
  })

  const setTheme = (theme: MinecraftTheme) => {
    currentTheme.value = theme
  }

  const setMode = (mode: ThemeMode) => {
    themeMode.value = mode
  }

  const toggleMode = () => {
    if (themeMode.value === 'light') {
      themeMode.value = 'dark'
    } else if (themeMode.value === 'dark') {
      themeMode.value = 'light'
    } else {
      themeMode.value = 'light'
    }
  }

  watch(isDark, (newVal) => {
    document.documentElement.classList.toggle('dark', newVal)
  })

  return {
    theme: effectiveTheme,
    themeMode,
    isDark,
    setTheme,
    setMode,
    toggleMode
  }
}
