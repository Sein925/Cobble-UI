import type { App } from 'vue'

import McButton from './components/Button/McButton.vue'
import McInput from './components/Input/McInput.vue'
import McContainer from './components/Container/McContainer.vue'
import McSwitch from './components/Switch/McSwitch.vue'
import McSlider from './components/Slider/McSlider.vue'
import McCheckbox from './components/Checkbox/McCheckbox.vue'
import McRadio from './components/Radio/McRadio.vue'
import McSelect from './components/Select/McSelect.vue'
import McBadge from './components/Badge/McBadge.vue'
import McAlert from './components/Alert/McAlert.vue'
import McDialog from './components/Dialog/McDialog.vue'
import McProgress from './components/Progress/McProgress.vue'
import McSpinner from './components/Spinner/McSpinner.vue'
import McTabs from './components/Tabs/McTabs.vue'
import McPagination from './components/Pagination/McPagination.vue'
import McBreadcrumb from './components/Breadcrumb/McBreadcrumb.vue'
import McDropdown from './components/Dropdown/McDropdown.vue'
import McCard from './components/Card/McCard.vue'
import McGrid from './components/Grid/McGrid.vue'
import McFlex from './components/Flex/McFlex.vue'
import McTable from './components/Table/McTable.vue'

import { useTheme } from './composables/useTheme'

import type { MinecraftTheme, ThemeMode } from './types/theme'

import { createMinecraftTheme } from './theme/themeFactory'

const components = [
  McButton,
  McInput,
  McContainer,
  McSwitch,
  McSlider,
  McCheckbox,
  McRadio,
  McSelect,
  McBadge,
  McAlert,
  McDialog,
  McProgress,
  McSpinner,
  McTabs,
  McPagination,
  McBreadcrumb,
  McDropdown,
  McCard,
  McGrid,
  McFlex,
  McTable
]

export function install(app: App): void {
  components.forEach(component => {
    app.component(component.name || component.__name || '', component)
  })
}

export {
  McButton,
  McInput,
  McContainer,
  McSwitch,
  McSlider,
  McCheckbox,
  McRadio,
  McSelect,
  McBadge,
  McAlert,
  McDialog,
  McProgress,
  McSpinner,
  McTabs,
  McPagination,
  McBreadcrumb,
  McDropdown,
  McCard,
  McGrid,
  McFlex,
  McTable,
  useTheme,
  createMinecraftTheme,
  install
}

export type { MinecraftTheme, ThemeMode }

export default { install }
