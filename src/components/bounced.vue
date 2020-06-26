<template>
  <div class="bounced" v-if="isshow">
    <div class="bounce">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="main">
        <slot name="main"></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
      <div class="button1" v-bind:style="{'display':button ? 'block':'none'}">
        <button @click="closeMyself">
          <slot name="button"></slot>
        </button>
      </div>
      <div class="button2" @click="chooseOne" v-bind:style="{'display':button ? 'none':'block'}">
        <button id="cancel">
          <slot name="button-left"></slot>
        </button>
        <button id="certain">
          <slot name="button-right"></slot>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["isshow", "button"], //button用来决定有几个按钮,true为1个，false为两个
  methods: {
    closeMyself() {
      this.$emit("closeDialog");
    },
    chooseOne() {
      console.log(event.target.id);
      return new Promise((resolve, reject) => {
        if (event.target.id === "certain") {
          this.$emit("closeDialog");
          resolve("成功");
        } else {
          this.$emit("closeDialog");
          reject(error);
        }
      })
        .then(() => {
          //点击确定后需要完成的操作代码写在这里
        })
        .catch(() => {
          //点击取消后需要完成的操作代码写在这里
        });
    }
  },
  mounted() {},
  created() {}
};
</script>
<style lang="less" scoped>
.bounced {
  width: 20rem;
  height: 10rem;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -10rem;
  margin-top: -5rem;
  z-index: 999;
  border: 1px solid #000;
  border-radius: 1.5rem;
  background-color: #fff;
  .header {
    float: left;
    margin-left: 1rem;
    margin-top: 1rem;
  }
  .main {
    margin: 0 auto;
    clear: both;
    text-align: center;
  }
  .button1 {
    float: right;
    margin-right: 1rem;
    margin-top: 1rem;
    button {
      border-radius: 5px;
      background-color: #fff;
      padding: 5px 10px;
    }
  }
  .button2 {
    float: right;
    margin-right: 1rem;
    margin-top: 1rem;
    button {
      border-radius: 5px;
      background-color: #fff;
      padding: 5px 10px;
    }
  }
}
</style>