import axios from 'axios';

class RegisterService {

    registerUser (userName, email, password, fullname, contact, roles)
    {
        //make api call for auth
        console.log('api call for register', userName, email, fullname, password, contact,roles);
        return axios.post('http://localhost:8080/api/signup', {
          userName: userName,
          email: email,
          fullname: fullname,
          password: password,
          contact: contact,
          roles: roles,
        });
    }
}

export default new RegisterService();