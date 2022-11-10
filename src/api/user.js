// import request from '@/utils/request'

// export function login(data) {
//   return request({
//     url: '/vue-admin-template/user/login',
//     method: 'post',
//     data
//   })
// }

// export function getInfo(token) {
//   return request({
//     url: '/vue-admin-template/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: '/vue-admin-template/user/logout',
//     method: 'post'
//   })
// }

import request from '@/utils/request'
/**
 * 登录接口请求的封装
 */
export function login(data) {
  // 返回一个promise对象
  return request({
    method: 'POST',
    url: '/sys/login',
    data
  })
}

export function getInfo(token) {}

export function logout() {}
