<template id="home">
    <div class="container clear">
        <div class="side"></div>
        <div class="main">
            <div class="cell" v-for="(item,index) in content">
                <router-link :to='{name: "UserRoute",params:{name: item.author.loginname}}'>
                    <img :src="item.author.avatar_url" :title="item.author.loginname">
                </router-link>
                <span class="reply_visit">
                    <span title="回复数">{{item.reply_count | formatReply}}</span>/
                    <span title="点击数">{{item.visit_count | formatVisit}}</span>
                </span>
                <span class="tab">{{item.tab | tabFilter(item.top)}}</span>
                <router-link class="cell_title" :to='{name:"ArticalRoute",params:{id:item.id}}' :title="item.title">{{item.title}}</router-link>
                <div class="stuff">
                    创建于：<span>{{item.create_at | timeFilter}}</span><br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
      return {
          content: []
      };
  },
  created(){
      this.getData();
  },
  mounted(){
      var docTitle = document.querySelectorAll(".cell_title");
      console.log(docTitle);
  },
  methods: {
      getData(){
        this.$http({
            url: 'https://cnodejs.org/api/v1/topics',
            method: 'get',
            params: {
                page: 1,
                limit: 10,
                mdrender: 'false'
            }
        }).then((res) => {
            this.content = res.data.data;
        });
      }
  },
  filters: {
      formatReply: function(value){
          if(value >= 1000){
              return (value/1000).toFixed(1)+'k';
          }else{
              return value;
          }
      },
      formatVisit: function(value){
          if(value >= 100000){
              return (value/10000).toFixed(1)+'w';
          }else{
              return value;
          }
      },
      tabFilter: function(tab,top){
          if(top == true){
              return "置顶";
          }else if(tab === "share"){
              return "分享";
          }else{
              return "提问";
          }
      },
      timeFilter: function(value){
          return String(value).match(/.{10}/)[0];
      }
  }

}
</script>


