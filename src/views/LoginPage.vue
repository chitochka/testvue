<template>
<div class="wrap">

  <div class="form-signin w-100 mx-auto mb-5">
    <form @submit.prevent="login">
      <h1 class="h3 mb-3 fw-normal">Prihlaste se, prosim!</h1>

      <div class="form-floating">
        <input  v-model="username" type="text" class="form-control" id="floatingInput" placeholder="Uzivatelske jmeno" />
        <label for="floatingInput">Uzivatelske jmeno</label>
      </div>

      <div class="form-floating">
        <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Heslo" />
        <label for="floatingPassword">Heslo</label>
      </div>
      <br />

      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Prihlasit se
      </button>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "myuseer",
      password: "zasx",
    };
  },
  computed: {
    loggingIn() {
      return false;
      /*
            return this.$store.state.authentication.status.loggingIn;
            */
    },
  },
  created() {
    // reset login status
    /*
        this.$store.dispatch('authentication/logout');
        */
  },
  methods: {
    login: function () {
      let username = this.username;
      let password = this.password;

      this.$store
        .dispatch("login", { username, password })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>


<style scoped>
.wrap {
    text-align: center;
    display: flex;
    align-items: center;
    background-color: rgb(221, 221, 221);
    
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

}

.form-signin {
  max-width: 450px;
  padding: 35px 15px;
  background-color: #a8a7a7;
  box-shadow: 0 0 5px 2px #636262
  ;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin #floatingInput {
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