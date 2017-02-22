<template>
  <div id="app">
    <div class="page">
      <header>
        <Topbar></Topbar>
      </header>
      <main>
        <ResumeEditor></ResumeEditor>
        <ResumePreview></ResumePreview>
      </main>
    </div>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'

import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
import icons from './assets/icons'

import store from './store/index'

export default {
  name: 'app',
  store,
  components: {Topbar,ResumeEditor,ResumePreview},
  created(){
    document.body.insertAdjacentHTML('afterbegin',icons)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .page
    /*height: 100vh*/
    display: flex
    flex-direction: column
    background: #EAEBEC
    >main
      flex-grow: 1
      min-width: 1024px
      max-width: 1440px
      margin-top: 16px
      margin-bottom: 16px
      padding: 0 16px
      display: flex
      justify-content: space-between
      width: 100%
      align-self: center

  #resumeEditor
    min-width: 35%
    background: #444

  #resumePreview
    width: 61.666667%
    background: #777

  svg.icon
    height: 1em
    width: 1em
    fill: currentColor
    vertical-align: -0.1em
    font-size: 16px
</style>
