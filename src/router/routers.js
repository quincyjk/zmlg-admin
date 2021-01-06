import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layouts'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    meta: { title: '登录', noCache: true },
    component: () => import('@/views/auth/login'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/features/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/features/401'),
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/features/redirect')
      }
    ]
  },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: () => import('@/views/home'),
  //       name: 'Dashboard',
  //       meta: { title: '首页', icon: 'index', affix: true, noCache: true }
  //     }
  //   ]
  // },
  {
    path: '/account',
    component: Layout,
    hidden: true,
    redirect: 'noRedirect',
    children: [
      {
        path: 'setting',
        component: () => import('@/views/account/setting/index'),
        name: 'Setting',
        meta: { title: '个人设置' }
      }
    ]
  },
  {
    path: '/ruanwen',
    component: Layout,
    hidden: true,
    redirect: 'noRedirect',
    children: [
      {
        path: 'media',
        component: () => import('@/views/ruanwen/media'),
        name: 'Media',
        meta: { title: '创建软文发布' }
      },
      {
        path: 'weibo',
        component: () => import('@/views/ruanwen/weibo'),
        name: 'Weibo',
        meta: { title: '创建微博软文发布' }
      },
      {
        path: 'weixin',
        component: () => import('@/views/ruanwen/weixin'),
        name: 'Weixin',
        meta: { title: '创建微信软文发布' }
      },
      {
        path: 'friend',
        component: () => import('@/views/ruanwen/friend'),
        name: 'Friend',
        meta: { title: '创建朋友圈软文发布' }
      },
      {
        path: 'bbs',
        component: () => import('@/views/ruanwen/bbs'),
        name: 'Bbs',
        meta: { title: '创建论坛软文发布' }
      }
    ]
  },
  {
    path: '/media',
    component: Layout,
    hidden: true,
    redirect: 'noRedirect',
    children: [
      {
        path: 'postWeMedia',
        component: () => import('@/views/media/postWeMedia'),
        name: 'PostWeMeida',
        meta: { title: '添加自媒体' }
      },{
        path: 'postWeixinMedia',
        component: () => import('@/views/media/postWeixinMedia'),
        name: 'PostWeixinMedia',
        meta: { title: '添加微信公众号' }
      },{
        path: 'postWeiboMedia',
        component: () => import('@/views/media/postWeiboMedia'),
        name: 'PostWeiboMedia',
        meta: { title: '添加微博账号' }
      },{
        path: 'postFriendMedia',
        component: () => import('@/views/media/postFriendMedia'),
        name: 'PostFriendMedia',
        meta: { title: '添加朋友圈账号' }
      },{
        path: 'mediaQuotationSheet',
        component: () => import('@/views/media/mediaQuotationSheet'),
        name: 'MediaQuotationSheet',
        meta: { title: '批量导入媒体报价表' }
      },{
        path: 'setMediaTop',
        component: () => import('@/views/media/setMediaTop'),
        name: 'SetMediaTop',
        meta: { title: '设置媒体置顶' }
      }
    ]
  },
  {
    path: '/oem',
    component: Layout,
    hidden: true,
    redirect: 'noRedirect',
    children: [
      {
        path: 'applicationAgency',
        component: () => import('@/views/oem/applicationAgency'),
        name: 'ApplicationAgency',
        meta: { title: '申请代理' }
      }
    ]
  },{
    path: '/user',
    component: Layout,
    hidden: true,
    redirect: 'noRedirect',
    children: [
      {
        path: 'apply_income',
        component: () => import('@/views/user/apply_income'),
        name: 'Apply_income',
        meta: { title: '提现到支付宝或银行卡' }
      },{
        path: 'apply_to_myamount',
        component: () => import('@/views/user/apply_to_myamount'),
        name: 'Apply_to_myamount',
        meta: { title: '收益转入平台帐号余额  ' }
      }
    ]
  }
]

export default new Router({
  // mode: 'hash',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
