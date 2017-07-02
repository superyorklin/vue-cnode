<template>
  <div class="container clear">
    <div class="side">
    </div>
    <div class="main">
      <div class="back"><router-link :to='{name: "Home"}'>回首页</router-link></div>
      <div class="user_introduce">
        <img :src="userInfo.avatar_url">
        <span class="user_name">{{userInfo.loginname}}</span>
        <ul>
          <li><i class="icon_score"></i><span>{{userInfo.score+" 积分"}}</span></li>
          <li><i class="icon_git"></i><span>{{userInfo.githubUsername}}</span></li>
          <li><i class="icon_regtime"></i><span>注册时间 {{userInfo.create_at | timeFormat}}</span></li>
        </ul>
      </div>
      <div class="topic_reply">
        <p class="title">最近参与的话题</p>
        <div v-for="(item,index) of userInfo.recent_replies" class="topic_cell">
          <div v-if='index < 4'>
            <router-link :to='{name: "UserRoute",params:{name: item.author.loginname}}' class="topic_img">
              <img :src='item.author.avatar_url' :title='item.author.loginname'>
            </router-link>
            <router-link :to='{name: "ArticalRoute",params:{id:item.id}}'>
              <p class='userTitle'>{{item.title}}</p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="topic_reply">
        <p class="title">最近创建的话题</p>
        <div v-for="(item,index) of userInfo.recent_topics" class="topic_cell">
          <div v-if='index < 4'>
            <router-link :to='{name: "UserRoute",params:{name: item.author.loginname}}' class="topic_img">
              <img :src='item.author.avatar_url' :title='item.author.loginname'>
            </router-link>
            <router-link :to='{name: "ArticalRoute",params:{id:item.id}}'>
              <p class='userTitle'>{{item.title}}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userInfo:{
        create_at: '2017-03-20'
      }
    }
  },
  created(){
    this.$http({
      url: `https://cnodejs.org/api/v1${this.$route.path}`,
      method: 'get'
    }).then((res) => {
      this.userInfo = res.data.data;
    }).catch((res) =>{
      console.log(res);
    })
  },
  filters: {
    timeFormat(time){
      return String(time).match(/.{10}/)[0].replace(/.{2}/, '').replace(/[T]/, ' ');
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.$http({
      url: `https://cnodejs.org/api/v1${to.path}`,
      method: 'get',
    }).then((res) => {
      this.userInfo = res.data.data;
    }).catch((res) => {
      console.log('UserCom.vue: ', res);
    });
    next();
  },
}
</script>