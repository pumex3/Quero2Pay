/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable prettier/prettier */
import axios from 'axios'


 function getAdress(cep){

   const result = axios.get(`https://viacep.com.br/ws/${cep}/json/`)

   return result
}

export default getAdress





 
   




