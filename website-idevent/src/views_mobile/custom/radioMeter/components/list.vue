<template>
    <div>
        <p class="help-text" v-html="helpText" v-if="helpText"></p>
        <ul class="list">
            <li v-for="p of goodsList">
                <a href="javascript:;" @click="enterDetail(p)">
                    <div class="img">
                        <img v-if="p.cover" :src="p.cover + '/b200'"/>
                    </div>
                    <div class="content">
                        <h3 class="text-dark font-bold">{{p.name}}</h3>
                        <p>{{p.subhead}}</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: {
            goodsList: Array,
            helpText: {
                type: String,
                default: ''
            }
        },
        methods: {
            enterDetail(goods) {
                this.$parent.goods = goods
                this.$parent.step = "goodsDetail"
            }
        },
    }
</script>
<style lang="less" scoped>
    @size: 62px;
    .help-text{
        padding: 0 20px;
        margin: 0;
    }
    ul.list {
        padding: 0;
        li {
            position: relative;
            border-bottom: 1px solid #dddddd;
            min-height: @size;
            padding: 20px;
            > a {
                display: block;
                color: #666;
            }
        }
        .img {
            width: @size;
            height: @size;
            background-color: #d8d8d8;
            float: left;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-position: center;
        }
        .content {
            margin-left: @size + 10px;
            min-height: @size;
            h3 {
                font-size: 17px;
                margin: 0 0 8px;
                line-height: 1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            p {
                font-size: 13px;
                margin: 0;
            }
        }
    }

    .waiting {
        padding: 20px;
        text-align: center;
        color: #999;
        img {
            max-width: 80%;
            margin-bottom: 10px;
        }
        .register-btn {
            width: 60%;
            margin: 30px auto 0;

            .btn-back {
                color: #224089;
                border-color: #224089;
            }
        }
    }
</style>

