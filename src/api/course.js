import request from '@/utils/request'

export function page(name, page, pageSize) {
  return request({
    url: '/course/page?name=' + name + '&page=' + page + '&pageSize=' + pageSize,
    method: 'get'
  })
}

export function findAll() {
  return request({
    url: '/course',
    method: 'get'
  })
}

export function add(course) {
  return request({
    url: '/course',
    method: 'post',
    data: course
  })
}

export function update(dept) {
  return request({
    url: '/course',
    method: 'put',
    data: dept
  })
}

export function deleteById(id) {
  return request({
    url: '/course/' + id,
    method: 'delete'
  })
}

export function selectById(id) {
  return request({
    url: '/course/' + id,
    method: 'get'
  })
}

