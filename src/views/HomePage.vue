<template>
    <div>
        <br>
        <div>
            <button @click="getData"  type="button" class="btn btn-primary"> Vypsat data</button>
            <button type="button" class="btn btn-primary"> Info Uzivatele</button>
            <button @click="logout" type="button" class="btn btn-primary"> Odhlasit se</button>
        </div>
        <hr>
        <div>
            <!-- <h1>Hi {{user.firstName}}!</h1> -->
            <h2>Home Page</h2>
            <p> <!-- <router-link to="/login">Logout</router-link> --></p>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import * as axios from "axios";

export default {
    computed: {
        /*
        user () {
            return this.$store.state.authentication.user;
        },
        users () {
            return this.$store.state.users.all;
        }
        */
    },
    created () {
        // this.$store.dispatch('users/getAll');
    },
    methods: {
        logout: function () {
            this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push('/login')
                })
      },

      getData: function (){
        // const config = {
        //     baseURL: 'https://api.rec.devel.prozeta.net',// ip откуда это берём
        // };
        // config.headers = {'Authorization': `Bearer ${tokenStr}`}
        axios.get('https://api.rec.devel.prozeta.net/data.json')
            .then(resp=>{
                console.log(resp)
                debugger
            })
            .catch(err=>{
                console.log(err)
                debugger
            })
      }
    }
        
};
</script>


<style scoped>
    button {
        margin: 5px 10px;
    }
</style>