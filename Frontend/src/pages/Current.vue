<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-6">
          <input class="form-control" v-model="companyName" placeholder="Company Name" />
        </div>
      </div>
      <div class="row justify-content-center m-3">
        <div class="col-4 text-center">
          <b-button v-if="!!companyName" class="btn" v-on:click="pressed()">Get Current Stocks</b-button>
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
          >
            <template slot="header">
              <h4 class="card-title">Current Stock Values</h4>
            </template>
            <l-table class="table-hover table-striped"
                     :columns="['Company_Name', 'Current', 'High', 'Low', 'Open']"
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
        errorMsg: "",
        companyName: "",
        companyStocks: []
      }
    },
    methods:{
      async pressed(){
        const body = {
          "company_name": this.companyName
        };
        const header = {
            'Content-Type': "application/json"
        }
        try{
            this.companyStocks = (await Apis.getCurrentStocks(header, body)).data;
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
