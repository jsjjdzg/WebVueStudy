var app = new Vue({
  el: "#app",
  data: {
      message: "DZG",
      firstname: "Martin",
      lastname:"Infinity"
    },
  computed: {
    reversedMessage: function() {
        return this.message.split('').reverse().join('');
      },
      fullname: {
          get: function () {
              return this.firstname + " " + this.lastname;
          },
          set: function (newValue) {
              var names = newValue.split(" ");
              this.firstname = names[0];
              this.lastname = names[names.length - 1]
          }
      }
    },
    methods: {
        reverseFullname: function () {
            this.fullname = this.fullname.split('').reverse().join('');
        }
    }
});

var watch = new Vue({
    el: "#watch",
    data: {
        question: "",
        answer: "我不能在你提问前回答问题"
    },
    watch: {
        question: function (newQ, oldQ) {
            this.answer = "等待您的输入...";
            this.getAnswer();
        }
    },
    methods: {
        getAnswer: function () {
            if (this.question.indexOf("?") === -1) {
                this.answer = "请输入问号以表示问完问题"
                return
            }
            this.answer = "我不知道..."
        }
    }
});