var app = new Vue({
    el: "#app",
    data: {
        active: true,
        hasError: true
    }
})

var app2 = new Vue({
    el: "#app2",
    data: {
        active: "active2",
        hasError: "hasError2",
        isActive: true
    }
})

var app3 = new Vue({
    el: "#app3",
    data: {
        app3Style: {
            color: "red",
            fontSize:"20px"
        }
    }
})