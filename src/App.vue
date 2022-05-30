<template>
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <div>
                    <router-link to="/">Home</router-link>  | 
                    <router-link to="/login">login</router-link>
                </div>
                <!-- <div class="col-sm-6 offset-sm-3"> -->
                    <!-- <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div> -->
                    <router-view></router-view>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>




<script>
import axios from 'axios';
export default {
    created: function () {
        axios.interceptors.response.use(undefined, function (err) {
            return new Promise(function () {
                if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
                    this.$store.dispatch("logout")
                }
                throw err;
            });
        });
    }


}

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