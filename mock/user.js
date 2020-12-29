
const tokens = {
  admin: {
    "code": 0,
    "message": "操作成功",
    "user": {
      "userId": 27157,
      "userName": "123",
      "realName": "新型设计人员",
      "avatarPath": "license_file/20200326/f07bc00ff4944052b96b2ae74ba140a9",
      "amount": 89615,
      "userRole": 100000,
      "roles": [
        "ADMIN"
      ],
      "qq": "11495215012",
      "weixinId": "xxx111aa",
      "mobile": "13686791379",
      "mobileIdentify": 1,
      "phone": "123-55114174",
      "email": "123@qq.com",
      "company": "水东有限公司",
      "license": "license_file/20191113/9e10ae89fbd44b05a52e081cb380a3a1",
      "remark": "水水水水",
      "belongTo": "1030426610",
      "income": 0,
      "identifyTime": "2020-10-13 00:26:32",
      "isOemDisplay": true,
      "roleLevel": 300,
      "isBindWechat": false
    },
    "token": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjMiLCJjcmVhdGVkIjoxNjA3MTU5NzIxMzkyLCJqdGkiOiJmNDYxNzk3YWM1ODk0ODA5YjgwOWJiZWZhMDViMjY4ZCJ9.YCP2aL4J1ksa8Cs19iqK1jk9dHjtvQ7zFxNn9H0nZioQsQ-UqgA_rjQ8GxmrzCNZT6iQ0W8AkGH9oIQSQjbnsA"
},
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}
module.exports = [
  // user login
  {
    url: '/vue-element-admin/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },
  // get user info
  {
    url: '/vue-element-admin/user/info\.*',
    type: 'get',
    response: config => {
      const info = users['admin-token']
      // // mock error
      // if (!info) {
      //   return {
      //     code: 50008,
      //     message: 'Login failed, unable to get user details.'
      //   }
      // }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-element-admin/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

]
