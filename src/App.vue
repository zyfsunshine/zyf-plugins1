<template>
  <div>
    <div class="test" @click="openDialog">点我一下,弹出提示弹出框</div>
    <!-- 下拉框 -->
    <dropdown :list="list">
      <!-- 标题内容模板 -->
      <template v-slot:typeName>
        <img src="./assets/view.png" alt />
        <span>查看</span>
      </template>
      <!-- 列表内容模板 -->
      <template v-slot:listItem="slotProps">
       <li class="dropitem"> 
         <img :src="slotProps.img" alt />
         <a href="#"> <span>{{slotProps.tex}}</span></a>
       </li>
      </template>
    </dropdown>
    <button @click="handleClick">点击触发</button>
    <test-toast ref="toast"></test-toast>
     <div class="test" @click="openDialog1">点我一下,弹出提示弹出框</div>
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
  </div>
</template>

 <script>
import popMgr from './lib/popMgr.js';
import login from "./pop/login.vue";
// import dropdown from "./components/dropdown.vue";
export default {
  data() {
    return {
      showA: false,
      //下拉菜单内容
      list: [
        {
          img: "../src/assets/message.png",
          text: " 消息"
        },
        {
          img: "../src/assets/notification.png",
          text: "铃声"
        },
        {
          img: "../src/assets/play.png",
          text: "视频"
        }
      ],
    };
  },
  components: {
    login,
    // dropdown,
  },
  methods:{
    openDialog: function(){
      popMgr.createPop(login);
    },
    openDialog1:function(){
      this.showA=true;
    },
    handleClick(){
      this.$nextTick(()=>{
        this.$refs.toast.toastPlugin('在父组件李触发调用的toast',2000)
      })
    },
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
<style lang="less" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
.test {
  width: 100px;
  background-color: #42b983;
  margin: 30px auto;
}
</style>
