<template>
  <div class="container">
    <div>
      <button type="button" class="btn btn-info">Col 1</button>
    </div>
    <hr />

    <table class="table table-bordered table-hover table-striped">
      
      <thead v-if="thead">
        <tr>
          <th scope="col">#</th>
          <th scope="col" v-show="showed.includes(i)" v-for="(item, i) in data" :key="i">
             sloupec {{ item.index }}
            <button @click="erase(i)" type="button" class="btn btn-outline-danger" aria-label="Close">Smazat </button>
          </th>
        </tr>
      
      </thead>
      <tbody>
        <tr scope="row" v-for="(name, index) in rowNames" :key="`${index}`">
          <th scope="col">{{ `${name}` }}</th>

          <td scope="col" v-show="showed.includes(i)" v-for="(item, i) in data" :key="i">

            <template v-if="(Array.isArray(item[name])  || Object.getPrototypeOf(item[name]) === Object.prototype)  ">
              <ArrayList :data="item[name]"> </ArrayList>
            </template>
            <template v-else>{{item[name]}} </template>  
          
          </td>
        </tr>
      </tbody>

    </table>
    <hr>
   
  </div>
</template>

<script>
// import json from "@/_onlyForDev/data.json";
// import MyTable from "@/components/MyTable.vue";
// import json from "@/_onlyForDev/datatest.json";
import ArrayList from './ArrayList.vue'

export default {
  name: "MyTable",
   props: ["data","thead"],
   components: {
    ArrayList,
  },
  data() {
    return {
      showed : [],
      // data: json,
      // dtest: datatest,
      // hide: false,
      // rowNames:[],
    };
  },
  computed: {
    rowNames: function () {
      /* TODO 
        udelat pres arr.reduce
      */
      const data = this.data;
      let arr = [];
      for (let i = 0; i < data.length; i++) {
        arr = [...new Set([...arr, ...Object.keys(data[i])])];
      }
      return arr;
    },
  },
  methods: {
    erase(index){
      this.showed = this.showed.filter(
          (item)=>{return item != index}
      )
    }
    // toogle() {
    //   this.hide = !this.hide;
    // },
  },
  created() {
    this.showed = this.data.map((item, index)=>{return index})
    console.info('showed = ', this.showed)
  },

  mounted() {
    window.vv = this;
    // console.log("\n\n<<-<<-->>->>  MOUNTED  <<-<<-->>->>  \n");
    // console.log(this.rowNames);
  },
};
</script>

<style scoped>
/* 
  table {  border: 1px solid black;}
  td {  border: 1px dotted blue;}
  tr td:first-child {  font: bolt red;  background: lightgray;} 
*/
.container {
  padding-bottom: 50px;
}

.hidetable .mytable1 {
  display: none;
}
</style>