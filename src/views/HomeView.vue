<template>
  <div class="home">
    <!-- 输入框 -->
    <input v-model="searchValue" class="search" @keyup.enter="search(searchValue)"/>
    <!-- 标签 -->
    <div class="tags" v-for="(item,index) in list" :key="'a'+index" @click="sel(index)">{{item.name}}</div>
    <!-- 具体分类 -->
    <div class="type" v-for="(item,index) in type" :key="'b'+index" @click="jump(item.classid)">{{item.name}}</div>
  </div>
</template>

<script>
export default {
  created(){
    this.$axios({
      url:"/api/class",
      method:"get",
      params:{
        appkey:"dbf3ea0c361b0ff4"
      }
    }).then((res)=>{
      this.list=res.data.result
      this.type=res.data.result[0].list.slice(0,10)
    })
  },
  data(){
    return{
      searchValue:"",
      list:[],
      type:[]
    }
  },
  methods:{
    // 请求代理（跨域解决方案）
    search(searchValue){
      this.$router.push("/detail?keyword="+searchValue)
    },
    sel(index){
      this.type=this.list[index].list.slice(0,10)
    },
    jump(classid){
      this.$router.push("/detail?classid="+classid)
    }
  }
}
</script>


<style scoped>
  .search{width: 90%;margin-left: 5%;height: 50px;}
  .tags{display: inline-block;padding: 5px 10px;border-radius: 5px;margin-left: 5px;margin-top: 5px;background-color: antiquewhite;}
  .type{width: 48%;height: 100px;margin-left: 1%;display: inline-block;background-color: aqua;text-align: center;line-height: 100px;margin-top: 10px;border-radius: 5px;}
</style>
