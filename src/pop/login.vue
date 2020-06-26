<template>
    <bounced :isshow="showA" @closeDialog="close" :button="2">
        <template v-slot:header>
            <!-- 标题 -->
            <span>标题</span>
        </template>
        <template v-slot:main>
            <!-- 主要内容 -->
            <p>内容</p>
            <input />
        </template>
        <!-- 按钮名称 -->
        <template v-slot:button>提交</template>
        <template v-slot:button-left>取消</template>
        <template v-slot:button-right>确定</template>
    </bounced>
</template>

<script>
import bounced from "../components/bounced.vue";
export default {
    components:{
        bounced: bounced
    },
    data: function(){
        return {
            showA: false
        }
    },
    methods:{
        //弹出提示框方法
        open() {
            this.showA = true;
        },
        //关闭提示框方法
        close() {
            this.showA = false;
            this.$emit('close');
        }
    }
};
</script>