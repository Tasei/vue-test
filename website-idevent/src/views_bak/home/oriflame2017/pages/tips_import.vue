<template>
    <div class="mt-container">
        <div class="block">
            <div class="title">重要提醒</div>
            <div>
                <p style="color: crimson"><b style="color: crimson"> 出行期间务必妥善保管好 护照原件及复印件，否则会影响整个行程顺利进行！</b></p>
                <p>
                    1.请务必准备一件手提行李，出行期间随身携带 <b style="color: crimson"> 护照原件及其他相关证照，保存领队或组长的联系方式</b>；
                </p>
                <p>
                    2.抵达罗马后，请按照工作人员要求，在个人行李上挂好<b style="color: crimson">游轮行李条</b>，以防行李遗失；
                </p>
                <p>
                    3.上下游轮听从指挥，<b style="color: crimson">每次请至少提前30分钟</b>至码头准备上船，<b style="color: crimson">游轮不会等待任何一位迟到者</b>。如错过码头登船，请自行安排返程事宜；
                </p>
                <p>
                    4.岸上游览期间，请务必看管好自己的随身物品，留意周围可疑人员；
                </p>
                <p>
                    5.不论是转机、游轮或是岸上观光期间，请务必<b style="color: crimson">有集体和时间观念，不迟到，不乱跑</b>，全程听从导游及带队员工的指挥及安排；
                </p>
                <p>
                    6.下游轮前请切勿将护照原件和其他重要证照打包进行李箱，而应随身携带；

                </p>
                <p>
                    7.不允许整个行程中和会议期间携带任何团队标志的队旗，国旗也只能在观众席中出现，严禁上台接受表彰或分享时携带国旗。
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        created() {
            if (this.$route.query.title) {
                document.title = this.$route.query.title;
            }
        },
        data() {
            return {}
        },
        mounted() {
            this.$store.commit('SPIN');
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style.less";
</style>
