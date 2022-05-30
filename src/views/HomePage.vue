<template>
    <div>
        <br>
        <div>
            <button type="button" class="btn btn-primary"> Vypsat data</button>
            <button type="button" class="btn btn-primary"> Info Uzivatele</button>
            <button type="button" class="btn btn-primary"> Odhlasit se</button>
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
      }
    }
        
};
</script>


<style scoped>
    button {
        margin: 5px 10px;
    }
</style>