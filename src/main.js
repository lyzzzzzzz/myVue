import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Button,
  Input,
  Form,
  FormItem,
  Table,
  TableColumn,
  Pagination,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import depot from '../src/http/index'
import http from '../src/http/http'

Vue.prototype.$axios = http
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

depot()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
