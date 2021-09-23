<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/news">News</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <Breadcrumb />
    <router-view/>
    <h2>鐵人30抽獎活動</h2>
    <input type="text" v-model.trim.lazy="myname">
    <input type="text" v-model.trim.lazy="mail">
    <p>抽獎人: {{ myname }}</p>
    <p>抽獎人: {{ mail }}</p>
        <!--一開始渲染時把資料帶進去就好，之後就不需要再更新它，
    不只會讓效果套用在元素本身上，連帶它的子層也會套用此效果x。-->
    <div v-once>
    <h2>{{ title }}</h2>
    <p>現在子層也套入了v-once</p>
    </div>
    <p>v-pre這個指令會讓指定元素被忽略</p>
    <h2 v-pre>{{ preTitle }}</h2>
    <!--v-cloak指令只會存在編譯過程中-->
    <div v-cloak>${ item.title }</div>
    <!--v-html直接把html標籤綁入頁面中
    只能對可信任的內容使用v-html，絕不可對「用戶」提供的內容使用v-html，
    不然很容易中「XSS攻擊」
    -->
    <div v-html="ithelp"></div>
    <div>{{youtube}}</div>
    <div class="main">
      <button @click="change = !change">縮放控制器</button>
      <transition name="zoom">
        <div v-if="change" class="ant_man_style"></div>
      </transition>
    </div>
    <div>空汙指數 {{ airPollution | filterData | releaseTime(saveDate) }}</div>
    <h1>父層藏好料</h1>
    <child @hungry="hungry" :dinner="dinner" />
  </div>
</template>
<script>
import Breadcrumb from './components/Breadcrumb'
import child from './components/child'
import * as dayjs from 'dayjs'
import * as axios from 'axios'


const saveDate = dayjs().format('YYYY-MM-DD')
var url='http://localhost:8081/data.json'
axios.get(url)
    .then( (response) => console.log(response))
    .catch( (error) => console.log(error))

export default {
  name:'about',
  data(){
    return {
      myname: '姓名',
      mail:'電子信箱',
      title:'hello world',
      preTitle:'我被下了v-pre',
      myData: {
        myName: 'Adam',
        mail: 'Adam@xxx.com.tw'
      },
      ithelp: '<a target="_black" href="https://ithelp.ithome.com.tw/">it邦幫忙</a>',
      youtube: '<a target="_black" href="https://www.youtube.com/?gl=TW">聽音樂去！</a>',
      change: true,
      airPollution: 152,
      saveDate: saveDate,
      dinner:[],
    }
  },
  watch: {
    myname: {
      handler() {
        alert('請輸入真實姓名')
      },
      //設定在初始時就執行
      immediate: false
    },
    myData: {
      handler() {
         alert('完成資料更新')
      },
      //是否深層監視
      deep: true
    }
  },
  components: {
    child,
    Breadcrumb
    
  },
  methods:{
    hungry(){
      alert('晚餐到了!')
      return this.dinner=['漢堡','薯條','炸雞','可樂']
    }
  },
  filters: {
      filterData(airPollution) {
        return 'AQI：' + airPollution + ' / 時間：'
    },
      releaseTime(saveDate, airPollution) {
        return saveDate + airPollution
    }
  }
}
</script>

<style lang="scss">
#app {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    margin-bottom: 20px;
  }
  .ant_man_style {
    background: url(assets/ant_man.png) no-repeat center center;
    background-size: contain;
    width: 200px;
    height: 200px;
  }
  .zoom-enter, .zoom-leave-to {
    width: 0px;
    height: 0px;
  }
  .zoom-enter-active, .zoom-leave-active {
    transition: width 1s, height 1s;
  }
</style>
