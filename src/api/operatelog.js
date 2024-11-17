import request from '@/utils/request'

export function page(name, page, pageSize) {
  return request({
    url: '/operatelog/page?name=' + name + '&page=' + page + '&pageSize=' + pageSize,
    method: 'get'
  })
}

export function find() {
  return request({
    url: '/operatelog',
    method: 'get'
  })
}
