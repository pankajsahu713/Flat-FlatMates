import React, { Component } from 'react';
import AuthenticationService from '../../service/AuthenticationService';
import ToDoService from '../../service/ToDoService';
export default class ListProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      mesg: null,
      areaCode: 0
    };
 
    this.refreshList = this.refreshList.bind(this);
    this.handleCode = this.handleCode.bind(this);
  }
  componentDidMount() {
    console.log('comp did mount');
    this.refreshList();
  }
  

  handleCode(event){
    this.setState({areaCode:event.target.value});
    console.log(this.state.areaCode);
  }

  refreshList() {
    //make API call
    ToDoService.fetchAllFlats(this.state.areaCode)
      .then((response) => {
        console.log(response.data);
        this.setState({ flats: response.data });
      })
      .catch((error) => console.log('fetch error : ', error.message));
  }
  render() {
    console.log(this.state.flats);
    return (
      <>
        {this.state.mesg && (
          <div className='alert alert-success'>{this.state.mesg}</div>
        )}
        <h3>Enter area code to search</h3>
        <input type='number' id="code" onChange={this.handleCode} placeholder="Enter area Code"/> 
        <button type="button" class="btn btn-success" onClick={this.refreshList} >Show</button>
        <h3>Property lists</h3>
        <div className='container'>
          <table className='table table-striped'>
            <thead className='table table-dark'>
              <tr>
              <th>ID</th>
                <th>OwnerName</th>
                <th>cost</th>
                <th>Type</th>
                <th>furnished type </th>
                <th>preferance type </th>
                <th>contacts</th>
              </tr>
            </thead>

            <tbody>
              {this.state.flats.map((flat) => (
                <tr key={flat.id}>
                  <td>{flat.id}</td>
                  <td>{flat.ownername}</td>
                  <td>{flat.cost}</td>
                  <td>{flat.type}</td>
                  <td>{flat.furnishtype}</td>
                  <td>{flat.ptype}</td>
                  <td>{flat.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>


          {this.state.flats.map((flat) =>
          
            <div class="container main-section">
              <div class="row center ">
        
                  <div class="col-lg-4 bg-black shadow-lg">
                    <div class="section border bg-white rounded p-2 mb-3 mt-3">
                        <div class="row">
                            <div class="col-lg-12 img-section">
                                <img src="http://nicesnippets.com/demo/re-image6.jpg" class="p-0 m-0 res-ponsive" />
                                <span class="badge badge-danger add-sens p-2 rounded-0">NOW</span>
                            </div>
                            <div class="col-lg-12 sectin-title">
                                <h1 class="pt-2 pb-2">{flat.type}</h1>   
                                {/* //props.desc */}
                            </div>
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="col-lg-2">
                                        <span class="badge badge-success p-2">Rs.{flat.furnishtype}</span><br /> 
                                        {/* //props.cost */}
                                        <span class="glyphicon glyphicon-phone-alt">{flat.pType}</span>    
                                        {/* // props.furnishType */}
                                        <i class="fa-solid fa-bed-front"></i>
                                        <i src="https://img.icons8.com/color/344/bed.png"></i>
                                    </div>
                                    <div class="col-lg-10 text-right">
                                    
                                        <span><i class="fas fa-star">Cost : {flat.cost}</i></span>
                                        <br/>
                                        <span><i class="fas fa-star">Locality : {flat.locality}</i></span>
                                        <span><i class="fas fa-star-half-alt"></i></span><br />
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div class="col-lg-12 section-detail">
                                <p class="ml-2">City : {flat.city}</p> 
                                {/* // props.locality */}
                                <p class="ml-2">Conatct : {flat.contact}</p> 
                                {/* //props.city , props.state, props.areacode, props.pType */}
                            </div>
                            <div class="col-lg-12 pb-2">
                                <div class="row justify-content-center" >
                                    <div class="col-lg-6">
                                        <a href="#" class="btn btn-danger btn-block red btn-sm">Interested ?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>    
          )}
        </div>                    
      </>
    );
  }
}
