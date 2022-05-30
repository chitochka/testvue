<template>
   <div class="form-signin w-100 m-auto">
  <form @submit.prevent="login">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input v-model="username" type="text" class="form-control" id="floatingInput" placeholder="user name">
      <label for="floatingInput">User Name</label>
    </div>

    <div class="form-floating">
      <input  v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>
    <br>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

  </form>
</div>
</template>

<script>
export default {
    data () {
        return {
            username: 'myuseer',
            password: 'zasx',
            submitted: false
        }
    },
    computed: {
        loggingIn () {
            return false
            /*
            return this.$store.state.authentication.status.loggingIn;
            */
        }
    },
    created () {
        // reset login status
        /*
        this.$store.dispatch('authentication/logout');
        */
    },
    methods: {
        login: function() {
        let username = this.username
        let password = this.password

        this.$store.dispatch('login', { username, password })
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
        },
        handleSubmit () {
            /*
            this.submitted = true;
            const { username, password } = this;
            const { dispatch } = this.$store;
            if (username && password) {
                dispatch('authentication/login', { username, password });
            }
            */
        }
    }
};
</script>


<style scoped>

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>