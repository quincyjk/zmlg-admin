import Vue from 'vue'

import 'normalize.css/normalize.css'
import '../assets/styles/element-variables.scss'
import Element from './element-ui'
import '../assets/icons' // 图标组件
import basicContainer from '../components/basic-container'
import VueCropper from 'vue-cropper'
// import '@smallwei/avue/lib/index.css'
// import Avue from '@smallwei/avue'

// Vue.use(Avue)

//注册全局容器
Vue.component('basicContainer', basicContainer)
Vue.use(Element)
Vue.use(VueCropper)
