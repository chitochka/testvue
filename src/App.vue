<template>
  <div>
    <router-view></router-view>

    <div id="docasne">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">login</router-link>
    </div>
  </div>
</template>




<script>
import axios from "axios";
export default {
  created: function () {
    axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout");
        }
        throw err;
      });
    });
  },
};

/*
export default {
    name: 'app',
    computed: {
        alert () {
            return this.$store.state.alert
        }
    },
    watch:{
        $route (to, from){
            // clear alert on location change
            this.$store.dispatch('alert/clear');
        }
    } 
};


*/
</script>

<style>
#docasne {
  position: fixed;
  /* right: 0; */
  left: 0;
  bottom: 20px;
  height: 40px;
  width: 130px;
  /* background: black; */
  color: yellow;
  padding-top: 7px;
  text-align: center;
  opacity: 0.6;
}
#docasne:hover {
  opacity: 1;
  background: black;
}

/************* */
</style>