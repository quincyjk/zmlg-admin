<template>
  <div class="navbar">
    <div class="navbar-left">
      <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    </div>

    <div class="navbar-center">
      <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    </div>

    <div class="navbar-right">
      <template v-if="device !== 'mobile'">
        <div class="navbar-right-item">
          <search id="header-search" />
        </div>
        <el-tooltip content="颜色" effect="dark" placement="bottom">
          <div class="navbar-right-item hover-effect" style="line-height: 64px;">
            <themePicker id="themePicker" />
          </div>
        </el-tooltip>

        <el-tooltip content="消息通知" effect="dark" placement="bottom">
          <div class="navbar-right-item hover-effect">
            <notice id="notice" />
          </div>
        </el-tooltip>

        <el-tooltip content="主题" effect="dark" placement="bottom">
          <div class="navbar-right-item hover-effect">
            <theme id="theme" />
          </div>
        </el-tooltip>

        <el-tooltip content="全屏缩放" effect="dark" placement="bottom">
          <div class="navbar-right-item hover-effect">
            <screenfull id="screenfull" />
          </div>
        </el-tooltip>
      </template>

      <el-dropdown class="hover-effect">
        <div class="avatar-wrapper">
          <img :src="user.avatarPath ? imgPath + user.avatarPath : Avatar" class="user-avatar" />
          {{ user.userName }}
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/account/setting">
            <el-dropdown-item> 个人设置 </el-dropdown-item>
          </router-link>
          <span style="display: block">
            <el-dropdown-item divided @click.native="logout"> 退出登录 </el-dropdown-item>
          </span>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from './Breadcrumb'
import Hamburger from './Hamburger'
import Screenfull from './Screenfull'
import ThemePicker from './ThemePicker'
import Theme from './Theme'
import Notice from './Notice'
import Search from './HeaderSearch'
import Avatar from '@/assets/images/avatar.png'

export default {
  components: {
    Theme,
    ThemePicker,
    Notice,
    Breadcrumb,
    Hamburger,
    Screenfull,
    Search
  },
  data() {
    return {
      Avatar: Avatar,
      dialogVisible: false
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'device', 'user', 'imgPath']),
    show: {
      get() {
        return this.$store.state.settings.showSettings
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'showSettings',
          value: val
        })
      }
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    logout() {
      this.$confirm('确定注销并退出系统吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('logout').then(() => {
          location.reload()
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  line-height: 50px;
  .navbar-left {
    position: absolute;
    top: 0;
  }

  .hamburger-container {
    height: 100%;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .navbar-center {
    height: 100%;
    padding: 0 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: inherit;
    font-weight: 400;
  }

  .navbar-right {
    position: absolute;
    top: 0;
    right: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    .navbar-right-item {
      position: relative;
      display: inline-block;
      height: 50px;
      margin: 0 10px;
      font-size: 16px;
    }
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
}
.el-popper[x-placement^='bottom'] {
  margin: 0px !important;
}
.hover-effect {
  cursor: pointer;
  transition: background 0.3s;

  :hover {
    background: rgba(0, 0, 0, 0.025);
  }
}

.user-avatar {
  margin: 0 8px 0 5px;
  padding: 2px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  box-sizing: border-box;
  border: 1px solid #eee;
  vertical-align: middle;
}
</style>
