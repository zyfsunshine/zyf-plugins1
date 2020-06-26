<template>
  <div class="dropdown">
    <div class="typeName">
      <slot name="typeName"></slot>
    </div>
    <div class="trangle"></div>
    <ul class="droplist">
      <slot name="listItem" v-for="item in list" :tex="item.text" :img="item.img"></slot>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["list"]
};
</script>
<style lang="less" scoped>
@borderColor: #d4d2d2;
.dropdown {
  position: relative;
  float: left;
  height: 37px;
  list-style: none;
  font-family: "Microsoft YaHei" !important;
  left: 50%;
  margin-left: -50px;
  .typeName {
    display: block;
    border: 1px solid @borderColor;
    margin: 0 auto;
    padding: 7px 0;
    width: 100px;
    border-radius: 5px;
    img {
      margin-left: 1rem;
    }
    span {
      height: 1.5rem;
      line-height: 1.5rem;
      display: block;
      display: block;
      float: right;
      margin-right: 1rem;
    }
  }
  .trangle {
    width: 0;
    height: 0;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
    border-top: 8px solid transparent;
    border-bottom: 8px solid #5d5b5b;
    margin: 0 auto;
    position: absolute;
    top: 24px;
    left: 50%;
    margin-left: -8px;
    display: none;
  }
  .droplist {
    position: absolute;
    top: 24px;
    padding: 0px;
    display: none;
    width: 100px;
    background-color: #fff;
    border: 1px solid #5d5b5b;
    z-index: 99;
    border-radius: 5px;
    transition: display 2s;
    -webkit-transition: display 2s; /* Safari */
    border: 1px solid @borderColor;
    a {
      font-family: "Microsoft YaHei" !important;
      font-size: 16;
      color: #000;
    }
    a:hover {
      text-decoration: none;
      font-family: "Microsoft YaHei" !important;
      font-size: 16;
      color: #000;
    }
    a:visited {
      text-decoration: none;
      font-family: "Microsoft YaHei" !important;
      font-size: 16;
    }
  }
  .dropitem {
    list-style: none;
    font-size: 15px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    border-radius: 5px;
    word-break: keep-all;
    width: 100%;
    padding: 7px 0;
    a {
      height: 1.5rem;
      line-height: 1.5rem;
      display: block;
      display: block;
      float: right;
      margin-right: 1rem;
    }
  }
  .dropitem:hover {
    background-color: #f1f1f1;
  }
  .dropitem:hover a {
    color: #000;
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
  a {
    text-decoration: none;
  }
  &:hover .droplist {
    display: block;
  }
  &:hover .trangle {
    display: block;
  }
  &:hover {
    height: 173px;
  }
}
</style>