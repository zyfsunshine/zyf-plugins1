import testToast from './toast.vue'
let test = {}
// 方法的第一个参数是传入的Vue，第二个是自定义的插件参数
test.install = function (Vue, options) {
  Vue.prototype.$msg = 'Hello I am test.js'
  Vue.prototype.$myMethod = function (arr) {
    if (arr.length < 0) {
      return false
    } else {
      arr = arr.join('连接你我')
      return arr
    }
  }
  // testPanel.name 组件的name属性
  Vue.component(testToast.name, testToast)
}
 
export default test