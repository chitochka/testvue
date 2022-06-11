<template>
    <span>
    <!-- <template v-if="this.isObject"> 
        <h3>ObjectList</h3>
        <div class="row" v-for="(obj) in data" >
            <div class="col"> 1/2 </div>
            <div class="col"> 2/2 </div>
        </div>
    
    </template> -->
    
    <template v-if="this.isArray"> <div v-for="(item, i) in data" :key="i"> <ArrayList :data="item"></ArrayList> </div> </template>
    <template v-else>
        <ul class="list-group small ">
            <!-- <li class="list-group-item" v-for="(item, i) in data" :key="i">{{item}}</li> -->
            <li class="list-group-item" v-for="(item, i) in data" :key="i">
                <template v-if="Object.getPrototypeOf(item) === Object.prototype">
                    <div v-for="(value,name,idx) in item" :key="idx" class="row py-1">
                        <div class="col-4"> <strong> {{name}} </strong></div>
                        <div class="col-8"> {{value}} </div>
                    </div>
                </template>
                <template v-else> {{item}}</template>
            </li>
        </ul>
    </template>
    </span>
</template>



<script>
export default {
    name:"ArrayList",
    props:["data"],
    computed:{
        isObject: function(){
            if  (!this.data.lenght) return false
            return (
                Object.getPrototypeOf(this.data[0]) === Object.prototype
            )  
        },
        isArray: function(){
            return Array.isArray(this.data[0])
        }
    },
    mounted(){
        // console.log("this.data = ")
        // console.log(this.data)
    }
}
</script>


<style scoped>
    .row {
        border: 1px solid grey;
    }
    
    li {
        background: none;
    }
</style>