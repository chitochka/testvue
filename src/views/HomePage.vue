<template>
  <div>
    <div class="container-fluid">
      <div class="row bg-dark">
        <header
          class="
            d-flex
            flex-wrap
            align-items-center
            justify-content-center justify-content-md-between
            py-3
            mb-1
            text-nowrap
          "
        >
          <ul class="nav col-9 justify-content-start mb-md-0">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 active">Vypsat data</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2">Info Uzivatele</a>
            </li>
          </ul>

          <div class="col-3 text-end">
            <button
              @click="logout"
              type="button"
              class="btn btn-outline-danger"
            >
              Odhlasit se
            </button>
          </div>
        </header>
      </div>
   

    <!-- <div class="container"></div> -->
    <div class="row mx-2 px-3">
      <div class="col mx-2 px-3">
        <br />
        <div id="forData">
          <MyTable :data="this.dataJSON" :thead="true"></MyTable>
        </div>
      </div>
    </div>
     </div>
  </div>
</template>

<script>
/* eslint-disable */
import * as axios from "axios";
// import dataJSON from "@/_onlyForDev/datatest.json";
import dataJSON from "@/_onlyForDev/data.json";
// import dataJSON from "@/_onlyForDev/datamy.json";
import MyTable from "@/components/MyTable.vue";

export default {
  data() {
    return {
      dataJSON: dataJSON,
    };
  },
  components: {
    MyTable,
  },
  computed: {},
  created() {
    console.log(dataJSON);
  },
  methods: {
    logout: function () {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },

    getData: function () {
      // const config = {
      //     baseURL: 'https://api.rec.devel.prozeta.net',// ip откуда это берём
      // };
      // config.headers = {'Authorization': `Bearer ${tokenStr}`}
      axios
        .get("https://api.rec.devel.prozeta.net/data.json")
        .then((resp) => {
          console.log(resp);
          debugger;
        })
        .catch((err) => {
          console.log(err);
          debugger;
        });
    },
  },
};
</script>



<style scoped>
#forData{
  overflow: auto;

}
</style>
