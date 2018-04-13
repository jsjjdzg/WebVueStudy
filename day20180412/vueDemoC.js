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
            this.items.push({ message: 'Too' });
            this.object.fullName = this.object.fullName + "DZG"
        },
        addItem2: function () {
            //app3.$set(app3.object,"fullName",'DZGDZGDZG')
            Vue.set(app3.object, "fullName", 'DZGDZGDZG')
        },
        addItem3: function () {
            app3.object = Object.assign({}, app3.object, {
                firstName: 'JohnDZG',
                lastName: 'DoeDZG',
                age: 301
            })
        }
    }
})

var app4 = new Vue({
    el: "#app4",
    data: {
        keys : [1,2,3,4,5,6]
    },
    methods: {
        even: function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    },
    computed: {
        evenNumbers: function () {
            return this.keys.filter(function (number) {
                return number % 2 === 1
            })
        }
    }
})