<template>
  <div>
    <header class="ant-layout-header" id="layout-header">
      <div class="product">
        <div class="brandname">
          <trend style="cursor: pointer">Trend Micro XDR</trend>
          <div role="separator" class="ant-divider ant-divider-vertical"></div>
          <span id="uic_breadCrumbs">Security Posture (Preview)</span>
        </div>
      </div>
      <div class="userinfo">
        <span>
          <i aria-label="icon: clock-circle" class="anticon anticon-clock-circle" style="font-size: 16px">
            <svg
              viewBox="64 64 896 896"
              data-icon="clock-circle"
              width="1em"
              height="1em"
              fill="#bbbbbb"
              aria-hidden="true"
              focusable="false"
              class=""
            >
              <path
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
              </path>
              <path
                d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z">
              </path>
            </svg>
          </i>
          <span class="UTC"> UTC</span></span><span>
            <i class="tm-icon-i">
              <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="#bbbbbb"
              class="tm-icon"
            >
              <title>Trend</title>
              <path
                d="M2 1v15h12v-15zM6 4h1v1h-1zM6 6h1v1h-1zM6 8h1v1h-1zM6 10h1v1h-1zM5 13h-1v-1h1zM5 11h-1v-1h1zM5 9h-1v-1h1zM5 7h-1v-1h1zM5 5h-1v-1h1zM10 15h-4v-2h4zM10 11h-1v-1h1zM10 9h-1v-1h1zM10 7h-1v-1h1zM10 5h-1v-1h1zM12 13h-1v-1h1zM12 11h-1v-1h1zM12 9h-1v-1h1zM12 7h-1v-1h1zM12 5h-1v-1h1z">
              </path>
            </svg>
            </i>
          <span title="Trend" class="companyName">Trend</span></span>
          <span class="ant-dropdown-link notification-container ant-badge ant-dropdown-trigger">
            <i aria-label="icon: bell" class="anticon anticon-bell" style="font-size: 18px">
              <svg
              viewBox="64 64 896 896"
              data-icon="bell"
              width="1em"
              height="1em"
              fill="#bbbbbb"
              aria-hidden="true"
              focusable="false"
              class=""
              >
              <path
                d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z">
              </path>
              </svg>
            </i>
            <sup title="1" class="ant-scroll-number ant-badge-count" data-show="true">
              <span class="ant-scroll-number-only" style="transition: none 0s ease 0s; transform: translateY(-1100%)">
                <p class="ant-scroll-number-only-unit">0</p>
                <p class="ant-scroll-number-only-unit">1</p>
                <p class="ant-scroll-number-only-unit">2</p>
                <p class="ant-scroll-number-only-unit">3</p>
                <p class="ant-scroll-number-only-unit">4</p>
                <p class="ant-scroll-number-only-unit">5</p>
                <p class="ant-scroll-number-only-unit">6</p>
                <p class="ant-scroll-number-only-unit">7</p>
                <p class="ant-scroll-number-only-unit">8</p>
                <p class="ant-scroll-number-only-unit">9</p>
                <p class="ant-scroll-number-only-unit">0</p>
                <p class="ant-scroll-number-only-unit current">1</p>
                <p class="ant-scroll-number-only-unit">2</p>
                <p class="ant-scroll-number-only-unit">3</p>
                <p class="ant-scroll-number-only-unit">4</p>
                <p class="ant-scroll-number-only-unit">5</p>
                <p class="ant-scroll-number-only-unit">6</p>
                <p class="ant-scroll-number-only-unit">7</p>
                <p class="ant-scroll-number-only-unit">8</p>
                <p class="ant-scroll-number-only-unit">9</p>
                <p class="ant-scroll-number-only-unit">0</p>
                <p class="ant-scroll-number-only-unit">1</p>
                <p class="ant-scroll-number-only-unit">2</p>
                <p class="ant-scroll-number-only-unit">3</p>
                <p class="ant-scroll-number-only-unit">4</p>
                <p class="ant-scroll-number-only-unit">5</p>
                <p class="ant-scroll-number-only-unit">6</p>
                <p class="ant-scroll-number-only-unit">7</p>
                <p class="ant-scroll-number-only-unit">8</p>
                <p class="ant-scroll-number-only-unit">9</p>
              </span>
            </sup>
          </span>
          <span id="__userPhoto" class="subicon ant-dropdown-trigger" style="display: inline-block">
            <span
            class="ant-avatar ant-avatar-sm ant-avatar-circle ant-avatar-image"
            style="margin: 0px 12px 6px; cursor: pointer">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAAGVn0euAAAACXBIWXMAAAsSAAALEgHS3X78AAAIcklEQVR4nO2dbWsVOxDHc23BggUFRcVChRYsKLUgWKjQr+MXFVroi4IVBYUKCgp9UahQQcHi5bd0Sk6a52Q3e+7dPxzO0+5OZiaZTGZms/+8fv36r0rAjZSDVbUTlpaWuvfnz5+HT9jd3VW/fv3qPh8dHXXfvSdcXFykNWlhYWHm+7t37/wnfPr06aoZvJ+dnblP4ICTkxP15s2b7ru872p83NAPlgNM8LucdHWC62ABlK08uABvYB76ki7CXaNbqGIeVlZW0k749u1bsEn5TC8uLnYvXeN8fvr0qZvCnz9/rl3xw4cP6sWLF7MnPHnyxHqw4PDwcPYE6ScxSNZDKpKlmorF2ONtOg+NURVDQCyD7WLr6+vq0aNHXkJeET1+/Fj9+PHD+f/x8XGofX4CX758Ubdv3w5exIegiHQDqYvCtMAueAnYLqwTZmj6jlGuceAz+S7cunWrG8LmeTM6QKk5Fwc/f/6cEaeXg5rofSTPPwcTgSCizDXep2mTmObo+8UEXKaA3yGgz6c2BM217eLyG+YhBC+B1dVVr9n4/PmzdabTUaRkXKkiDmogSODBgwfO/xBPyEfyEkD+eGU+wuLduxA9ZX79+rWbo1VgpkviQL+YDdvb20ECTnPNyTdv3uxk7BKDHMOCzlyjCawiihXBwcHB1fGuUW1dtbBGTZmXZVTj6XkJSM/Y29uLvrhOBDfSS4AumeNRCPS1s5VAKWydYZr0g+hdRH2jdwlNDAQw9wxEr/JTgEXGYWMiEpyennY+lMQ1R8UAK9mdnZ2Z3/APCBCcn593PjMMvXz58up/GCKuVEy79AL61OKapmgsLwEaYlrjXJjQ/0tF0RiQxjNHpsyxenCDcKDPLw0hmwEJl+LahPxSF4QJl9/bKwP0e0Afb4lsBsSBLwm02RzMVBSNASyNcgRSQ6DbiANb4qNW8YV0BkJhBT0UUcOUVnPmyNSJndfXiDqEUdf/OcieB+7cuaM2NzdnfkPyHz9+dGqAroL1Wltb6yIfgt+/f1+t8FKRpAFzxv3+/XtUyD3lmpjklJxNlAZMIiWDzgTZKLmezNC8x0TPVIwGXr16dZX6rdlwH6Sbgf39fW/KzWtGGXQ0nkE3VOPVZWBO6KF5CUXa4GRA93NqWYxUCBMM+Lt371rPdo4Bic3l+jm14AtsqVAXSrEGfcHX+CAD84C5Z2CKC7XGxEBrTAy0xsRAa0zBXROsjfHlde+RJSMebR+OYTUGpHrIBqLUeLa8CPhScVsLVRggvqlLnOUgEqexy8vLXRhFFvF8Zq0RWmnFotgXQupSnBGSrh56UZWWqEWDGKlL41k7hLoGyQ2zDK8URQxIpSzhlZQBqjPhW+/GIJsBPaafExuS1Z4e4MpBNgMS0yfvlYNaJrV4IoupTXJB7k2IqS13oelMLMkRSZbkYPKFSiB5gpIJrZiBUjOoCsdRNgOlZrAktaojmwHdDOakSeUcybPloqgLSX4LaaZIVHchSgPHRQyQpJMbJpCo7U42HfhNMaUJKSgexDhw0p3EVbYB5vT1Qq18QxUzyoDGoYsFa4FaKF7QSIFqCiTf5it8jUX2gsbWcBw7n01nDGxsbFyrTg8lMXxIZsDMD+fmePVEXsl1khiQFKigxrq29JrRgxgLIoQwn1iRGotyxoE+qBkfKd5pFAP6wh2CNWrddOjJbpXIRJABanqk8WTO+8xawoQscswiQhe8DBAGkZoeLEzM3Tml0IvnqRIoYkBiODS8xOVNhYwJqgRCPpaTAd3Pjym6qAnGhHipIU/XyYD4+a2S3bqXmlwrocc5W5YaxCyarAxIJW3rOgmh72uHt9gDt6E1QhVcXiuU62DVRNHtcPOAiYHWmBhojbmvF5p3zH0PmndMCmiMSQGNMSmgMSYFNMakgMaYFNAYvdxLPwQIu1NIqC6rXWrkKJrwMYI2OEE8jai+686rEAgskvUdQ1jLhdEpgPhzafmfAMXpyqt5828tjEIBmBMKKFx7shHVRXixW4GQD0OJZkqH33iRZqKwYwxmq3ksyExuC0KlCikwKwEEqTdc94FmI4BeT42IubV2jaIVEyiSl9wkLuD7vXv3urKMVqOhiRtqEz71KWSE+8zEcW1oQEtAG2hLSb1wCZoogF5oCn+oXggNaJlKKNlSpwSDKwDX0nQr379/P3QzrtGkTS3SyIMrwNx+iDrZIap2TEDT3NS8dA/yHAyuANPVnNcVbC0MrgCzt7ea/MaCwRVgG/Yxm2LXBjRt5nBoDK4A4jLmNorPnj0bnHGTJm1qETNq4oay2NIfhkTB/lC+ODQondVvEsAlrV04HYsmCrD54giEwuhaN5LZwLWhYVuDtELzWJA8JMdEzcilK8JaY0O/UoyiMKt2NJQF1f37952jaUzR0FH4gAhCCvmJXNJjdTOBIGUTkxjQ200PhzmH84e82yEGo3HCCQUg6NzsVwgolJA0imFElWxoXRPNFGDbg90Fem/Kvuyy8YwZ6laWLFmf2wPFYLA5ADtPD/R5ObJROGai9kb4zC8PHz7s6NsUI4A+yaCh5ofeFeDL8ba2y7SNOcelkCFyyL0owOfVMORZiI2tUgHPiZyAzST26TVVVYBP8GOsSHDBNWr7UEQ1BZg7salLE/P27dsm8f4aoCNtbW1dM1G1nm+iaigAoZtP/VU9JddbwUzmC0qfz6JK3VDbUyPHUOpRG/DEyyyhoeOVbgyZFYyTiKLtkZ3/NeHrgDfz1ntkgCxyI7nJCvCVlMyrrU8BPNYsbUlWgCl8GtSysKkFJJyudzhRQiqSFMCEqwsfL2fo3TDGBHjXE0vIJjWWlaQA2S9IvBue5vN/h8hAHv6W6hVNN2o3xnSLUmNMCmiMSQGNMSmgMSYFNMakgJZQSv0LXx6ksTEPLY0AAAAASUVORK5CYII=" /></span>
            </span>
      </div>
    </header>
  </div>
</template>

<script>
import '@/assets/icons'
export default {
  methods: {},
  name: 'HeaderContent',
  components: {},
  props: {
    // prefixCls: {
    //   type: String,
    //   default: 'ant-pro-global-header-index-action'
    // },
    // isMobile: {
    //   type: Boolean,
    //   default: () => false
    // },
    // topMenu: {
    //   type: Boolean,
    //   required: true
    // },
    // theme: {
    //   type: String,
    //   required: true
    // }
  },
  data () {
    return {
      showMenu: true,
      currentUser: {}
    }
  },
  computed: {},
  mounted () {
    setTimeout(() => {
      this.currentUser = {
        name: 'DiamondRing',
        avatar: 'https://avatars1.githubusercontent.com/u/18310037?s=460&v=4'
      }
    }, 1500)
  }
}
</script>
<style scoped>
.headerWrap {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 0;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  background-color: #151515;
}
.ant-layout-header {
  padding: 0 2px 0 20px;
  height: 48px;
  background-color: #2c2c2c !important;
  border-bottom: 1px solid #111;
  line-height: 40px;
  -webkit-box-shadow: 0 0 2px rgba(0,0,0,.1);
  box-shadow: 0 0 2px rgba(0,0,0,.1);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
}
.product {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
}
.brandname {
  color: #fff;
  font-size: 24px;
  line-height: 40px;
  height: 40px;
}
.product .brandname span {
    font-size: 16px;
}

.ant-divider, .ant-divider-vertical {
    position: relative;
    top: -.06em;
    display: inline-block;
    width: 1px;
    height: .9em;
    margin: 0 8px;
    margin-top: 0px;
    margin-right: 8px;
    margin-bottom: 0px;
    margin-left: 8px;
    vertical-align: middle;
}
.userinfo {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
}
.anticon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
sub, sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
}
sup {
    font-size: smaller;
}
span.UTC {
    font-size: 12px;
    padding-right: 10px;
    color: #bbbbbb;
}
.tm-icon-i {
    vertical-align: middle;
    font-size: 16px;
}
span.companyName {
    max-width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 4px;
    color: #bbbbbb;
}
.notification-container {
    cursor: pointer;
}
.ant-badge {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: "tnum";
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    color: unset;
    line-height: 1;
}
.ant-scroll-number {
    overflow: hidden;
}
.ant-badge-count, .ant-badge-dot, .ant-badge .ant-scroll-number-custom-component {
    position: absolute;
    top: 0;
    right: 0;
    -webkit-transform: translate(50%,-50%);
    transform: translate(50%,-50%);
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
}
.ant-badge-count {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: #f5222d;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 0 1px #fff;
    box-shadow: 0 0 0 1px #fff;
}
.ant-scroll-number-only {
    display: inline-block;
    height: 20px;
    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
    transition: all .3s cubic-bezier(.645,.045,.355,1);
}
.ant-scroll-number-only>p.ant-scroll-number-only-unit {
    height: 20px;
    margin: 0;
}
.ant-avatar-sm {
    width: 24px;
    height: 24px;
    line-height: 24px !important;
    border-radius: 50%;
}
.ant-avatar-image {
    background: transparent;
}
.ant-avatar {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: "tnum";
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    overflow: hidden;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    background: #ccc;
    border-radius: 50%;
}
</style>
