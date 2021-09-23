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
  </div>
</template>
<script>
import Breadcrumb from './components/Breadcrumb'

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
      }
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
  components() {
    Breadcrumb
  },
}
</script>
>
<style lang="scss">
#app {
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
</style>
