Vue.component('app-component', {
    template:'<h2>Test App Component</h2>'
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