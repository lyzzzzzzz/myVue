import axios from 'axios'

const instance = axios.create({
  // headers: {
  //   'content-type': 'application/json;charset=UTF-8'
  // },
  baseURL: 'http://172.30.20.122:8929/award',
  timeout: 10000,
  // withCredentials: true
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
  // 在发送请求之前做某事，比如说 设置token
  config.headers['Authorization'] = 'Bearer' + ' eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjMxOTM0MTQ1NzAsInVzZXJfbmFtZSI6IjEwMDYiLCJhdXRob3JpdGllcyI6WyIqIl0sImp0aSI6ImFmNjBjNjAyLWZkMjEtNDFiOS04NWFiLTkzNjg3OTNjNGYxZCIsImNsaWVudF9pZCI6InNlY3VyaXR5LXNlcnZpY2UiLCJzY29wZSI6WyJzZXJ2aWNlIl19.EqJen3bYENeoLQ_or-VpZDGIFTWKsc2yqTR-1cRD4zNWu5rng21Rc0V2dW9HbZp3sD_3J25mqGYQM_NU2xC76ZFsYBWETNwBm5w8ekZJsLxmKgOeUaKWmhHm-OYjU24P5KIbHq8JHshhm1FlyRPNcYk0x2l_gIdSY3rGoisADD4x9yfEjXGRqoHmoQp-5LcKXHmVzutYYxc11NEdLhRCmyIwiE3IMHTwK046a8GmotnbN3g9OQUOYl0aZWzHTLUqpvrmMgZCnrH9ZH6LqxmCLMGR8XUcKEIESXvq1rEjHa8V69rF_dPs_reDKRC1MEViofrazQ_OH38fzi5xYTbdKg';
  return config;
}, error => {
  // 请求错误时做些事
  return Promise.reject(error);
});

// 添加响应拦截器
// instance.interceptors.response.use(response => {
//   // 对响应数据做些事
//   if (response.status === 200) {
//     console.log(response)
//     if (response.data && response.data.data.code === 1) {
//       console.log('成功')
//       response.data.data.value = '我是返回成功' // 在请求成功后可以对返回的数据进行处理，再返回到前台
//     } else {
//       console.log('返回到登录...')
//     }
//   }
//   return response;
// }, error => {
//   return Promise.reject(error.response.data); // 返回接口返回的错误信息
// })

export default instance;