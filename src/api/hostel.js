import request from '@/utils/request'

export function findAll() {
  return request({
    url: '/hostel',
    method: 'get'
  })
}

export function add(hostel) {
  return request({
    url: '/hostel',
    method: 'post',
    data: hostel
  })
}

export function update(hostel) {
  return request({
    url: '/hostel',
    method: 'put',
    data: hostel
  })
}

export function deleteById(id) {
  return request({
    url: '/hostel/' + id,
    method: 'delete'
  })
}

export function selectById(id) {
  return request({
    url: '/hostel/' + id,
    method: 'get'
  })
}
