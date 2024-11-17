import request from '@/utils/request'

export function page(name, gender, begin, end, page, pageSize) {
  return request({
    url: '/tenant?name=' + name + '&gender=' + gender + '&begin=' + begin + '&end=' + end + '&page=' + page + '&pageSize=' + pageSize,
    method: 'get'
  })
}

export function add(tenant) {
  return request({
    url: '/tenant',
    method: 'post',
    data: tenant
  })
}

export function update(hostel) {
  return request({
    url: '/tenant',
    method: 'put',
    data: hostel
  })
}

export function deleteById(id) {
  return request({
    url: '/tenant/' + id,
    method: 'delete'
  })
}

export function selectById(id) {
  return request({
    url: '/tenant/' + id,
    method: 'get'
  })
}

