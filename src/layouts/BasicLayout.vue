<template>
  <pro-layout
    :menus="menus"
    :collapsed="collMore"
    :media-query="query"
    :is-mobile="isMobile"
    :handle-media-query="handleMediaQuery"
    :handle-collapse="handleCollapse"
    :logo="logoRender"
    :i18n-render="i18nRender"
    :collapsedButtonRender="false"
    v-bind="settings"
  >
    <setting-drawer :settings="settings" @change="handleSettingChange" />
    <template v-slot:breadcrumbRender>
      <div style="height:0px"/>
    </template>
    <template v-slot:headerContentRender>
      <header-content></header-content>
    </template>
    <template v-slot:footerRender>
      <div style="height:0px"/>
    </template>
    <router-view />
  </pro-layout>
</template>

<script>
import { SettingDrawer, updateTheme } from '@ant-design-vue/pro-layout'
import { i18nRender } from '@/locales'
import { CONTENT_WIDTH_TYPE, SIDEBAR_TYPE, TOGGLE_MOBILE_TYPE } from '@/store/mutation-types'

import defaultSettings from '@/config/defaultSettings'
import RightContent from '@/components/GlobalHeader/RightContent'
import HeaderContent from '@/components/GlobalHeader/HeaderContent'
import LogoSvg from '../assets/trend.svg?inline'

export default {
  name: 'BasicLayout',
  components: {
    SettingDrawer,
    RightContent,
    HeaderContent
  },
  data () {
    return {
      // preview.pro.antdv.com only use.
      isProPreviewSite: process.env.VUE_APP_PREVIEW === 'true' && process.env.NODE_ENV !== 'development',
      // end

      // base
      collMore: true,
      menus: [],
      // 侧栏收起状态
      collapsed: false,
      title: defaultSettings.title,
      settings: {
        // 布局类型
        layout: defaultSettings.layout, // 'sidemenu', 'topmenu'
        // CONTENT_WIDTH_TYPE
        contentWidth: defaultSettings.layout === 'sidemenu' ? CONTENT_WIDTH_TYPE.Fluid : defaultSettings.contentWidth,
        // 主题 'dark' | 'light'
        // theme: defaultSettings.navTheme,
        // 主色调
        primaryColor: defaultSettings.primaryColor,
        fixedHeader: defaultSettings.fixedHeader,
        fixSiderbar: defaultSettings.fixSiderbar,
        colorWeak: defaultSettings.colorWeak,

        hideHintAlert: false,
        hideCopyButton: false
        // footerRender: false,
        // breadcrumbRender: false
      },
      // 媒体查询
      query: {},

      // 是否手机模式
      isMobile: false
    }
  },

  created () {
    const routes = this.$router.options.routes.filter((item) => { return item.hidden !== true && item.meta })
    this.menus = (routes[0] && routes[0].children) || []
    // 处理侧栏收起状态
    this.$watch('collapsed', () => {
      console.log('collapsed：', this.collapsed)
      this.$store.commit(SIDEBAR_TYPE, this.collapsed)
    })
    this.$watch('isMobile', () => {
      this.$store.commit(TOGGLE_MOBILE_TYPE, this.isMobile)
    })
  },
  mounted () {
    const userAgent = navigator.userAgent
    if (userAgent.indexOf('Edge') > -1) {
      this.$nextTick(() => {
        this.collapsed = !this.collapsed
        setTimeout(() => {
          this.collapsed = !this.collapsed
        }, 16)
      })
    }

    // first update color
    // TIPS: THEME COLOR HANDLER!! PLEASE CHECK THAT!!
    if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {
      updateTheme(this.settings.primaryColor)
    }
  },
  methods: {
    i18nRender,
    handleMediaQuery (val) {
      this.query = val
      if (this.isMobile && !val['screen-xs']) {
        this.isMobile = false
        return
      }
      if (!this.isMobile && val['screen-xs']) {
        this.isMobile = true
        this.collapsed = true
        this.settings.contentWidth = CONTENT_WIDTH_TYPE.Fluid
        // this.settings.fixSiderbar = false
      }
    },
    handleCollapse (val) {
      this.collapsed = val
    },
    handleSettingChange ({ type, value }) {
      console.log('type', type, value)
      type && (this.settings[type] = value)
      switch (type) {
        case 'contentWidth':
          this.settings[type] = value
          break
        case 'layout':
          if (value === 'sidemenu') {
            this.settings.contentWidth = CONTENT_WIDTH_TYPE.Fluid
          } else {
            this.settings.fixSiderbar = false
            this.settings.contentWidth = CONTENT_WIDTH_TYPE.Fixed
          }
          break
      }
    },
    logoRender () {
      return <LogoSvg style='background-color:white'/>
    }
  }
}
</script>

<style lang="less">
@import './BasicLayout.less';
</style>
