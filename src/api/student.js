import request from '@/utils/request'

export function page(name, gender, begin, end, page, pageSize) {
  return request({
    url: '/student?name=' + name + '&gender=' + gender + '&begin=' + begin + '&end=' + end + '&page=' + page + '&pageSize=' + pageSize,
    method: 'get'
  })
}

export function add(student) {
  return request({
    url: '/student',
    method: 'post',
    data: student
  })
}

export function update(course) {
  return request({
    url: '/student',
    method: 'put',
    data: course
  })
}

export function deleteById(id) {
  return request({
    url: '/student/' + id,
    method: 'delete'
  })
}

export function selectById(id) {
  return request({
    url: '/student/' + id,
    method: 'get'
  })
}

