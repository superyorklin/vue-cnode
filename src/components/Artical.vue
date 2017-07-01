<template>
  <div class="container clear">
    <div class="side">
    </div>
    <div class="main" id="artical_panel">
      <h2>{{artical.title}}</h2>
      <div id="artical_tip">
        <span>{{"发布于 " + createTime(artical.create_at)}}</span>
        <span>作者 <router-link :to='{name: "UserRoute",params:{name: artical.author.loginname}}'>{{artical.author.loginname}}</router-link></span>
        <span>{{artical.visit_count+" 次浏览"}}</span>
      </div>
      <div id="artical_main" v-html="artical.content">
      </div>
      <div id="artical_reply">
        <h4>回复区</h4>
        <div v-for="(reply,index) in artical.replies" class="reply_cell">
          <div class="reply_tag">
            <router-link :to='{name: "UserRoute",params:{name: reply.author.loginname}}'>
              <img :src="reply.author.avatar_url">
            </router-link>
            <div class="reply_author">{{reply.author.loginname}}
            </div>
            <div class="reply_time">{{index+1+"楼 "+ createTime(reply.create_at)}}
            </div>
          </div>
          <div v-html="reply.content" class="reply_content">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      artical:{
        title: "",
        create_at: "2017-04-130000",
        author:{
          loginname: ""
        },
        visit_count: '',
        content: '',
      }
    }
  },
  beforeCreate(){
    this.$http({
      url: `https://cnodejs.org/api/v1${this.$route.path}`,
      method: 'get',
    }).then((res) => {
      if(res.data.success === true){
        this.artical = res.data.data;
        this.$parent.authorName = this.artical.author.loginname;
      }else{
        this.artical = 'Sorry, Something wrong happened when getting the remote data';
      }
    })
  },
  methods: {
    createTime(time){
      return String(time).match(/.{10}/)[0];
    }
  }
  
}
</script>

