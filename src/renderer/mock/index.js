import Mock from 'mockjs'

const url = process.env.BASE_API

const login = () => {
  const data = {}
  data.status = true
  return {
    data: data
  }
}

const getInfo = () => {
  const data = {}
  data.roles = 1
  data.name = 'test-user'
  return {
    data: data
  }
}

Mock.mock(`${url}/user/login`, 'post', login)
Mock.mock(`${url}/user/info`, 'get', getInfo)
