<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>


    <h1>Consumiendo la API EposNow</h1>

  <h1>PRODUCTS</h1>

  <ion-item>  
    <ion-label><h2>Product Name</h2></ion-label>
    <ion-label><h2>In Stock</h2></ion-label>
  </ion-item>

  <ion-item v-for="product in products">
    
    <ion-label>{{ product.Name }}</ion-label>
    <ion-label>{{getProductStock(product.Id) }}</ion-label>
  </ion-item>



  </div>  
</template>

<script type="text/javascript">
import axios from 'axios';
import {allProducts} from './api';
import {allStock} from './api';

var urlUser = 'http://jsonplaceholder.typicode.com/users';

var token = 'Basic UDNQVUFONkw3QkZSSlNSWVE3Sk5NRzNDS1pVT1pSVVg6S0NBSFhUMUlWNFlITEw2Qjc5VDFWUkJDN0tET0VFMDQ=';
var endpointProducts = 'https://api.eposnowhq.com/api/V4/Product?page=1';
var endpointStock = 'https://api.eposnowhq.com/api/V4/ProductStock';

export default {
  name: 'app',
  created: function(){
   this.fetchProducts();
   this.fetchProductsStocks();
  },
  data () {
    return {
      msg: 'Welcome to Solutions For Success',
      products: [], 
      stocks: [],
           
    }
  }, 
  methods: {
    fetchProducts: function(){        
        axios.get(endpointProducts,{headers: {'Authorization':token}})
          .then(response => {
            console.log(response);
            this.products = response.data;
          })
          .catch(e => {
            console.log(e)
          })       

      },
    fetchProductsStocks: function(){   
     axios.get(endpointStock,{headers: {'Authorization':token}})
          .then(response => {
            console.log(response);
            this.stocks = response.data;
          })
          .catch(e => {
            console.log(e)
          })
    
      },
    getProductStock(productId){      
        for (let index = 0; index < this.stocks.length; index++) {
          var stock = this.stocks[index];
          if(stock.ProductId == productId){
              return stock.ProductStockBatches[0].CurrentStock;
          }     
        }
        return 0;
      }
  },

    
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
