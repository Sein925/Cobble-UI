<script setup lang="ts">
import { ref } from 'vue'
import McButton from './components/Button/McButton.vue'
import McInput from './components/Input/McInput.vue'
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

const { isDark, toggleMode, themeMode } = useTheme()

const message = ref('')
const switchValue = ref(true)
const sliderValue = ref(50)
const checkboxValue = ref(true)
const radioValue = ref('option1')
const selectValue = ref('')
const dropdownValue = ref('')
const dialogVisible = ref(false)
const currentTab = ref('tab1')
const currentPage = ref(1)
const progressValue = ref(60)

const selectOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape', disabled: true },
  { value: 'pear', label: 'Pear' }
]

const dropdownOptions = [
  { value: 'action1', label: 'Action 1' },
  { value: 'action2', label: 'Action 2' },
  { value: 'action3', label: 'Action 3', divided: true },
  { value: 'action4', label: 'Action 4', disabled: true },
  { value: 'action5', label: 'Action 5' }
]

const tabs = [
  { label: 'Tab 1', value: 'tab1' },
  { label: 'Tab 2', value: 'tab2' },
  { label: 'Tab 3', value: 'tab3', disabled: true },
  { label: 'Tab 4', value: 'tab4' }
]

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Components', path: '/components' },
  { label: 'Demo', path: '/components/demo' }
]

const tableColumns: { key: string; label: string; align?: 'left' | 'center' | 'right' }[] = [
  { key: 'name', label: 'Name', align: 'left' },
  { key: 'age', label: 'Age', align: 'center' },
  { key: 'role', label: 'Role', align: 'left' },
  { key: 'status', label: 'Status', align: 'center' }
]

const tableData = [
  { name: 'Steve', age: 28, role: 'Developer', status: 'Active' },
  { name: 'Alex', age: 25, role: 'Designer', status: 'Active' },
  { name: 'Herobrine', age: 30, role: 'Admin', status: 'Online' },
  { name: 'Notch', age: 35, role: 'Founder', status: 'Offline' }
]
</script>

<template>
  <div class="demo-container">
    <header class="demo-header">
      <h1>Minecraft UI Demo</h1>
      <button @click="toggleMode" class="theme-toggle">
        {{ isDark ? '🌙 Dark' : '☀️ Light' }} Mode
      </button>
    </header>

    <McBreadcrumb :items="breadcrumbItems" />

    <McTabs v-model="currentTab" :tabs="tabs" type="line">
      <div v-if="currentTab === 'tab1'">Tab 1 content - Form components</div>
      <div v-if="currentTab === 'tab2'">Tab 2 content - Feedback components</div>
      <div v-if="currentTab === 'tab3'">Tab 3 content - Navigation components</div>
      <div v-if="currentTab === 'tab4'">Tab 4 content - Layout components</div>
    </McTabs>

    <McGrid :cols="2" gap="24px">
      <McCard bordered padded hoverable>
        <template #header>Buttons</template>
        <McFlex gap="8px" wrap>
          <McButton variant="primary">Primary</McButton>
          <McButton variant="secondary">Secondary</McButton>
          <McButton variant="outline">Outline</McButton>
          <McButton variant="ghost">Ghost</McButton>
        </McFlex>
        <McFlex gap="8px" wrap style="margin-top: 8px;">
          <McButton status="success">Success</McButton>
          <McButton status="warning">Warning</McButton>
          <McButton status="error">Error</McButton>
        </McFlex>
        <McFlex gap="8px" wrap style="margin-top: 8px;">
          <McButton size="sm">Small</McButton>
          <McButton size="md">Medium</McButton>
          <McButton size="lg">Large</McButton>
        </McFlex>
        <McFlex gap="8px" wrap style="margin-top: 8px;">
          <McButton disabled>Disabled</McButton>
          <McButton loading>Loading</McButton>
        </McFlex>
      </McCard>

      <McCard bordered padded hoverable>
        <template #header>Inputs</template>
        <McInput v-model="message" placeholder="Enter text" style="margin-bottom: 8px;" />
        <McFlex gap="8px" wrap>
          <McInput size="sm" placeholder="Small" style="flex: 1;" />
          <McInput size="md" placeholder="Medium" style="flex: 1;" />
          <McInput size="lg" placeholder="Large" style="flex: 1;" />
        </McFlex>
        <McFlex gap="8px" wrap style="margin-top: 8px;">
          <McInput status="success" placeholder="Success" style="flex: 1;" />
          <McInput status="warning" placeholder="Warning" style="flex: 1;" />
          <McInput status="error" placeholder="Error" style="flex: 1;" />
        </McFlex>
        <McFlex gap="8px" wrap style="margin-top: 8px;">
          <McInput disabled placeholder="Disabled" style="flex: 1;" />
          <McInput readonly placeholder="Readonly" style="flex: 1;" />
        </McFlex>
      </McCard>

      <McCard bordered padded hoverable>
        <template #header>Switch & Slider</template>
        <McFlex align="center" gap="16px" style="margin-bottom: 16px;">
          <span>Switch:</span>
          <McSwitch v-model="switchValue" />
          <McSwitch v-model="switchValue" activeText="ON" inactiveText="OFF" />
          <McSwitch :model-value="false" disabled />
        </McFlex>
        <McFlex align="center" gap="16px">
          <span>Slider:</span>
          <McSlider v-model="sliderValue" :show-tooltip="true" style="flex: 1;" />
          <span>{{ sliderValue }}</span>
        </McFlex>
      </McCard>

      <McCard bordered padded hoverable>
        <template #header>Checkbox & Radio</template>
        <McFlex direction="column" gap="8px" style="margin-bottom: 16px;">
          <McCheckbox v-model="checkboxValue" label="Checkbox" />
          <McCheckbox :model-value="false" label="Unchecked" />
          <McCheckbox :model-value="true" disabled label="Disabled" />
          <McCheckbox indeterminate label="Indeterminate" />
        </McFlex>
        <McFlex direction="column" gap="8px">
          <McRadio v-model="radioValue" value="option1" label="Option 1" />
          <McRadio v-model="radioValue" value="option2" label="Option 2" />
          <McRadio v-model="radioValue" value="option3" label="Option 3" disabled />
        </McFlex>
      </McCard>

      <McCard bordered padded hoverable>
        <template #header>Select & Dropdown</template>
        <McSelect v-model="selectValue" :options="selectOptions" placeholder="Select an option" style="margin-bottom: 16px;" />
        <McDropdown v-model="dropdownValue" :options="dropdownOptions">
          <span>Dropdown Menu</span>
        </McDropdown>
      </McCard>

      <McCard bordered padded hoverable>
        <template #header>Badge</template>
        <McFlex gap="16px" wrap>
          <McBadge :value="5">
            <McButton variant="ghost">Inbox</McButton>
          </McBadge>
          <McBadge :value="12" status="success">
            <McButton variant="ghost">Notifications</McButton>
          </McBadge>
          <McBadge :value="999" status="warning">
            <McButton variant="ghost">Messages</McButton>
          </McBadge>
          <McBadge dot status="error">
            <McButton variant="ghost">Alert</McButton>
          </McBadge>
        </McFlex>
      </McCard>

      <McCard bordered padded hoverable>
        <template #header>Alert</template>
        <McAlert type="success" title="Success">Operation completed successfully!</McAlert>
        <McAlert type="warning" title="Warning" style="margin-top: 8px;">Please check your input.</McAlert>
        <McAlert type="error" title="Error" style="margin-top: 8px;">Something went wrong.</McAlert>
        <McAlert type="info" title="Info" style="margin-top: 8px;">This is an informational message.</McAlert>
      </McCard>

      <McCard bordered padded hoverable>
        <template #header>Dialog</template>
        <McButton variant="primary" @click="dialogVisible = true">Open Dialog</McButton>
        <McDialog v-model="dialogVisible" title="Dialog Title" width="500px">
          <p>This is the dialog content. You can put any HTML here.</p>
          <p>Click Confirm or Cancel to close.</p>
        </McDialog>
      </McCard>

      <McCard bordered padded hoverable>
        <template #header>Progress & Spinner</template>
        <McProgress :percentage="progressValue" show-text striped animated style="margin-bottom: 16px;" />
        <McProgress :percentage="100" status="success" show-text style="margin-bottom: 16px;" />
        <McProgress :percentage="80" status="warning" show-text style="margin-bottom: 16px;" />
        <McProgress :percentage="30" status="error" show-text style="margin-bottom: 16px;" />
        <McFlex gap="16px">
          <McSpinner size="sm" />
          <McSpinner size="md" />
          <McSpinner size="lg" />
        </McFlex>
      </McCard>

      <McCard bordered padded hoverable>
        <template #header>Table</template>
        <McTable :columns="tableColumns" :data="tableData" striped hoverable />
      </McCard>
    </McGrid>

    <McCard bordered padded style="margin-top: 24px;">
      <template #header>Pagination</template>
      <McPagination v-model:current-page="currentPage" :total="100" :page-size="10" :show-size-changer="true" />
    </McCard>

    <McCard bordered padded style="margin-top: 24px;">
      <template #header>Current Mode</template>
      <p>Mode: {{ themeMode }}</p>
      <p>Is Dark: {{ isDark }}</p>
    </McCard>
  </div>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.demo-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.demo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 16px;
  background-color: var(--mc-surface);
  border: 2px solid var(--mc-border);
  box-shadow: $pixel-size $pixel-size 0 var(--mc-border);
}

.theme-toggle {
  padding: 8px 16px;
  background-color: var(--mc-primary);
  color: white;
  border: 2px solid var(--mc-primary-dark);
  box-shadow: $pixel-size $pixel-size 0 var(--mc-primary-dark);
  cursor: pointer;
  font-family: 'Press Start 2P', 'Courier New', monospace;
  font-size: var(--mc-font-sm);
  
  &:active {
    transform: translate($pixel-size, $pixel-size);
    box-shadow: none;
  }
}

.mc-tabs__content {
  margin-bottom: 24px;
}
</style>
