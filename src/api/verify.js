import request from '@/utils/request'
import qs from 'qs'

//获取手机验证码
export function getMobileCode(params) {
  return request({
    url: '/verify/mobile/get_code',
    method: 'get',
    params: params
  })
}
//获取邮箱验证码
export function getEmailCode(params) {
  return request({
    url: '/verify/email/get_code',
    method: 'get',
    params: params
  })
}
