import request from '@/utils/request'

export function page(name, dept, page, pageSize) {
  return request({
    url: '/subject/page?name=' + name + '&dept=' + dept + '&page=' + page + '&pageSize=' + pageSize,
    method: 'get'
  })
}

export function findAll() {
  return request({
    url: '/subject',
    method: 'get'
  })
}

export function add(subject) {
  return request({
    url: '/subject',
    method: 'post',
    data: subject
  })
}

export function update(dept) {
  return request({
    url: '/subject',
    method: 'put',
    data: dept
  })
}

export function deleteById(id) {
  return request({
    url: '/subject/' + id,
    method: 'delete'
  })
}

export function selectById(id) {
  return request({
    url: '/subject/' + id,
    method: 'get'
  })
}
