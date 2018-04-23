Vue.component('app-button', {
    template: '<button @click="addCounter">{{counter}}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        addCounter: function () {
            this.counter += 1
            this.$emit('add') //报告自己的事件给父组件
        }
    }
})

Vue.component('button-message', {
    template: '<div><input type="text" v-model="message"/><button @click="sendMessage">发送</button></div>',
    data: function () {
        return {
            message: 'test Message'
        }
    },
    methods: {
        sendMessage: function () {
            this.$emit('message', {
                message: this.message
            }) //报告自己的事件给父组件
        }
    }
})

new Vue({
    el: "#app",
    data: {
        total: 0
    },
    methods: {
        addTotal: function () {
            this.total += 1
        }
    }
})

new Vue({
    el: "#app2",
    data: {
        msgs: []
    },
    methods: {
        addMsgs: function (payload) {
            this.msgs.push(payload.message)
        }
    }
})
