<template>
    <div>
        <div class="form-paragraph" v-html="mdText(config.text)"></div>
    </div>
</template>
<script>
import gallery from 'components/gallery'
import marked from "marked"
export default{
    props: {
        config: Object,
    },
    data(){
        return{
            visible: false,
            list: []
        }
    },
    components:{
    },
    mounted() {
        //过滤事件
        let self = this
        $('.form-paragraph').find('a').on('click', function() {
            let url = $(this).attr('href')
            self.list = []
            if(url.indexOf('.jpg') >= 0 || url.indexOf('.jpeg') >= 0 || url.indexOf('.png') >= 0) {
                self.list.push(url)
                self.visible = true
                gallery.open({
                    visible: true,
                    list: self.list
                })
                event.preventDefault()
                event.stopPropagation()
                return false
            }
        })
    },
    methods: {
        mdText(text) {
            return marked(text, {sanitize: true})
        },
        onClose() {
            console.log('12')
            this.visible = false
        }
    }
}
</script>
