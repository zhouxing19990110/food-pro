<template>
    <div>
        <div v-for="(item,index) in list" :key="index">
            <div>
                <img :src="item.pic">
                <h3>{{item.name}}</h3>
                <p>{{item.content}}</p>
                <h3>原材料</h3>
                <div v-for="(i,idx) in item.material" :key="'a'+idx">
                    {{i.mname}}:{{i.amount}}
                </div>
                <h3>烹饪步骤</h3>
                <div v-for="(i,idx) in item.process" :key="'b'+idx">
                    {{idx+1}}.{{i.pcontent}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[]
            }
        },
        created(){
            if(this.$route.query.classid != undefined){
                this.$axios({
                url:"/api/byclass",
                method:"get",
                params:{
                    appkey:"dbf3ea0c361b0ff4",
                    classid:this.$route.query.classid,
                    start:0,
                    num:10
                }
                }).then(res=>{
                    this.list=res.data.result.list
                })
            }else{
                this.$axios({
                url:"/api/search",
                method:"get",
                params:{
                    keyword:this.$route.query.keyword,
                    num:10,
                    appkey:"dbf3ea0c361b0ff4"
                }
                }).then(res=>{
                    this.list=res.data.result.list
                })
            }    
        }
    }
</script>

<style scoped>

</style>