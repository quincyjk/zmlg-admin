import request from '@/utils/request'
import { encrypt } from '@/utils/rsaEncrypt'

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function updateInfo(data) {
  return request({
    url: '/user/update_info',
    method: 'post',
    data
  })
}

export function updateMobile(params) {
  return request({
    url: '/user/update_mobile',
    method: 'post',
    params: params
  })
}

export function updatePassword(user) {
  const data = {
    oldPassword: encrypt(user.oldPass),
    newPassword: encrypt(user.newPass)
  }
  return request({
    url: '/user/update_password',
    method: 'post',
    data
  })
}

export function getPayAccounts() {
  return request({
    url: '/pay_accounts',
    method: 'get'
  })
}

export function updatePayAccounts(data) {
  return request({
    url: '/pay_accounts',
    method: 'post',
    data
  })
}

export function getBindQrCode() {
  return request({
    url: '/wx/base/get_bind_qr_code',
    method: 'get'
  })
}
