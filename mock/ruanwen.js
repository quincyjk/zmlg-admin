const Mock = require('mockjs')
const List = []
const count = 100
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    display_time: '@datetime',
    channel: '@title(5, 10)',
    platform: '文字链广告',
    address: '综合资讯/全国',
    member: '20',
    agent: '5',
    information: '1',
    publishing: '1',
    weight: '权重0',
    remarks:'123',
    collection:'1',
  }))
}

module.exports = [
  // user login
  {
    url: '/vue-element-admin/ruanwen/website',
    type: 'get',
    response: config => {
       const { importance, type, title, page = 1, limit = 20, sort } = config.query
       let mockList = List.filter(item => {
         if (importance && item.importance !== +importance) return false
         if (type && item.type !== type) return false
         if (title && item.title.indexOf(title) < 0) return false
         return true
       })

       if (sort === '-id') {
         mockList = mockList.reverse()
       }

       const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }

    }
  }

]
