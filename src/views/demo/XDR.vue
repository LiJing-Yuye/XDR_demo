<template>
<page-header-wrapper :title="false">
  <div id="viewport">
    <div class="css-6l3ogw-Box etprcxd0">
      <div class="css-rn22hc-Box etprcxd0">
        <div class="css-17hayrg-Box etprcxd0">
          <div class="css-x8pcy0-Box etprcxd0">
            <button
              type="button"
              aria-disabled="false"
              data-track="endpoint-inventory-open-search-panel-button"
              class="css-1f9bg1q-Box-PseudoBox epiwrut0"
            >
              <i name="search-o" class="tmicon tmicon-search-o css-txsruf-Box etprcxd0"></i>
            </button>
            <div class="css-dr5ldp-Box etprcxd0">
              <button
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="popover-177"
                role="button"
                tabindex="0"
                class="css-8w1nj0-Box-PseudoBox epiwrut0"
              >
                <i name="download" class="tmicon tmicon-download css-1vd0rhq-Box etprcxd0"></i>
                <div class="css-cjpvpq-Box etprcxd0"></div>
                Download the Agent Installer
              </button>
              <div class="css-reqezp-Box etprcxd0"></div>
              <div data-track="endpoint-inventory-refresh-button" class="css-124zonv-Box-PseudoBox epiwrut0">
                <i name="refresh" class="tmicon tmicon-refresh css-1prcw89-Box etprcxd0"></i>
              </div>
            </div>
          </div>
          <div class="css-1wtrz52-Box etprcxd0">
            <button
              type="button"
              data-track="endpoint-inventory-available-endpoints"
              class=" epiwrut0"
              v-for="tab in tabs"
              :key="tab.index"
              :class="{
                'css-nogxmr-Box-PseudoBox': tab.index === currentTab,
                'css-oiyolh-Box-PseudoBox': tab.index !== currentTab
              }"
              @click="ChangeTab(tab.index)"
            >
              <div class="css-rfvk17-Box etprcxd0">
                <div
                  class="etprcxd0"
                  :class="{ 'css-fn7pov-Box': tab.index === currentTab, 'css-nxx92v-Box': tab.index !== currentTab }"
                >
                  {{ tab.name }}
                </div>
                <div
                  class="etprcxd0"
                  :class="{ 'css-5ddykn-Box': tab.index === currentTab, 'css-4r23zx-Box': tab.index !== currentTab }"
                >
                  {{ tab.count }}
                </div>
              </div>
            </button>
          </div>
        </div>

        <div class="css-1e6u19e-Box etprcxd0">
          <div class="css-mu0pj-Box etprcxd0">
            <div class="css-14qcodi-Box etprcxd0">
              <div class="css-101bjrc-Box etprcxd0">
                <!-- <button
                  type="button"
                  disabled=""
                  aria-disabled="true"
                  data-track="endpoint-inventory-open-enable-sensor-list-button"
                  class="css-bemqvo-Box-PseudoBox epiwrut0"
                >
                  Enable
                </button>
                <div class="css-if5r1p-Box etprcxd0"></div> -->
                <template v-if="currentTab === 0">
                  <button
                    aria-disabled="false"
                    data-track="endpoint-inventory-open-recommended-list-button"
                    class="css-xtoq90-Box-PseudoBox epiwrut0"
                    @click="NetworkScan()"
                  >
                    <div class="css-d7x518-Box etprcxd0"></div>
                    <div class="css-vnetfb-Box etprcxd0">Network Scan</div>
                  </button>

                  <endpoint-list></endpoint-list>
                </template>

                <template v-if="currentTab === 3">
                  <button
                    aria-disabled="false"
                    data-track="endpoint-inventory-open-recommended-list-button"
                    class="css-xtoq90-Box-PseudoBox epiwrut0"
                  >
                    <div class="css-d7x518-Box etprcxd0"></div>
                    <div class="css-vnetfb-Box etprcxd0">ReScan</div>
                  </button>
                  <device-list @toDetail="toDetail"></device-list>
                </template>

                <template v-if="currentTab === 5">
                  <button
                    aria-disabled="false"
                    data-track="endpoint-inventory-open-recommended-list-button"
                    class="css-xtoq90-Box-PseudoBox epiwrut0"
                    v-if="currentTab === 5"
                    @click="ChangeTab(3)"
                  >
                    <div class="css-d7x518-Box etprcxd0"></div>
                    <div class="css-vnetfb-Box etprcxd0">Back To Device List</div>
                  </button>
                  <device-detail></device-detail>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a-modal
      title="Do Network Scan Now"
      :visible="modalVisible"
      @ok="handleOk"
      @cancel="handleCancel"
      okText="Network Scan Now"
      cancelText="Cancel"
    >
      <p></p>
    </a-modal>
  </div>
</page-header-wrapper>
</template>

<script>
import DeviceList from './deviceList'
import EndpointList from './endpointList'
import DeviceDetail from './deviceDetail'

export default {
  components: {
    DeviceList,
    EndpointList,
    DeviceDetail
  },
  data () {
    return {
      currentTab: 1,
      modalVisible: false,
      tabs: [
        {
          index: 0,
          name: 'Available endpoints',
          count: '5'
        },
        {
          index: 1,
          name: 'Installing to endpoint',
          count: '0'
        },
        {
          index: 2,
          name: 'Action required',
          count: '0'
        },
        {
          index: 3,
          name: 'Network Devices(Include Unmanagement)',
          count: '8'
        }
      ],
      name: 'name',
      scanDevices: []
    }
  },
  methods: {
    ChangeTab (tabIndex) {
      this.currentTab = tabIndex
    },

    NetworkScan () {
      var selectedRows = window.localStorage.getItem('selectedRows')
      if (selectedRows) this.scanDevices = JSON.parse(selectedRows)
      this.modalVisible = true
    },

    handleOk () {
      this.handleCancel()
      this.ChangeTab(3)
    },

    handleCancel () {
      this.modalVisible = false
    },

    toDetail (data) {
      this.ChangeTab(5)
    }
  }
}
</script>

<style scoped>
#viewport {
  background: #212121;
}

.css-6l3ogw-Box {
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.875rem;
  height: 100vh;
}

.css-rn22hc-Box {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: rgb(21, 21, 21);
}

.css-17hayrg-Box {
  position: relative;
}

.css-x8pcy0-Box {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 0.75rem;
}

.css-1f9bg1q-Box-PseudoBox {
  cursor: pointer;
  appearance: none;
  background-color: inherit;
  border: 1px solid rgb(94, 94, 94);
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.25rem;
  outline: 0px;
  padding: 0px calc(0.75rem - 1px);
  border-radius: 3px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 250ms ease 0s;
  user-select: none;
  white-space: nowrap;
  z-index: 0;
  position: relative;
  min-height: 2rem;
  font-size: 0.875rem;
}

.css-txsruf-Box {
  display: inline-block;
  font-size: 1rem;
  line-height: 1.375rem;
  vertical-align: top;
}

.tmicon {
  font-family: 'TMicon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  font-family: TMicon !important;
}

.tmicon-search-o::before {
  content: '\e063';
}

.tmicon-refresh::before {
  content: '\e05e';
}

.css-dr5ldp-Box {
  color: rgba(255, 255, 255, 0.47);
  line-height: 2rem;
  display: flex;
}

.css-8w1nj0-Box-PseudoBox {
  cursor: pointer;
  appearance: none;
  background-color: rgb(30, 94, 222);
  border: 1px solid transparent;
  color: rgb(255, 255, 255);
  line-height: 1.25rem;
  outline: 0px;
  padding: 0px calc(0.75rem - 1px);
  border-radius: 2rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 250ms ease 0s;
  user-select: none;
  white-space: nowrap;
  z-index: 0;
  position: relative;
  min-height: 2rem;
  font-size: 0.875rem;
}

.css-8w1nj0-Box-PseudoBox::before {
  content: '';
  display: inline-block;
  transition: all 150ms ease 0s, background-color 250ms ease 0s;
  border-radius: calc(2rem - 3px);
  z-index: -1;
  position: absolute;
  inset: 0px;
  background-color: rgb(30, 94, 222);
}

.css-nogxmr-Box-PseudoBox {
  cursor: pointer;
  appearance: none;
  border: 0px;
  color: inherit;
  line-height: 1;
  outline: 0px;
  padding: 0px;
  flex: 1 1 auto;
  min-width: 240px;
  height: 64px;
  margin-left: 0.5rem;
  position: relative;
  background: rgb(87, 138, 239);
}

.css-oiyolh-Box-PseudoBox:hover {
  background: rgb(66, 66, 66);
}

.css-oiyolh-Box-PseudoBox:hover:not(:first-of-type) {
  background: linear-gradient(135deg, transparent 8px, rgb(66, 66, 66) 0px) left top;
}

.css-nogxmr-Box-PseudoBox:not(:last-of-type)::after {
  position: absolute;
  right: -12px;
  top: 0px;
  content: '';
  display: block;
  border-color: rgb(87, 138, 239) transparent transparent;
  border-style: solid;
  border-width: 14px 14px 14px 0px;
  height: 0px;
  width: 0px;
}

.css-oiyolh-Box-PseudoBox:hover:not(:last-of-type)::after {
  border-color: rgb(66, 66, 66) transparent transparent;
}

.css-1vd0rhq-Box {
  display: inline-block;
  font-size: 16px;
  line-height: 28px;
  vertical-align: top;
}

.tmicon-download:before {
  content: '\e027';
}

.css-reqezp-Box {
  display: inline-block;
  width: 0.5rem;
}

.css-dr5ldp-Box {
  color: rgba(255, 255, 255, 0.47);
  line-height: 2rem;
}

.css-1prcw89-Box {
  display: inline-block;
  font-size: 1rem;
  line-height: 2rem;
  vertical-align: top;
}

.css-1wtrz52-Box {
  display: flex;
}

.css-oiyolh-Box-PseudoBox:first-of-type {
  margin-left: 0px;
}

.css-oiyolh-Box-PseudoBox {
  cursor: pointer;
  appearance: none;
  border: 0px;
  color: inherit;
  line-height: 1;
  outline: 0px;
  padding: 0px;
  flex: 1 1 auto;
  min-width: 240px;
  height: 64px;
  margin-left: 0.5rem;
  position: relative;
  background: rgb(48, 48, 48);
}

.css-rfvk17-Box {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.75rem;
}

.css-nxx92v-Box {
  display: inline-block;
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1.25rem;
  line-height: 1.75rem;
  flex: 1 1 auto;
  text-align: left;
  color: rgba(255, 255, 255, 0.6);
}

.css-4r23zx-Box {
  display: inline-block;
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 2rem;
  line-height: 2.5rem;
  flex: 1 1 auto;
  text-align: right;
  color: rgba(255, 255, 255, 0.6);
}

.css-oiyolh-Box-PseudoBox:not(:last-of-type)::after {
  position: absolute;
  right: -12px;
  top: 0px;
  content: '';
  display: block;
  border-color: rgb(48, 48, 48) transparent transparent;
  border-style: solid;
  border-width: 14px 14px 14px 0px;
  height: 0px;
  width: 0px;
}

.css-oiyolh-Box-PseudoBox:not(:first-of-type) {
  background: linear-gradient(135deg, transparent 8px, rgb(48, 48, 48) 0px) left top no-repeat;
}

.css-1f9bg1q-Box-PseudoBox:active:not(:focus),
.css-1f9bg1q-Box-PseudoBox[data-active='true']:not(:focus) {
  border-color: rgb(87, 138, 239);
}

.css-1f9bg1q-Box-PseudoBox:hover:not(:focus) {
  border-color: rgb(87, 138, 239);
}

.css-1f9bg1q-Box-PseudoBox:active,
.css-1f9bg1q-Box-PseudoBox[data-active='true'] {
  color: rgb(111, 155, 244);
  background-color: rgba(0, 0, 0, 0.12);
}

.css-1f9bg1q-Box-PseudoBox:hover {
  color: rgb(111, 155, 244);
  z-index: 2;
}

.css-fn7pov-Box {
  display: inline-block;
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1.25rem;
  line-height: 1.75rem;
  flex: 1 1 auto;
  text-align: left;
}

.css-5ddykn-Box {
  display: inline-block;
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 2rem;
  line-height: 2.5rem;
  flex: 1 1 auto;
  text-align: right;
  color: rgb(255, 255, 255);
}

.css-nogxmr-Box-PseudoBox:not(:first-of-type) {
  background: linear-gradient(135deg, transparent 8px, rgb(87, 138, 239) 0px) left top no-repeat;
}

.css-1e6u19e-Box {
  flex: 1 1 auto;
}

.css-mu0pj-Box {
  height: 100%;
}

.css-14qcodi-Box {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.css-101bjrc-Box {
    min-height: 2rem;
    margin: 0.75rem;
}

.css-bemqvo-Box-PseudoBox[aria-disabled="true"], .css-bemqvo-Box-PseudoBox:disabled, .css-bemqvo-Box-PseudoBox:disabled:hover, .css-bemqvo-Box-PseudoBox:disabled:focus, .css-bemqvo-Box-PseudoBox:hover[aria-disabled="true"], .css-bemqvo-Box-PseudoBox:focus[aria-disabled="true"] {
    background-color: rgb(94, 94, 94);
    color: rgb(255, 255, 255);
    cursor: not-allowed;
    opacity: 0.28;
}

.css-bemqvo-Box-PseudoBox {
    cursor: default;
    appearance: none;
    background-color: rgb(30, 94, 222);
    border: 1px solid transparent;
    color: rgb(255, 255, 255);
    line-height: 1.25rem;
    outline: 0px;
    padding: 0px calc(0.75rem - 1px);
    border-radius: 3px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    transition: all 250ms ease 0s;
    user-select: none;
    white-space: nowrap;
    z-index: 0;
    position: relative;
    min-height: 2rem;
    font-size: 0.875rem;
}

.css-bemqvo-Box-PseudoBox[aria-disabled="true"]::before, .css-bemqvo-Box-PseudoBox:disabled::before, .css-bemqvo-Box-PseudoBox:disabled:hover::before, .css-bemqvo-Box-PseudoBox:disabled:focus::before, .css-bemqvo-Box-PseudoBox:hover[aria-disabled="true"]::before, .css-bemqvo-Box-PseudoBox:focus[aria-disabled="true"]::before {
    background-color: rgb(94, 94, 94);
}

.css-bemqvo-Box-PseudoBox::before {
    content: "";
    display: inline-block;
    transition: all 150ms ease 0s, background-color 250ms ease 0s;
    border-radius: calc(0px);
    z-index: -1;
    position: absolute;
    inset: 0px;
    background-color: rgb(30, 94, 222);
}

.css-if5r1p-Box {
    display: inline-block;
    width: 0.75rem;
}

.css-xtoq90-Box-PseudoBox {
    position: relative;
    display: inline-block;
    background: transparent;
    border: 0px;
    border-radius: 3px;
    color: white;
    padding: 6px 11px;
    line-height: 1.25rem;
    transition: all 250ms ease 0s;
    z-index: 1;
    vertical-align: top;
    cursor: pointer;
}

.css-xtoq90-Box-PseudoBox::before {
    position: absolute;
    content: "";
    border-radius: 3px;
    inset: 0px;
    z-index: -1;
    background: linear-gradient(to right top, rgb(143, 65, 233), rgb(87, 138, 239));
}

.css-j98hd9-Box {
    display: inline-block;
    font-size: 1rem;
    line-height: 1.25rem;
    vertical-align: top;
    margin-right: 0.5rem;
}

.tmicon-magic:before {
    content: "\e09d";
}

.css-d7x518-Box {
    display: inline-block;
    width: 0.25rem;
}

.css-vnetfb-Box {
    display: inline-block;
    font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.css-xtoq90-Box-PseudoBox::after {
    position: absolute;
    content: "";
    border-radius: 3px;
    inset: 1px;
    z-index: -1;
    background-color: rgb(21, 21, 21);
}

.css-xtoq90-Box-PseudoBox:focus {
  outline: 0px;
}

.css-xtoq90-Box-PseudoBox:active,
.css-xtoq90-Box-PseudoBox:hover {
    color: rgb(111, 155, 244);
}
</style>
