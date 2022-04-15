
// import AddPropertyForm from "./AddPropertyForm";
import pic from "../images/housing2.jpg";
import AuthenticationService from "../../service/AuthenticationService";

import React, { Component } from "react";
// import ShowProperties from "./ShowProperties";


export default class FirstPage extends Component {
   
  constructor(props) {
    super(props);
    this.state = {};
  

    //bind methods
    this.loggedIn = AuthenticationService.isUserLoggedIn();
    this.enterAdminPage = this.enterAdminPage.bind(this);
  }
   

   enterAdminPage = (event) =>{

    event.preventDefault();
        console.log("in admin handler page");

      const userName = AuthenticationService.getUserName();
        console.log(this.userName);
        AuthenticationService.findRole(userName)
        .then((response) => {
            console.log('auth success', response.data);
            AuthenticationService.storeRoleDetails(
               response.data
            );
            console.log(AuthenticationService.getRole());
          
            if(AuthenticationService.getRole() === "[Role(userRole=ROLE_ADMIN)]")
            {
                console.log('before redirect');
               this.props.history.push('/welcomeAdmin');
            }
            else{
                console.log('else part');
                this.props.history.push('/');
            }
        })
          .catch((error) => {
            console.log('auth failed ');
          });   
    }

  render(){
    return (
      <div> 
        <span class="w3-display-container w3-content w3-wide" style={{maxWidth:"1500px"}} id="home">
          <h1 class="center mb-2"><span><b>Your Search ends here...</b></span></h1>
             <div className="row">
             <div className="col-12" >
              { this.loggedIn && (<button className="btn btn-primary" style={{maxWidth:"100px" , maxHeight: "200px"}}
               onClick={this.enterAdminPage}>Enter as Admin</button>)}
             </div></div><br></br>
              <img class="center" src={pic} alt="Flats" style={{width:"90%" , height:"500px"}}/>
        </span>
      </div>
    );
  }
}