var data = {
  a: 1,
  message: 'Hello Vue!'
};

var app = new Vue({
  el: '#app',
  data: data
});

var app2 = new Vue({
  el: '#app2',
  data: data,
  methods: {
    autoplusone: function() {
      data.a = data.a + 1;
    }
  }
});

app2.$watch('a', function(newVal, oldVal) {
  data.message = newVal;
});