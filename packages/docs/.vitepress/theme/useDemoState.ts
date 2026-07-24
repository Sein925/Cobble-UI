import { reactive } from 'vue'

interface DemoState {
  switchValue: boolean
  switchValue2: boolean
  checkboxValue: boolean
  checkboxValue2: boolean
  radioValue: string
  inputValue: string
  selectValue: string
  dialogVisible: boolean
  dropdownValue: string
  tabsValue: string
  sliderValue: number
  progressValue: number
}

const demoState = reactive<DemoState>({
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

export function useDemoState() {
  return demoState
}
