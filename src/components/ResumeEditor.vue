<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <li v-for="(item,index) in resume.config" :class = "{active: item.field === selected}" @click = "selected = item.field">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.config" v-show="item.field === selected">
        <div v-if="resume[item.field] instanceof Array" :id="item.field">
          <div class="subitem" v-for="subitem in resume[item.field]">
            <div class="resumeField" v-for="(value,key) in subitem">
              <label>{{key}}</label>
              <input type="text" :value="value"  @input="subitem[key] = $event.target.value">
            </div>
          </div>
          <div class="btn" @click="add($event)">添加</div>
        </div>
        <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
          <label>{{key}}</label>
          <input type="text" :value="value" @input="resume[item.field][key] = $event.target.value">
        </div>
      </li>
    </ol>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'ResumeEditor',
    computed:{
      selected:{
        get(){
          return this.$store.state.selected
        },
        set(value){
          return this.$store.commit('switchTab',value)
        }
      },
      resume(){
        return this.$store.state.resume
      }
    },
    methods:{
      clone:function(obj){
        if(!obj) return;
        var newObj ={};
        for(var key in obj){
          newObj[key] = obj[key];
        }
        return newObj;
      },
      add:function(e){
        let ID = e.target.parentNode.id;
        let o = this.$store.state.resume[ID][0];
        let newObj = this.clone(o);
        this.$store.state.resume[ID].push(newObj)
        console.log(this.$store.state.resume[ID])
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  #resumeEditor
    background: #fff
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25)
    display:flex
    flex-direction:row
    >nav
      width: 80px
      background: black
      color: white
      >ol
        >li
          height: 48px
          display: flex
          justify-content : center
          align-items: center
          margin-top: 16px
          margin-bottom: 16px
          &.active
            background : white
            color : black
          svg.icon
            width: 24px
            height: 24px
    >.panels
      flex-grow: 1
      overflow : scroll
      >li
        padding:24px
      .btn
        font-size:20px
        text-align:center
        line-height:32px
        width:72px
        height:32px
        margin: 0 auto
        border-radius: 5px
        cursor:pointer
        color: #fff
        background: #1f2126
        &:hover
          color: #1f2126;
          background: #fff;
          border: 2px solid #1f2126;
    ol
      list-style : none

    .resumeField
      >label
        display: block
      input[type=text]
        margin: 16px 0
        border: 1px solid #ddd
        box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.25)
        width: 100%
        height: 40px
        padding: 0 8px
  hr
    border: none
    border-top: 1px solid #ddd
    margin: 24px 0
</style>

