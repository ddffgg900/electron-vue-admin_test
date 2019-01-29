import Mock from 'mockjs'

// const url = process.env.BASE_API

const login = () => {
  const data = {}
  data.status = true
  data.token = '888888888888'
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

Mock.mock(`/api/user/login`, 'post', login)
Mock.mock(`/api/user/info`, 'get', getInfo)
