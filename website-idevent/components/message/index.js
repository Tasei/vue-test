import Message from './message.vue'
import Vue from 'vue'
import decamelize from 'decamelize';
const Notice = {}
Notice.newInstance = (properties, component) => {
    const data = properties || {}
    let props = ''
    Object.keys(data).forEach(key => {
        props += ' :' + decamelize(key, '-') + '=' + key
    })

    console.log(props)


    let div = document.getElementById('id-notice')
    if (div) {
        div.remove()
    }

    div = document.createElement('div')
    div.id = 'id-notice'
    div.innerHTML = `<message ${props}><custom-component></custom-component></message>`
    document.body.appendChild(div)

    if (!component) {
        component = {template: '<div></div>'}
    }

    const el = new Vue({
        el: div,
        data: data,
        components: {
            Message,
            'custom-component': component
        }
    }).$children[0]

    return el
}


export default {

    info (content, duration = 5, onClose = () => {}) {
        new Notice.newInstance({
            content: content,
            okText: false,
            duration: duration,
            onClose: onClose,
            close: false,
            type: 'info'
        })
    },

    warning (content, duration = 0, onClose = () => {}) {
        new Notice.newInstance({
            content: content,
            okText: false,
            duration: duration,
            onClose: onClose,
            close: false,
            type: 'warning'
        })
    },

    success (content, duration = 5, onClose = () => {}) {
        new Notice.newInstance({
            content: content,
            okText: false,
            duration: duration,
            onClose: onClose,
            close: false,
            type: 'success'
        })
    },

    error (content, duration = 0, onClose = () => {}) {
        new Notice.newInstance({
            content: content,
            okText: false,
            duration: duration,
            onClose: onClose,
            close: false,
            type: 'error'
        })
    },

    loading (content, onClose = () => {}) {
        new Notice.newInstance({
            content: content,
            okText: false,
            duration: 0,
            onClose: onClose,
            close: false,
            closeText: false,
            loading: true,
            title: ''
        })
    },


    open (config, component) {
        return Notice.newInstance(config, component)
    },

    destroy () {
        let div = document.getElementById('id-notice')
        if (div) div.remove()
    }
}
