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
    resume: {
      config: [
        { field: 'profile',icon: 'id' },
        { field: 'contacts',icon: 'phone'},
        { field: 'education',icon: 'book'},
        { field: 'awards',icon: 'cup'},
        { field: 'workHistory', icon: 'work'},
        { field: 'projects',icon: 'heart'},
      ],
      profile:{
        name:'那谁',
        city:'那哪',
        title:'那啥',
        birthday:'1993-08-17'
      },
      contacts: [
        { contact: 'phone', content: '12345678910' },
      ],
      'workHistory': [
        {company: '狗急跳墙责任有限公司', time:'2020-13-32',experience:  `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
我的主要工作如下:
1. 完成既定产品需求。
2. 修复 bug。`},
      ],
      education: [
        { school: '大学', content: '本科' },
      ],
      projects: [
        { name: 'project a',time:'2020-13-32',experience: '文字' },
      ],
      awards: [
        { name: 'awards a', time:'2020-13-32',experience: '奖励' },
      ],

    }
  },
  mutations:{
    initState(state,payload){
      Object.assign(state,payload)
    },
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
      console.log(payload)
      Object.assign(state.user,payload)
    },
    removeUser(state){
      state.user.id=null
      console.log(state.user.id)
    }
  }
})
