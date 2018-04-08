<template>
    <div class="i-countdown" id="countdown">
    </div>
</template>
<script>
    import randomstring from "randomstring"
    import 'jquery-countdown'
    export default{
        props: {
            id: {
                type: String,
                default: "#countdown-" + randomstring.generate(6)
            },
            final: {
                type: [Date, String],
                default: '2016/12/31'
            },
            format: {
                type: String,
                default: '%D天 %H时%M分%S秒'
            },
            onFinish: {
                type: Function,
                default: () => {}
            }
        },
        components:{

        },
        mounted () {
            let self = this
            if (this.final) {
                $('#countdown').countdown(self.final, function(event) {
                    $(this).html(event.strftime(self.format));
                }).on('finish.countdown', function() {
                    self.onFinish()
                });
            }
        },
        methods: {
            getId() {
				return "countdown-" + (this.id ? this.id : randomstring.generate(6));
			}
        }
    }
</script>
<style lang="less" scoped>
    .i-countdown {
        display: inline-block;
    }
</style>
