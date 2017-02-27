<template>
  <div id="resumePreview">
    <div id="information">
      <section data-name="profile" v-show="resume.profile">
        <table>
          <tr>
            <td>姓名</td>
            <td> {{resume.profile.name}}</td>
          </tr>
          <tr>
            <td>职位</td>
            <td> {{resume.profile.city}}</td>
          </tr>
          <tr>
            <td>出生日期</td>
            <td> {{resume.profile.birthday}}</td>
          </tr>
          <tr>
            <td>所在城市</td>
            <td> {{resume.profile.city}}</td>
          </tr>
        </table>
      </section>
      <div>
        <section data-name="contacts" v-show="resume.contacts">
          <table>
            <tr v-for="item in resume.contacts">
              <td>{{item.contact}}</td>
              <td v-show="item.content"> {{item.content}} </td>
            </tr>
          </table>
        </section>

        <section data-name="education" v-show="resume.education">
          <table>
            <tr v-for="item in resume.education">
              <td>{{item.school}}</td>
              <td v-show="item.content"> {{item.content}} </td>
            </tr>
          </table>
        </section>
      </div>
    </div>
    <div id="experiences">
      <section data-name="awards" v-show="resume.awards">
        <h2>获奖情况</h2>
        <ol>
          <li v-for="item in resume.awards">
            <h3>{{item.name}}  <p>{{item.time}}</p></h3>
            <p v-show="item.experience">{{item.experience}} </p>
          </li>
        </ol>
      </section>

      <section data-name="workHistory" v-show="resume.workHistory">
        <h2>工作经历</h2>
        <ol>
          <li v-for="item in resume.workHistory">
            <h3>{{item.company}} <p>{{item.time}}</p></h3>
            <p v-show="item.experience">{{item.experience}}</p>
          </li>
        </ol>
      </section>

      <section data-name="projects" v-show="resume.projects">
        <h2>项目经历</h2>
        <ol>
          <li v-for="item in resume.projects">
            <h3>{{item.name}}  <p>{{item.time}}</p></h3>
            <p v-show="item.experience">{{item.experience}}</p>
          </li>
        </ol>
      </section>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'ResumePreview',
    computed:{
      resume(){
        return this.$store.state.resume
      }
    },
    created(){
      console.log(this.resume)
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  #resumePreview
    background: #ffffff
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25)
    color: #333
    line-height : 1.2
    overflow scroll
    *
      box-sizing: border-box; font-variant: normal; font-weight: normal;
    ol
      list-style none
    p
      white-space:pre-line
    #information
      padding: 2em
      &:after
        display : block
        content :''
        clear both
      td
        width : 5em
        font-size 20px;
        &:first-child
          color: #a5adb0
      section[data-name="profile"]
        float left
      div
        float right
    #experiences
      padding: 2em
      background-color : #3a3c40
      section
        margin-bottom:2em
        >h2:first-child
          display: inline-block
          margin-bottom: .5em
          color: #7adde4
      section[data-name="workHistory"],
      section[data-name="projects"],
      section[data-name="awards"]
        li+li
          margin-top : 1em
        li
          color: #a5adb0
          h3
            border-bottom: 1px solid #999; padding-bottom: .3em; margin-bottom: .3em;color : white
            p
              font-size : 14px
              color: gray
              float right
</style>

