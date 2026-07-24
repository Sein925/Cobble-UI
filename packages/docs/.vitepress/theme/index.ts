import DefaultTheme from 'vitepress/theme'
import { reactive } from 'vue'
import McButton from '../../../cobble-ui/src/components/Button/McButton.vue'
import McInput from '../../../cobble-ui/src/components/Input/McInput.vue'
import McSwitch from '../../../cobble-ui/src/components/Switch/McSwitch.vue'
import McSlider from '../../../cobble-ui/src/components/Slider/McSlider.vue'
import McCheckbox from '../../../cobble-ui/src/components/Checkbox/McCheckbox.vue'
import McRadio from '../../../cobble-ui/src/components/Radio/McRadio.vue'
import McSelect from '../../../cobble-ui/src/components/Select/McSelect.vue'
import McBadge from '../../../cobble-ui/src/components/Badge/McBadge.vue'
import McAlert from '../../../cobble-ui/src/components/Alert/McAlert.vue'
import McDialog from '../../../cobble-ui/src/components/Dialog/McDialog.vue'
import McProgress from '../../../cobble-ui/src/components/Progress/McProgress.vue'
import McSpinner from '../../../cobble-ui/src/components/Spinner/McSpinner.vue'
import McTabs from '../../../cobble-ui/src/components/Tabs/McTabs.vue'
import McPagination from '../../../cobble-ui/src/components/Pagination/McPagination.vue'
import McBreadcrumb from '../../../cobble-ui/src/components/Breadcrumb/McBreadcrumb.vue'
import McDropdown from '../../../cobble-ui/src/components/Dropdown/McDropdown.vue'
import McCard from '../../../cobble-ui/src/components/Card/McCard.vue'
import McGrid from '../../../cobble-ui/src/components/Grid/McGrid.vue'
import McFlex from '../../../cobble-ui/src/components/Flex/McFlex.vue'
import McTable from '../../../cobble-ui/src/components/Table/McTable.vue'
import McContainer from '../../../cobble-ui/src/components/Container/McContainer.vue'
import ComponentDemo from './ComponentDemo.vue'
import '../../../cobble-ui/src/styles/index.scss'
import './style.scss'

const demoState = reactive({
  switchValue: false,
  switchValue2: true,
  checkboxValue: false,
  checkboxValue2: true,
  radioValue: '',
  inputValue: '',
  selectValue: '',
  dialogVisible: false,
  dropdownValue: '',
  tabsValue: 'tab1',
  sliderValue: 50,
  progressValue: 50,
})

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.config.globalProperties.$demoState = demoState
    app.component('McButton', McButton)
    app.component('McInput', McInput)
    app.component('McSwitch', McSwitch)
    app.component('McSlider', McSlider)
    app.component('McCheckbox', McCheckbox)
    app.component('McRadio', McRadio)
    app.component('McSelect', McSelect)
    app.component('McBadge', McBadge)
    app.component('McAlert', McAlert)
    app.component('McDialog', McDialog)
    app.component('McProgress', McProgress)
    app.component('McSpinner', McSpinner)
    app.component('McTabs', McTabs)
    app.component('McPagination', McPagination)
    app.component('McBreadcrumb', McBreadcrumb)
    app.component('McDropdown', McDropdown)
    app.component('McCard', McCard)
    app.component('McGrid', McGrid)
    app.component('McFlex', McFlex)
    app.component('McTable', McTable)
    app.component('McContainer', McContainer)
    app.component('ComponentDemo', ComponentDemo)
  }
}
