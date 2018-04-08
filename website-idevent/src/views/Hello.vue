<template>
    <div style="padding: 40px;">
        <h1>Hello World</h1>
        <button type="button" class="btn btn-primary btn-lg">下一步</button>
        <button type="button" class="btn btn-primary btn-lg btn-outline">取消</button>
        <button type="button" class="btn btn-warning btn-lg">加入购物车</button>
        <hr/>
        <form class="form-horizontal" role="form">
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="button" class="btn btn-primary btn-lg padding-lg">下一步</button>
                    <button type="button" class="btn btn-primary btn-lg padding-lg">确认订单</button>
                    <button type="button" class="btn btn-primary btn-lg btn-outline padding-lg">取消</button>
                </div>
            </div>
        </form>
        <hr/>
        <h4 class="text-dark font-bold">订单详情</h4>
        <table class="table bordered">
            <thead>
                <tr>
                    <th>标题</th>
                    <th>标题</th>
                    <th>标题</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-dark">更深的颜色</td>
                    <td>正常的颜色</td>
                    <td class="text-gray">更淡的颜色 </td>
                </tr>
                <tr>
                    <td>内容</td>
                    <td>内容</td>
                    <td>内容</td>
                </tr>
                <tr>
                    <td>内容</td>
                    <td>内容</td>
                    <td>内容</td>
                </tr>
            </tbody>
        </table>
        <p class="help-text"><small class="text-gray">*以上价格仅供参考，以实际下单生成支付金额为准</small></p>
        <form class="form-inline" role="form">
            <div class="form-group">
                <label class="sr-only">Email</label>
                <p class="form-control-static">email@example.com</p>
            </div>
            <div class="form-group">
                <label for="inputPassword2" class="sr-only">Password</label>
                <input type="text" class="form-control input-sm" id="inputPassword2" placeholder="数量">
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }
    }
</script>
