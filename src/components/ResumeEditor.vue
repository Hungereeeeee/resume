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
          <div class="subitem" v-for="(subitem,i) in resume[item.field]">
              <div class="resumeField" v-for="(value,key) in subitem">
                <label>{{key}} </label>
                <input type="text" v-if="key != 'experience'"  :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`,$event.target.value)">
                <textarea v-else :value="value"  @input="changeResumeField(`${item.field}.${i}.${key}`,$event.target.value)"></textarea>
              </div>
              <div class="btn delete" @click="deleteitem(resume[item.field],i,`${item.field}`)">删除</div>
          </div>
          <div class="btn" @click="add($event)">添加</div>
        </div>
        <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
          <label>{{key}}</label>
          <input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`,$event.target.value)">
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
        var  o = this.$store.state.resume[ID][0];

        var newObj = this.clone(o);
        console.log('newObj',Object.create(o))
        this.$store.state.resume[ID].push(newObj)
        this.$store.commit('keep')
      },
      changeResumeField(path,value){
        this.$store.commit('updateResume',{
          path,
          value
        })
      },
      deleteitem(item,i){
        if(item.length>1){
          this.$store.commit('deleteItem',{
            item,
            i
          })
        }
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
      .subitem
        border-bottom : 2px solid lightgray
        padding :10px 5px
        margin-bottom 10px
        .btn
          background-color rgb(217,83,79)
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
      input[type = text]
        margin: 16px 0
        border: 1px solid #ddd
        box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.25)
        width: 100%
        height: 40px
        padding: 0 8px
      textarea
        margin: 16px 0
        border: 1px solid #ddd
        box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.25)
        width: 100%
        height: 40px
        padding: 0 8px
        transition: height 1s
        &:focus
          height : 200px;
  hr
    border: none
    border-top: 1px solid #ddd
    margin: 24px 0
</style>

