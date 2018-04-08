<template>
    <div class="icon-placeholder">
        <h4>正在跳转支付页面，请耐心等待...</h4>
    </div>
</template>
<script>
    import pingpp from 'pingpp-js'
    import queryString from 'query-string'
    export default{
        created () {
            let host = 'http://' + location.host + '/' + ( this.$router.mode=='hash'? '#' : '' )
            this.$http.post('pay/create', {
                id: this.$route.query.id,
                type: this.$route.query.type,
                cancel_url: host + '/register/pay',
                success_url: host+ '/register/pay/success'
            }).then((response) => {
                if (response.body.err == 0) {
                    pingpp.createPayment(response.body.res, (result, err) => {
                        console.log(result)
                        console.log(err)
                    })
                }
            })

        }
    }
</script>