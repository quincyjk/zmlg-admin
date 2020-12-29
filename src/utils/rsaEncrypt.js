import JSEncrypt from 'jsencrypt/bin/jsencrypt'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCMzfZwOPrh9QSL2sOAfB7XhaeZTRkLQ64hDLY9Xh+/ZdC1QV/FD7amYwoncnj8+gg242OwdkOW43NsQMGSejD0SS/Hlu0Ph9fUV1nwJzLFFd149BBh04J6qPEB8nJgvxMjO7KJEonMcGovBUzK6C8yC2zYD3auiBS0EH5jgkNnIwIDAQAB'

// 加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对需要加密的数据进行加密
}
