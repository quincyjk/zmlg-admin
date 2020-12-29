

module.exports = {
  /**
   * @description 网站标题
   */
  title: '领告营销平台-管理后台',
  /**
   * @description 是否显示 tagsView
   */
  tagsView: true,
  /**
   * @description 固定头部
   */
  fixedHeader: true,
  /**
   * @description 记住密码状态下的token在Cookie中存储的天数，默认1天
   */
  tokenCookieExpires: 1,
  /**
   * @description 记住密码状态下的密码在Cookie中存储的天数，默认7天s
   */
  passCookieExpires: 7,
  /**
   * @description 是否只保持一个子菜单的展开
   */
  uniqueOpened: true,
  /**
   * @description 保存到cookie的token key
   */
  TokenKey: 'LINKGOU-TOEKN',
  /**
   * @description 服务器接收token的header
   */
  TokenHeader: 'X-Token',
  /**
   * @description 请求超时时间，毫秒（默认2分钟）
   */
  timeout: 5000,
  /**
   * @description 是否显示logo
   */
  sidebarLogo: true,
  /**
   * 是否显示设置的底部信息
   */
  showFooter: true,
  /**
   * 底部文字，支持html语法
   */
  footerTxt: 'Copyright© 2010-现在 广州旭云信息科技有限公司版权所有',
  /**
   * 备案号
   */
  caseNumber: '粤ICP备10215729号-1'
}
