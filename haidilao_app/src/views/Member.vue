// 会员页面父组件 负责加载所需数据 Member
<template>
    <div>
        <!-- 在模板中调用子组件 -->
        <!-- 会员 帮助 -->
        <!-- 标题 -->
        <div class="bac">
            <div class="m_t">
                <span class="title">会员</span>
                <a href="" class="help">帮助</a>
            </div>
        </div>
        <!-- 会员 -->
        <Son01 v-if="isLogin==false"></Son01>
        <Member01 v-else></Member01>
        <!-- 链接 -->
        <Son02 v-if="isLogin==false"></Son02>
        <Member02 v-else></Member02>
        <!-- 轮播图 -->
        <Son03></Son03>
        <!-- 捞币可兑多种大礼 -->
        <Son04 v-if="isLogin==false"></Son04>
        <Member04 v-else></Member04>
        <Member05 v-show="isLogin==true"></Member05>
        <!-- 会员须知 常见问题 -->
        <Son05></Son05>
    </div>
</template>
<script>
// 添加路径 Member
// 引入子组件 
import Son01 from '../components/member/Son01'
import Member01 from '../components/member/Member01'
import Son02 from '../components/member/Son02'
import Member02 from '../components/member/Member02'
import Son03 from '../components/member/Son03'
import Son04 from '../components/member/Son04'
import Member04 from '../components/member/Member04'
// 补
import Member05 from '../components/member/Member05'
import Son05 from '../components/member/Son05'
export default {
    data(){
        return {
            isLogin:true
        }
    },
    methods:{

    },
    components:{
        // 注册子组件
        "Son01":Son01,
        "Member01":Member01,
        "Son02":Son02,
        "Member02":Member02,
        "Son03":Son03,
        "Son04":Son04,
        "Member04":Member04,
        "Member05":Member05,
        "Son05":Son05
    }
}
</script>
<style scoped>
    .bac{
        width:100%;height:45px;
        background:#fff;
        position:fixed;
        top:0;
    }
    .m_t{
        margin-top:10px; 
    }
    .title{
        font-size:18px;
        font-weight:700;
        margin-left:150px;
    }
    .help{
        color:#000;
        margin-left:150px;
        font-size:14px;
    }
</style>