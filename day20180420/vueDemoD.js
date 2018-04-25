var Home1 = {
    template: '<h2>Welcome Vue动态组件</h2>'
}

new Vue({
    el: "#app",
    data: {
        currentView: Home1,
        currentView2: 'Home'
    },
    components: {
        Home: {
            template: '<h3>Welcome Vue动态组件</h3>'
        }
    }
})
