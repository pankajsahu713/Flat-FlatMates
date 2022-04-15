import axios from 'axios';
import auth from './AuthenticationService';

class AddPropertyService {

    userdetails = auth.getUserName();
    
    addProperty (flatdetails)
    {
        
            console.log('api call for add property', );
            return axios.post(`http://localhost:8080/users/${this.userdetails}/flats`, flatdetails);
    
    }

}

export default new AddPropertyService();