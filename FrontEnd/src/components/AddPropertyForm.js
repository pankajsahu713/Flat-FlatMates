import React, { Component } from 'react';
import AddPropertyService from '../service/AddPropertyService';
import AuthenticationService from '../service/AuthenticationService';

export default class AddPropertyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          flatdetails : {
            areacode: '',
            city: '',
            cost:'',
            desc:'',
            furnishtype:'',
            locality:'',
            pType:'',
            state:'',
            targetDate:new Date,
            type:'',
            //role:'["ROLE_USER"]'
        }, addprop : false };
    
        //bind methods
        this.handleFlatDetails = this.handleFlatDetails.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleFlatDetails(name) {
        return event => {
          this.setState(({ flatdetails }) => ({
            flatdetails: { ...flatdetails, [name]: event.target.value }
          }));
        };
    }

    handleSubmit(event) {
        console.log("sjkdvhcksdbh vjhxdbvdbjhb")
    
        this.setState({ addprop: true });
        console.log(this.state.flatdetails);
        console.log("sjkdvhcksdbh vjhxdbvdbjhb");
       if(AuthenticationService.isUserLoggedIn){
        AddPropertyService.addProperty(this.state.flatdetails )
          .then((response) => {
            console.log('Property added successfully', response);
            console.log(response.data);
            if(this.state.addprop)
            {
             this.props.history.push(`/dashboard`);
            }
          })
          .catch((error) => {
            console.log('cannot add property ', error.message);
          });
      }
    }

render() { 
    return (
        <div className="container">
            <div className="row justify-content-center box-height">
                <div className="col-6 align-self-center shadow-lg">
                    <div class="w3-container w3-padding-32" >
                        <div class="row g-3 justify-content-center">
                            {/* <div class="col-12">
                                <label for="inputEmail4" class="form-label">Flat No</label>
                                <input type="text" class="form-control" id="flatno" placeholder="A3" style={{ maxWidth: "600px" }} />
                            </div> */}
                            <div class="col-12">
                                <label for="inputPincode" class="form-label">Pincode</label>
                                <input type="number" class="form-control" id="inputPincode" value={this.state.flatdetails.areacode} 
                                onChange={this.handleFlatDetails("areacode")} placeholder="411002" style={{ maxWidth: "600px" }} />
                            </div>
                            
                            <div class="col-12">
                                <label for="inputCity" class="form-label">city</label>
                                <input type="text" class="form-control" id="inputCity" value={this.state.flatdetails.city}
                                 onChange={this.handleFlatDetails("city")}   placeholder="city name" style={{ maxWidth: "600px" }} />
                            </div>
                            <div class="col-12">
                                <label for="inputPrice" class="form-label">Cost</label>
                                <input type="number" class="form-control" id="inputPrice" value={this.state.flatdetails.cost}
                                 onChange={this.handleFlatDetails("cost")}   placeholder="10000" style={{ maxWidth: "600px" }} />
                            </div>
                            <div class="col-12">
                                <label for="inputDesc" class="form-label">Description</label>
                                <textarea class="form-control" id="inputDesc" value={this.state.flatdetails.desc}
                                  onChange={this.handleFlatDetails("desc")}  placeholder="Add description" rows="3" style={{ maxWidth: "600px" }} />
                            </div>
                            <div class="col-12">
                                <label for="inputFurType" class="form-label">Furnish-Type</label>
                                <select id="inputFurType" class="form-select form-control" value={this.state.flatdetails.furnishtype} 
                                onChange={this.handleFlatDetails("furnishtype")} style={{ maxWidth: "600px" }}>
                                    <option selected>FURNISHED</option>
                                    <option>SEMI_FURNISHED</option>
                                    <option>UNFURNISHED</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <label for="inputLocality" class="form-label">Locality</label>
                                <input type="text" class="form-control" id="inputLocality" placeholder="Sadar Bazar" 
                                value={this.state.flatdetails.locality} onChange={this.handleFlatDetails("locality")} style={{ maxWidth: "600px" }} />
                            </div>
    
                            <div class="col-12">
                                <label for="inputPreferType" class="form-label">Preference-Type</label>
                                <select id="inputPreferType" class="form-select form-control" value={this.state.flatdetails.pType} 
                                onChange={this.handleFlatDetails("pType")} style={{ maxWidth: "600px" }}>
                                    <option selected>ALL</option>
                                    <option>MALE</option>
                                    <option>FEMALE</option>
                                    <option>FAMILY</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <label for="inputState" class="form-label">State</label>
                                <input type="text" class="form-control" id="inputState" value={this.state.flatdetails.state} 
                                onChange={this.handleFlatDetails("state")} placeholder="Maharashtra" style={{ maxWidth: "600px" }} />
                            </div>
                            <div class="col-12">
                                <label for="inputDate" class="form-label">Target-Date</label>
                                <input type="date" class="form-control" id="inputDate" value={this.state.flatdetails.targetDate} 
                                onChange={this.handleFlatDetails("targetDate")} style={{ maxWidth: "600px" }} />
                            </div>
                            <div class="col-12">
                                <label for="inputPreferType" class="form-label">Preference-Type</label>
                                <select id="inputPreferType" class="form-select form-control" value={this.state.flatdetails.type} 
                                onChange={this.handleFlatDetails("type")} style={{ maxWidth: "600px" }}>
                                    <option selected>PG</option>
                                    <option>ONE_BHK</option>
                                    <option>TWO_BHT</option>
                                    <option>THREE_BHK</option>
                                    <option>FLATMATES</option>
                                </select>
                            </div>
                            <div class="col-12 text-center">
                                <button type="submit" onClick={this.handleSubmit} class="btn btn-primary text-center">Add property</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
}

// this.state.flatdetails.areacode, this.state.flatdetails.city,
//                                        this.state.flatdetails.cost, this.state.flatdetails.desc, this.state.flatdetails.furnishtype,
//                                        this.state.flatdetails.locality, this.state.flatdetails.pType,
//                                        this.state.flatdetails.state, this.state.flatdetails.targetDate, this.state.flatdetails.type