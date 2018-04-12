var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue 20180411",
    appID: "appID20180411",
    isDisabled: false,
    seen: true,
    url: "www.baidu.com"
  },
  methods: {
    onSubmit: function() {
      alert("提交之前");
    }
  }
});