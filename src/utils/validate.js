export const number = /^\d*$/
/* 协议 */
export const external = /^(https?:|mailto:|tel:)/
/* 网址 */
export const url = /^http[s]?:\/\/.*/
/* 邮箱 */
export const email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
/* 手机号码 */
export const mobile = /^1[0-9]{10}$/
/* 固定电话 */
export const phone = /^([0-9]{3,4}-)?[0-9]{7,8}$/

export function isExternal(path) {
  return external.test(path)
}

export function isURL(value) {
  return url.test(value)
}

export function isEmail(value) {
  return email.test(value)
}

export function isMobile(value) {
  return mobile.test(value)
}

export function isPhone(value) {
  return phone.test(value)
}

export function isNumber(value) {
  return number.test(value)
}

export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/*校验图片格式*/
export function isImage(type) {
  if (!type) {
    return false
  }
  var isJPG = type === 'image/jpeg'
  var isPNG = type === 'image/png'
  var isGIF = type === 'image/gif'
  var isBMP = type === 'image/bmp'
  return isJPG || isPNG || isGIF || isBMP
}

/*校验文件大小是否大于maxSize(MB)*/
export function isSizeLt(size, maxSize = 3) {
  return size / 1024 / 1024 > maxSize
}
