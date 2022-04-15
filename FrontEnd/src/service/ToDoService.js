import axios from 'axios';
class ToDoService {
  //fetch all todos fro a specific user from backend
  fetchAllToDos(userName) {
    console.log('api call : fetch all');
    return axios.get(`http://localhost:8080/users/${userName}/todos`);
  }

  fetchAllFlats(areaCode) {
    console.log('api call : fetch all');
    return axios.get(`http://localhost:8080/users/flat/search/${areaCode}`);
  }

  // addProperty (userName,data)
  //   {

  //           console.log('api call for add property' );
  //           return axios.post(`http://localhost:8080/users/${userName}/flats`, data); 
  //   }
  
 
}
export default new ToDoService();
