<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'Topbar'
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  #topbar
    background: #ffffff
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25)
    >.wrapper
      min-width: 1024px
      max-width: 1440px
      margin: 0 auto
      height: 64px
      display: flex
      padding: 16px
      justify-content: space-between
      align-items: center
      .logo
        font-size: 24px
        color: #000
</style>

