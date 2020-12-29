import request from '@/utils/request'

export function webSiteList(params) {
  return request({
    url: '/vue-element-admin/ruanwen/website',
    method: 'get',
    params
  })
}
