import axios from 'axios'
import qs from 'qs'

const config = {
    // baseURL : 'http://localhost:8080/auth/realms/mymy/protocol/openid-connect/token',
    baseURL : 'http://192.168.0.25:8080/auth/realms/mymy/protocol/openid-connect/token',
    params :{
        grant_type : 'password',
        client_id : 'demo'
    }
}



/*

username
alexey.latyshev
password
prozetapass

*/
// const config = {
//     baseURL : 'https://auth0.prozeta.net/auth/realms/Recruitment/protocol/openid-connect/token',
//     params :{
//         grant_type : 'password',
//         client_id : 'oauth-proxy-rec'
//     }
//  }




var apiConfig  = {
    baseURL : config.baseURL,
    headers: {
      'Content-Type':'application/x-www-form-urlencoded'
    },
    transformRequest: function (params) {

      console.log({...params,...config.params})
      console.log('\n\n')
      console.log(qs.stringify({...params,...config.params}))
      
      return qs.stringify({...params,...config.params})
    },
  }

  export  const  axiosAuthInstance = axios.create(apiConfig)