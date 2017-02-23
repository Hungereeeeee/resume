import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    selected: 'profile',
    resume: {
      config: [
        { field: 'profile',icon: 'id' },
        { field: 'workHistory', icon: 'work'},
        { field: 'education',icon: 'book'},
        { field: 'projects',icon: 'heart'},
        { field: 'awards',icon: 'cup'},
        { field: 'contacts',icon: 'phone'},
      ],
      profile:{
        name:'那谁',
        city:'那哪',
        title:'那啥',
        birthday:'1993-08-17'
      },
      'workHistory': [
        {company: '狗急跳墙责任有限公司', content:  `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
我的主要工作如下:
1. 完成既定产品需求。
2. 修复 bug。`},
//         {company: '鸡飞狗跳公司', content:  `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
// 我的主要工作如下:
// 1. 完成既定产品需求。
// 2. 修复 bug。`},
      ],
      education: [
        { school: '大学', content: '本科' },
        // { school: '高中' },
      ],
      projects: [
        { name: 'project a', content: '文字' },
        // { name: 'project b', content: '文字' },
      ],
      awards: [
        { name: 'awards a', content: '奖励' },
        // { name: '牛噻' },
      ],
      contacts: [
        { contact: 'phone', content: '12345678910' },
        // { contact: 'qq', content: '12345678' },
      ],
    }
  },
  mutations:{
    switchTab(state,payload){
      state.selected = payload
    },

  }
})
