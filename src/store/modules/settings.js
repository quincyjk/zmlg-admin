import variables from '@/assets/styles/element-variables.scss'
import defaultSettings from '@/settings'
import Cookies from 'js-cookie'
const cookie_flatform_type = 'cookie_flatform_type'


const { tagsView, fixedHeader, sidebarLogo, uniqueOpened, showFooter, footerTxt, caseNumber } = defaultSettings

const state = {
  themeName: '',
  themeColor: variables.theme,
  showSettings: false,
  tagsView: tagsView,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  uniqueOpened: uniqueOpened,
  showFooter: showFooter,
  footerTxt: footerTxt,
  caseNumber: caseNumber,
  flatform_type:Cookies.get(cookie_flatform_type) ? Cookies.get(cookie_flatform_type) : 1,
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      state[key] = value
    }
  },
  SET_FLATFORM_TYPE: (state, val) => {
  	state.flatform_type = val
  },
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  },
  setFlatformType({
  	dispatch,
  	commit,
  }, val) {
     commit('SET_FLATFORM_TYPE', val)
  	 Cookies.set(cookie_flatform_type, val)
  },
}
const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
