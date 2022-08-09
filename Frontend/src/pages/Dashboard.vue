<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row" >
        <div class="col-12 justify-content-center text-center">
            <h1 style="font-weight: bold; color :gray">Make You Move Wisely</h1>
            <p>We provide the latest stock market along with the prediction of stock prices to help you make your inverstments wisely.</p>
            <p class="mt-5 font-weight-bold">You can also get to know about the history of any company stocks.</p>
            <div class="col-12 text-center">
              <b-button @click="goToHistory()" class="btn font-weight-bold">Stocks History</b-button>
            </div>
            <p class="font-weight-bold mt-4">Current stock values are provided here.</p>
            <div class="col-12 text-center">
              <b-button @click="goToCurrent()" class="btn font-weight-bold">Current Stocks</b-button>
            </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

  export default {
    components: {

    },
    data () {
      return {     }
    },
    methods: {
      goToCurrent(){
        this.$router.push('/current'); 
      },
      goToHistory(){
        this.$router.push('/history'); 
      }
    }
  }
</script>
<style>

</style>
