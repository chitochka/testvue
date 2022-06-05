<template>
  <div>
    <table>
      <tbody>


        <tr v-for="(value, key,i) in one" :key="`${i}`">
          <td> {{ `${key}`  }}          </td>
          <td> {{value}}        </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import json from "@/_onlyForDev/data.json";
import datatest from '@/_onlyForDev/datatest.json'

export default {
  data() {
    return {
      data: json,
      one:json[0]
    };
  },
};
</script>

<style scoped>

table {
    border:1px solid black; 
}

td {

    border :1px dotted blue
}

tr td:first-child {
    font: bolt red;
    background: lightgray;
}


</style>