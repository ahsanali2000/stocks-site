<template>
  <div class="content" style="background:#003366">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-6">
                <select id="products" v-model="companyName" class="form-control form-control-lg">
                    <option value="" disabled selected>Select a Company</option>
                    <option v-for="pro in predictables" :key="pro" :value="pro" >{{ pro }}</option>
                </select>
            </div>
      </div>
      <div class="row justify-content-center m-3">
        <div class="col-4 text-center">
          <b-button v-if="!!companyName" class="btn" style="background:#FFCC00; color: #003366; border:2px solid white" v-on:click="pressed()">Get Forecast</b-button>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-6">
          <div v-if="errorMsg" class="m-5">
                  <div class="border border-danger rounded text-center text-danger">
                    {{ errorMsg }}
                  </div>
          </div>  
        </div>
      </div>
      <div class="row" v-if="companyStocks.length">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
                style="background:#FFCC00"
          >
            <template slot="header">
              <h4 class="card-title text-center m-2" style="font-weight: bold; font-size: 200%; color :#003366" >Stocks Prediction</h4>
            </template>
            <l-table class="table-hover table-striped"
                     :columns="['Company_Name', 'Prediction']"
                     :data="companyStocks">
            </l-table>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Apis from "@/services/apis";
  import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  export default {
    components: {
      LTable,
      Card
    },
    data () {
      return {
        predictables:[],
        errorMsg: "",
        companyName: "",
        companyStocks: []
      }
    },
    async created(){
        const header = {
            'Content-Type': "application/json"
        }
         const result= await Apis.getPredictables({},header);
         this.predictables = result.data
      
    }, 
    
    methods:{
      async pressed(){
        console.log(this.predictables)
        const body = {
          "company_name": this.companyName
        };
        const header = {
            'Content-Type': "application/json"
        }
        try{
            this.companyStocks = (await Apis.getForecast(header, body)).data;
            this.errorMsg = "";
        }catch{
            this.errorMsg = "Something Went Wrong!!!"
        }
        

      }
    }
  }
</script>
<style>
</style>
