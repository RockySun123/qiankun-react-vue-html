<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div>
    <p>当前属于 <code>{{isQiankun?'微前端':'独立'}}</code>环境</p>
    <p>vuex中用户信息 [用户名:{{$store.state.global.user.name}}]</p>
    <button @click="changeUserInfo">修改用户信息</button>
  </div>
  <router-view/>
</template>

<script>
//$store.state.global.user.name
  // import store from './store'
  export default {
    data(){

    },
    computed:{
      isQiankun:()=>window.__POWERED_BY_QIANKUN__
    },
    methods:{
      changeUserInfo(){
        this.$store.dispatch('global/setGlobalState',{
          user:{
            name:`克林 ${Math.floor(Math.random()*10000000000000000)}`
          }
        })
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
