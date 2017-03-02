<template>
  <div class="wrapper">
    <h2>我是子组件的标题</h2>
    <slot>
      只有在没有要分发的内容时才会显示。
    </slot>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name :'mydialog'
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .wrapper
    background-color red
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    width 15em
    height 10em
</style>

