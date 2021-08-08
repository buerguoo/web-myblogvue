<template>
    <div>
        <wbc-nav></wbc-nav>
        <div class="container">
            <el-row  :gutter="30">
                <el-col :sm="24" :md="22" style="transition:all .5s ease-out;margin-bottom:30px;">
                    <wbc-edittxt></wbc-edittxt>
                </el-col>
                <!-- <el-col :sm="24"  :md="8" >
                    <wbc-rightlist></wbc-rightlist>
                </el-col> -->
            </el-row>
        </div>
        <wbc-footer></wbc-footer>
    </div>
</template>

<script>
import header from '../components/header.vue'
import footer from '../components/footer.vue'
import temEdit from '../components/temEdit.vue'
    export default {
        name:'Edit',
        data() { //选项 / 数据
            return {

            }
        },
        methods: { //事件处理器

        },
        components: { //定义组件
            'wbc-nav':header,
            'wbc-footer':footer,
            'wbc-edittxt':temEdit
        },
        created() { //生命周期函数

        }
    }
</script>

<style>

</style>