<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="actions">
        <a class="button primary" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
        <MyDialog title="注册" :visible="signUpDialogVisible" v-show="signUpDialogVisible" @close="signUpDialogVisible = false">
          我就是slot内容
        </MyDialog>
        <button class="button primary">保存</button>
        <button class="button">预览</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import MyDialog from './MyDialog'

  export default {
    name:'Topbar',
    components:{MyDialog},
    data(){
      return{
        signUpDialogVisible:false
      }
    }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  #topbar
    background: #ffffff
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25)
    >.wrapper
      min-width: 1024px
      max-width: 1440px
      margin: 0 auto
      height: 64px

    >.wrapper
      display: flex
      padding: 0 16px
      justify-content: space-between
      align-items: center
      .logo
        font-size: 24px
        color: #000
      .button
        width:72px
        height: 32px
        border: none
        cursor: pointer
        font-size: 18px
        background: #ddd
        color: #222
        text-decoration none
        display inline-flex
        justify-content center
        align-items center
        vertical-align center
        &:hover
          box-shadow: 1px 1px 1px hsla(0,0,0,0.50)
        &.primary
          background: #02af5f
          color: #fff
</style>

