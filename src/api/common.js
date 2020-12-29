import request from '@/utils/request'
import qs from 'qs'

//获取导航菜单
export function getMenus() {
  return request({
    url: '/vue-element-admin/common/menus',
    method: 'get'
  })
}

export function upload(url, file) {
  var data = new FormData()
  data.append('file', file)
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
  }
  return request.post(url, data, config)
}

export function initData(url, params) {
  return request({
    url: url + '?' + qs.stringify(params, { indices: false }),
    method: 'get'
  })
}

export function download(url, params) {
  return request({
    url: url + '?' + qs.stringify(params, { indices: false }),
    method: 'get',
    responseType: 'blob'
  })
}
