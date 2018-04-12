var app = new Vue({
    el: "#app",
    data: {
        ok:true
    }
})

var app2 = new Vue({
    el: "#app2",
    data: {
        input: "username"
    },
    methods: {
        change: function () {
            this.input = this.input === "username"?"Email":"username";
        }
    }
})

var app3 = new Vue({
    el: "#app3",
    data: {
        parentItem : 'Name',
        items: [{ message: 'Foo' }, { message: 'Too' }],
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    },
    methods: {
        addItem: function () {
            this.items.push({message:'Too'})
        }
    }
})