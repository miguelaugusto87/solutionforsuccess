<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>


    <h1>Ejemplo de Vuejs con Ionic consumiendo una API</h1>
  <div >
    
  </div>
<h1>JSON</h1>

<ion-item v-for="product in products">
   <ion-title>{{ product.name }} </ion-title>
  <ion-label>{{ product.email }}</ion-label>
  <ion-input></ion-input>
</ion-item>




  </div>  
</template>

<script type="text/javascript">

var urlUser = 'http://jsonplaceholder.typicode.com/users';
export default {
  name: 'app',
  created: function(){
    this.getUsers();
  },
  data () {
    return {
      msg: 'Welcome to My first Vue.js/Ionic Example',
      products: [],      
    }
  }, 
  methods:{
    getUsers: function(){
      this.$http.get(urlUser).then(function (response) {
        this.products = response.data;
        console(response);
      }, function(){
			alert('Error!');
		});
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
