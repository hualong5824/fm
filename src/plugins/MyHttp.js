import axios from 'axios'
const MyHttp = {}
MyHttp.install = function (vue) {
  axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
  vue.prototype.$http = axios
}
export default MyHttp
