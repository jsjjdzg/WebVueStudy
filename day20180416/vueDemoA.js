var app = new Vue({
    el: "#app",
    data: {
        message: '',
        checked: '',
        checkNames: [],
        radio: '',
        select: '',
        selects: [],
        selects2: [],
        selectName: [{
            key: '1',
            name: 'A'
        }, {
            key: '2',
            name: 'B'
        }, {
            key: '3',
            name: 'C'
        }]
    }
})

var app2 = new Vue({
    el: "#app2",
    data: {
        toggle: '',
        a: '123',
        b: '1234',
        selected: '',
        message:''
    }
})