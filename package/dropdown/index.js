import Dropdown from './src/dropdown.vue'
// 为组件提供 install 安装方法，供按需引入
Dropdown.install = function (Vue) {
    Vue.component(Dropdown.name, Dropdown)
}
// 默认导出组件
export default Dropdown;