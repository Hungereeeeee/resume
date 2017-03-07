import Vuex from 'vuex'
import Vue from 'vue'
var objectPath = require("object-path")

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    selected: 'profile',
    user:{
      id:'',
      username:''
    },
    resumeConfig: [
      { field: 'profile', icon: 'id', keys: ['name','city', 'title', 'birthday']},
      { field: 'contacts', icon: 'phone' ,type: 'array',  keys: ['contact', 'content'] },
      { field: 'education', icon: 'book',type: 'array',  keys: ['school', 'details'] },
      { field: 'awards', icon: 'cup' ,type: 'array',  keys: ['name', 'details'] },
      { field: 'workHistory', icon: 'work', type: 'array', keys: ['company', 'details'] },
      { field: 'projects', icon: 'heart',type: 'array',  keys: ['name', 'details']  },
    ],
    resume:{}
  },
  mutations:{
    switchTab(state,payload){
      state.selected = payload
      localStorage.setItem('resumer',JSON.stringify(state))
    },
    keep(state){
      localStorage.setItem('resumer',JSON.stringify(state))
    },
    updateResume(state,{path,value}){
      objectPath.set(state.resume,path,value)
      localStorage.setItem('resumer',JSON.stringify(state))
    },
    deleteItem(state,{item,i}){
      item.splice(i,1)
      localStorage.setItem('resumer',JSON.stringify(state))
    },
    setUser(state,payload){
      Object.assign(state.user,payload)
    },
    removeUser(state){
      state.user.id=''
    },
    initState(state,payload){
      state.resumeConfig.map((item)=>{
        if(item.type === 'array'){
          //state.resume[item.field] = [] // 这样写 Vue 无法监听属性变化
          Vue.set(state.resume,item.field,[])
        }else{
          Vue.set(state.resume,item.field,{})
          item.keys.map((key)=>{
            Vue.set(state.resume[item.field],key,'')
          })
        }
      })
      Object.assign(state,payload)
    },
    addResumeSubfield(state,{field}){
      let empty={}
      state.resume[field].push(empty)
      state.resumeConfig.filter((i)=> i.field === field)[0].keys.map((key)=>{
        Vue.set(empty,key,'')
      })
    }
  }
})
