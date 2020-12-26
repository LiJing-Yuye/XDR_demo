<template>
<div class="ant-layout ">
  <header class="ant-layout-header">
    netscan
  </header>
</div>
  <!-- <a-dropdown v-if="currentUser && currentUser.name" placement="bottomRight">
    <span class="ant-pro-account-avatar">
      <a-avatar size="small" :src="currentUser.avatar" class="antd-pro-global-header-index-avatar" />
      <span>{{ currentUser.name }}</span>
    </span>
    <template v-slot:overlay>
      <a-menu class="ant-pro-drop-down menu" :selected-keys="[]">
        <a-menu-item v-if="menu" key="center" @click="handleToCenter">
          <a-icon type="user" />
          个人中心
        </a-menu-item>
        <a-menu-item v-if="menu" key="settings" @click="handleToSettings">
          <a-icon type="setting" />
          个人设置
        </a-menu-item>
        <a-menu-divider v-if="menu" />
        <a-menu-item key="logout" @click="handleLogout">
          <a-icon type="logout" />
          退出登录
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
  <span v-else>
    <a-spin size="small" :style="{ marginLeft: 8, marginRight: 8 }" />
  </span> -->
</template>

<script>
import { Modal } from 'ant-design-vue'

export default {
  name: 'AvatarDropdown',
  props: {
    currentUser: {
      type: Object,
      default: () => null
    },
    menu: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleToCenter () {
      this.$router.push({ path: '/account/center' })
    },
    handleToSettings () {
      this.$router.push({ path: '/account/settings' })
    },
    handleLogout (e) {
      Modal.confirm({
        title: this.$t('layouts.usermenu.dialog.title'),
        content: this.$t('layouts.usermenu.dialog.content'),
        onOk: () => {
          // return new Promise((resolve, reject) => {
          //   setTimeout(Math.random() > 0.5 ? resolve : reject, 1500)
          // }).catch(() => console.log('Oops errors!'))
          return this.$store.dispatch('Logout').then(() => {
            this.$router.push({ name: 'login' })
          })
        },
        onCancel () {}
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ant-pro-drop-down {
  /deep/ .action {
    margin-right: 8px;
  }
  /deep/ .ant-dropdown-menu-item {
    min-width: 160px;
  }
}
.ant-layout {
  background-color: #151515;
  width: 100%;
  height: 100%;
}

.ant-layout-header {
    padding: 0 2px 0 20px;
    height: 48px;
    background-color: #2c2c2c;
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
</style>
