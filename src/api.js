 import axios from 'axios'


// export async function getProducts(page){
//     const result = await axios.get('https://api.eposnowhq.com/api/V4/Product',{params: {page}, headers:  {'Authorization':'Basic UDNQVUFONkw3QkZSSlNSWVE3Sk5NRzNDS1pVT1pSVVg6S0NBSFhUMUlWNFlITEw2Qjc5VDFWUkJDN0tET0VFMDQ='}})
//     return result;
// }

// export function allProducts(){    
  
//     axios.get('https://api.eposnowhq.com/api/V4/Product?page=1',{headers: {'Authorization':'Basic UDNQVUFONkw3QkZSSlNSWVE3Sk5NRzNDS1pVT1pSVVg6S0NBSFhUMUlWNFlITEw2Qjc5VDFWUkJDN0tET0VFMDQ='}})
//     .then(response => {
//      return response;
//     })
//     .catch(e => {
//       console.log(e);
//       return e;
//     })    
       
// }


var token = 'Basic UDNQVUFONkw3QkZSSlNSWVE3Sk5NRzNDS1pVT1pSVVg6S0NBSFhUMUlWNFlITEw2Qjc5VDFWUkJDN0tET0VFMDQ=';
var endpointProducts = 'https://api.eposnowhq.com/api/V4/Product?page=1';
var endpointStock = 'https://api.eposnowhq.com/api/V4/ProductStock';

 export function  allProducts(){    
    axios.get(endpointProducts,{headers: {'Authorization':token}})
    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(e => {
      console.log(e)
    })
}
export function allStock(){    
  axios.get(endpointStock,{headers: {'Authorization':token}})
  .then(response => {
    console.log(response);
    this.stocks = response.data;
  })
  .catch(e => {
    console.log(e)
  })
}



