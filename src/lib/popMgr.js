import Vue from 'vue';
export default {
    createPop: function (popVue) {
        // 你的代码实现
        const ToastComponent = Vue.extend(popVue);
        const instance = new ToastComponent();
        instance.$mount(document.createElement('div'));
        document.body.appendChild(instance.$el);
        instance.open();
    }
}