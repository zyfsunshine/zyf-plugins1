import Bounced from './src/bounced.vue'
// 为组件提供 install 安装方法，供按需引入
Bounced.install = function (Vue) {
    Vue.component(Bounced.name, Bounced)
}
// 默认导出组件
export default Bounced;