Vue.component('app-component', {
    template:'<h2>Test App Component</h2>'
})

Vue.component('child', {
    props: ['message','myMessage'],
    template:'<span>{{message}} - {{myMessage}}</span>'
})

Vue.component('child2', {
    props: ['parentmessage'],
    template: '<span>{{parentmessage}}</span>'
})

Vue.component('child3', {
    props: ['parentmessage1','parentmessage2'],
    template: '<span>{{parentmessage1}} -- {{parentmessage2}}</span>'
})

var appComponent2 = {
    template:'<h3>Test App Component2</h3>'
}

new Vue({
    el: '#app',
    components: {
        'app-component2': appComponent2
    }
})

new Vue({
    el: "#app2",
    components: {
        'app2-component': {
            template: '<button @click="counter += 1">{{counter}}</button>',
            data: function () {
                return {
                    counter:0
                }
            }
        }
    }
})

new Vue({
    el: "#app3"
})

new Vue({
    el: "#app4",
    data: {
        parent: '',
        todo : {
            parentmessage1: "¶¡Õý¸Õ",
            parentmessage2: "¹Ë¶¬ºì",
        }
    }
})