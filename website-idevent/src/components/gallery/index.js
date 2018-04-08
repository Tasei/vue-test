/**
 * Created by peter on 17/3/10.
 */
import Gallery from './gallery.vue'
import Vue from 'vue'
import decamelize from 'decamelize';
const Notice = {}
Notice.newInstance = (properties) => {
    const data = properties || {}
    let props = ''
    Object.keys(data).forEach(key => {
        props += ' :' + decamelize(key, '-') + '=' + key
    })

    let div = document.getElementById('idGallery')
    if (div) {
        div.remove()
    }

    div = document.createElement('div')
    div.id = 'idGallery'
    div.innerHTML = `<gallery ${props}></gallery>`
    document.body.appendChild(div)

    const el = new Vue({
        el: div,
        data: data,
        components: {
            Gallery,
        }
    }).$children[0]

    return el
}


export default {
    open (config) {
        return Notice.newInstance(config)
    },

    close () {
        let div = document.getElementById('idGallery')
        if (div) div.remove()
    }
}
