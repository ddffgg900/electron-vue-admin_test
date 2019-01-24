import $ from 'jquery'
// import env from '@/env'

export default function ajax (info) {
  return new Promise((resolve, reject) => {
    // console.log(JSON.stringify(info.data))
    $.ajax({
      url: process.env.BASE_API + info.url,
      // url: 'http://' + env.URL + ':18080/v1' + info.url,
      type: info.method,
      data: info.data ? JSON.stringify(info.data) : '',
      // contentType: 'application/json',
      dataType: 'json',
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      success: data => {
        // console.log(data)
        resolve(data)
      },
      error: err => {
        reject(err)
      }
    })
  })
}
