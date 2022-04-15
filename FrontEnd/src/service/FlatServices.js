// import AuthenticationService from "../service/AuthenticationService";
import axios from 'axios';
class FlatServices {
  getMyFlats(userName) {
    //make api call for auth
    console.log('auth call', userName);
    return axios.get(`http://localhost:8080/users/${userName}/flats`);
  }
    

//     //fetch all todos fro a specific user from backend
//     // by user id
//     getMyFlats(userName) {
//       console.log('api call : fetch falts of '+username);
//       return axios.get(`http://localhost:8080/users/${userName}/flats`);
//     }
// }
// }
}
export default new FlatServices();