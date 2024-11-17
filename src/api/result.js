import request from '@/utils/request'

export function page(name, matric, begin, end, page, pageSize) {
  return request({
    url: '/result?name=' + name + '&matric=' + matric + '&page=' + page + '&pageSize=' + pageSize,
    method: 'get'
  })
}

export function add(result) {
  return request({
    url: '/result',
    method: 'post',
    data: result
  })
}

export function update(result) {
  return request({
    url: '/result',
    method: 'put',
    data: result
  })
}

export function deleteById(id) {
  return request({
    url: '/result/' + id,
    method: 'delete'
  })
}

export function selectById(id) {
  return request({
    url: '/result/' + id,
    method: 'get'
  })
}

