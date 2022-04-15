import "./dashboard.css";
import React from "react";
import { Link } from "react-router-dom";
import AddPropertyForm from "../AddPropertyForm";

import AuthenticationService from "../../service/AuthenticationService";

import AccountService from "../../service/AccountService";

function Dashboard(props) {
    const userDetails=AuthenticationService.getUserName();
    const [flats,setflats]="";
    const loggedIn = AuthenticationService.isUserLoggedIn();

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
      };


      var deleteMyAccount=(event)=>{
        event.preventDefault();
        console.log("delete my acc" );
        AccountService.deleteUser({userDetails})
          .then((response) => {
            console.log('user deleted', response);

          this.props.history.push("/");
        })
        .catch((error) => {
          console.log('auth failed ', error.message);
        });
    }

      
    // var addPropertyHandler = (event) => {

    //     AuthenticationService.authenticateUser(this.state.userName, this.state.pwd)
    //       .then((response) => {
    //         console.log('auth success', response);
    //         AuthenticationService.storeUserDetails(
    //           this.state.userName,
    //           response.data.jwt
    //         );
    //         this.props.history.push(`/dashboard/${this.state.userName}`);
    //       })
    //       .catch((error) => {
    //         console.log('auth failed ', error.message);
    //       });
    //   }
    

    return (
        <div id="div1" className="row justify-content-center box-height w3-blue-grey">
            <div className="col-6 align-self-center bg-white shadow-lg">
                <form>
                    <div className="m-5">
                    <b><h2>Hello, {userDetails}</h2></b>

                        <h3 className="mb-3">
                            <label htmlFor="userName" className="text-dark">Welcome to your Dashborad !</label>
                        </h3>

                        <h4 className="mb-3">
                            <label htmlFor="userName" className="text-dark">What is on your mind ?</label>
                        </h4>

                        <br/>
                        <div className="row" align="left">
                        <div className="mb-3 text-center ">
                            <button className="btn btn-danger" onClick={deleteMyAccount}>Delete Account</button>
                        </div>
                        </div>

                        <br/>
                        <div className="row">
                        <div className="mb-3 text-center">
                            <button className="btn btn-primary ms-10"><Link to="/addProperty" style={linkStyle}>Add a property</Link></button>
                        </div>
                        </div>

                        <br/>
                        <div className="row">
                        <div className="mb-3 text-center">
                            <button className="btn btn-primary"><Link to="/listProperties" style={linkStyle}>List all properties</Link></button>
                        </div>
                        </div>

                    </div>
                </form>    
            </div>
        </div>
    )
}
export default Dashboard;