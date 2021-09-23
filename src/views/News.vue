<template>
  <div class="news">
    <a v-if="$route.path !='/loging'" href="#">登入</a>
  <div class="box" :class="{ red_color: coloring, round: shape, div_style: div_shape}"></div>
  <!-- class name也能當作字串寫入=> :class="{ 'red_color': coloring, round: shape }"，
  陣列=> :class="[div_style, coloring, shape]"，注意data裡的class name要改為文字屬性，
  同時用的寫法=> :class="[div_style, coloring, { round: shape }]"
  -->
    <template v-if="yes">
      <h3>我學會v-if了！</h3>
      <p>好簡單喔！我馬上就會了！</p>
    </template>
    <h3 v-else>再讓我試一次</h3>
    <ul>
      <li v-if="item1">打掃房間</li>
      <li v-else-if="item2">上網學習vue</li>
      <li v-else-if="item3">到便利商店領包裹</li>
      <li v-else>今天待辦事項都完成了！</li>
    </ul>
     <!-- 
      跟v-if(有條件的渲染)很像的v-show(無條件的渲染)！它的用法跟v-if一樣。
      簡單說，v-show的差別只在它沒有「如果不成立(else)」這個條件！
      更高的初始渲染開銷(簡單說就是：元件切換狀態的速度比較快)，
      因此遇到需要常開關、又沒有條件的需求，當然用v-show比較好 
    -->
    <!--
      @click.prevent=> 阻止瀏覽器預設行為。
      @click.stop=> 阻止點擊事件繼續向父層觸發。
      @click.capture=> 反向觸發事件！讓元件本身(父層)的觸發事件先處理，然後才觸發內部元件(子層)。
      @click.self=> 只觸發event.target(目標事件)為元件本身時。
      @click.once=> 只有在第一次按下時會被觸發，不能重覆觸發。
      @click.native=> 偵聽元件的原生事件。
      -->
    <a href="https://www.google.com.tw/" @click.prevent="prevent">google</a>
    <div @click.capture="father">
      <a @click.capture="child" href="#">capture按鈕</a>
    </div>
    <div @click.self="father">
    <div @click="middle">
      <a @click="child" href="#">self按鈕</a>
    </div>
  </div>
    <h1>小隊搶答積分賽</h1>
    <ul>
        <li>
          <h3>紅隊</h3>
          <button @click="counter1 += 1">加1分</button>
          <p>總分 {{ counter1 }}</p>
        </li>
        <li>
          <h3>藍隊</h3>
          <button @click="counter2 += 1">加1分</button>
          <p>總分 {{ counter2 }}</p>
        </li>
        <li>
          <h3>黃隊</h3>
          <button @click="counter3 += 1">加1分</button>
          <p>總分 {{ counter3 }}</p>
        </li>
    </ul>
  <div>
    <input type="text" value="先點我再點下Enter" @keyup.enter="pop"/>
    <button @click.left="pop">滑鼠左鍵按我</button>
    <input type="text" value="先點我再按下 Ctrl + a" @keyup.ctrl.65="pop2" />
  </div>
  </div>
</template>
<script>
//鍵盤代碼查詢 https://keycode.info/
/*const keyCodes = {
  a: 65,
  b: 66
};
*/
export default {
  name: 'news',
  data(){
    return {
        coloring: true,
        shape: true,
        div_shape: true,
        yes: true,
        item1: false,
        item2: false,
        item3: false,
        counter1: 0,
        counter2: 0,
        counter3: 0,
    }
  },
  methods: {
    prevent(){
      alert('不會觸發連結')
    },
    father() {
        alert('觸發父層')
      },
    child() {
        alert('觸發目標事件按鈕')
    },
    middle() {
      alert('觸發目標事件按鈕')
    },
    pop(){
      alert('完成按下Enter鍵')
    },
    pop2(){
      alert('完成按下 Ctrl + a 鍵')
    }
  }
}
</script>
<style scoped>
  .box{
    border:1px solid #cccccc;
    width: 100px;
    height: 100px;
  }
  .red_color{
    background-color: red;
  }
  .round{
    border-radius: 50%;
  }
</style>