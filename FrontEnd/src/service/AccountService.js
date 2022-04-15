import axios from 'axios';

class AccountService {

    deleteUser (userName)
    {
        //make api call for auth
        console.log('api call for register', userName);
        return axios.delete(`http://localhost:8080/api/${userName}`);
    }
}

export default new AccountService();