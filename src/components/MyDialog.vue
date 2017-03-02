<template>
  <div class="wrapper">
    <div class="dialog">
      <header>{{title}}
          <span class="close" @click="close">X</span>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name :'mydialog',
    props:['title','visible'],
    methods:{
      close(){
        console.log(1)
        this.$emit('close')
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .wrapper
    background: hsla(0, 0%,0%,0.25)
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    display: flex
    justify-content center
    align-items center
    .dialog
      background: #ffffff
      min-height 4em
      min-width 10em
      >header
        padding: 16px
        display flex
        justify-content space-between
      >main
        padding : 16px
      .close
        cursor : pointer
</style>

