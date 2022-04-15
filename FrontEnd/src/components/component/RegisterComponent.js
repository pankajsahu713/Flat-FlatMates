import React, { Component } from 'react';
import RegisterService from '../../service/RegisterService';

export default class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    userdetails : {
      userName: '',
      email: '',
      fullname: '',
      password:'',
      contact:'',
      roles : ["ROLE_USER"],
    }, register: false,};

    //bind methods
    this.handleChangeDetails = this.handleChangeDetails.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChangeDetails(name) {
    return event => {
      this.setState(({ userdetails }) => ({
        userdetails: { ...userdetails, [name]: event.target.value }
      }));
    };
  }
  //event handlers for login
  handleSubmit(event) {

    event.preventDefault();

    this.setState({ register: true });
    RegisterService.registerUser(this.state.userdetails.userName, this.state.userdetails.email, this.state.userdetails.password, this.state.userdetails.fullname, this.state.userdetails.contact, this.state.userdetails.roles)
      .then((response) => {
        console.log('Registration successfull', response);
        console.log(response.data);
        if(this.state.register)
        {
          
         this.props.history.push('/');
        }
      })
      .catch((error) => {
        console.log('registeration failed ', error.message);
      });
  }

  render() {
    return (
      <>

        <div className="row justify-content-center box-height">
            <div className="col-6 align-self-center shadow-lg">
                <div style={{backgroundColor:"white"}}>
                    <div className="m-5">
                    <h2><b>Register</b></h2>
                        <div className="mb-3">
                            <label htmlFor="userName" className="text-dark">UserName</label>
                            <input type="text" className="form-control" name="userName" value={this.state.userdetails.userName} 
                            onChange={this.handleChangeDetails("userName")} placeholder="Enter user Name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="text-dark">Email</label>
                            <input type="text" className="form-control" name="email" value={this.state.userdetails.email}
                             onChange={this.handleChangeDetails("email")}  placeholder="Enter your email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="text-dark">Password</label>
                            <input type="password" className="form-control" name="password" value={this.state.userdetails.password} 
                            onChange={this.handleChangeDetails("password")} placeholder="Enter password"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fullname" className="text-dark">Fullname</label>
                            <input type="text" className="form-control" name="fullname" value={this.state.userdetails.fullname} 
                            onChange={this.handleChangeDetails("fullname")} placeholder="Full Name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" className="text-dark">Contact</label>
                            <input type="text" className="form-control" name="contact" value={this.state.userdetails.contact} 
                            onChange={this.handleChangeDetails("contact")} placeholder="Enter your mobile no"/>
                        </div>
                        <div className="mb-3 text-center">
                            <button className="btn btn-primary" onClick={this.handleSubmit}>Register</button>
                        </div>
                    </div>
                </div>    
            </div>
        </div>


      </>
    );
  }
}
//separate functional component to render login related  message

// function ValidateComponent(props) {
//   if (!props.login) return null;
//   if (props.auth) return <div>Login Successful</div>;
//   return <div>Login Failed</div>;
// }
