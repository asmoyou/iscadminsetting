<template>
  <section class="container">
    <canvas id="canvas" class="rainBody" ></canvas>
    <div class="textContainer" :style="{top: textTop +'px', left: textLeft + 'px'}">
      <p class="title" @mouseover="startAnimation" @mouseout="stopAnimation"> {{ typedText }}</p>
    </div>
    <router-link to="/adminSettings" class="click">Q</router-link>
  </section>
</template>

<script>
export default {
  name: "loginWelcome",
  mounted() {
    this.drawRain();
    this.startTyping();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  computed: {
    typedText() {
      return this.text.slice(0, this.typedLength);
    },
  },
  data(){
    return {
      text: "Hello, Coder",
      typedLength: 0,
      textTop: 0,
      textLeft: 0,
    }
  },
  methods:{
    startAnimation() {
      //生成-200到200之间的随机数
      this.textTop = (Math.random() - 0.5) * 400;
      this.textLeft = (Math.random() - 0.5) * 400;
    },
    stopAnimation(){
      this.textTop = 0;
      this.textLeft = 0;
    },
    startTyping() {
      const typingInterval = 200;
      setInterval(() => {
        if(this.typedLength < this.text.length){
          this.typedLength++;
        }else{
          this.typedLength = 0;
        }
      }, typingInterval);
    },
    drawRain(){
      // 获取 canvas 元素的宽度和高度,并将宽度和高度设置为屏幕的可用宽度和高度。
      const width = document.getElementById("canvas").width = screen.availWidth;
      const height = document.getElementById("canvas").height = screen.availHeight;
      // 获取 canvas 的绘图上下文
      const ctx = document.getElementById("canvas").getContext("2d");
      // 创建一个大小为 width/10 的数组并填充为 0
      const arr = Array(Math.ceil(width / 10)).fill(0);
      // 创建一个字符串数组,用于存储字符。
      const str = "✧☹︎☠︎☸︎☣︎☢︎☯︎♾♲✰❤︎✦⚛︎☭☮︎⚔︎⚒︎☄︎✵⚰︎☘︎⚘♨︎✞☺︎♘♞☆☃︎★☼☀︎☾◎☽☁︎™Ω℞№ℹ︎❂❁✡︎✣✶✺✷◦◉⦿☒✗☐☞◇☛⚙︎☑︎⌘✘✔︎".split("");
      ctx.font = "10px 优设标题黑";
      function rain() {
        // 设置颜色，并绘制一个全屏的矩形
        ctx.fillStyle = "rgba(0,0,20,0.05)";
        ctx.fillRect(0, 0, width, height);
        // 设置文字的颜色
        ctx.fillStyle = '#00c8aa';
        arr.forEach(function (value, index) {
          // 根据数组的索引值来绘制文字，x 坐标为索引值 * 10，y 坐标为 value + 10。
          ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, value + 10);

          // 从上一次绘制的位置开始，将数组值设置为下一次绘制位置。
          arr[index] = value >= height || value > 8888 * Math.random() ? 0 : value + 10;
        });
      }
      // 每 30 毫秒执行一次 rain() 函数。
      this.timer = setInterval(rain, 30);
    }
  }
}
</script>

<style scoped>

.container{
  display: flex;
  overflow: hidden;
}
.container .rainBody{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
.container .textContainer{
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center
}
.container .title{
  /*position: fixed;*/
  /*top: 50%;*/
  /*left: 50%;*/
  transform: translate(-50%,-50%);
  font-size: 50px;
  color: #00c8aa;
}
.container .click{
  position: fixed;
  right: 10px;
  top: 10px;
  color: black;
}

p {
  position: absolute;
  transition: top 0.3s, left 0.3s;
}

p:hover{
  cursor: pointer;
}
</style>
