import axios from 'axios'

const MyHttpServer = {}

MyHttpServer.install = (Vue) => {
  axios.defaults.baseURL = 'http://localhost:9000/'
  //axios.defaults.baseURL = 'http://192.168.10.10:9000/'
  // 服务器部署时需要改成这个请求地址
  Vue.prototype.$http = axios
}
export default MyHttpServer
