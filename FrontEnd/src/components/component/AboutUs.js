import React from "react";
import pic from "../images/team31.jpg";
import intro from "../images/intro.jpg" ;

function AboutUs(){

     return (

     <>
      <header class="w3-display-container w3-content w3-wide justify-content-center" style={{maxWidth:"1500px"}} id="about">
        
      <h1 align="center"><b>Welcome to "Flat&Flatmates"</b></h1>
        <table>
        
          <tr>
            
        <td>
      <img className="" src={pic} alt="Team31" style={{width:"100%" , height:"500px"}}/></td>
      
     <td> <img className="" src={intro} alt="intro" style={{width:"150%" , height:"500px"}}/></td>
     </tr>
     </table>
    <div>
      <p><i>Flat and Flatmates is a platform that makes it possible to rent and find flatmates hasslefree.<br/>
Our mission is to facilitate quick and hassle-free user oriented system for renting a flat  or Finding flatmates according to ones requirements. And thus helping the needful people in facilitating their shift from one city to another  and it also helps users to search flats and flatmates on reasonable price.
And tenants,happy hunting and get in touch with us to let us know how else we can help!</i></p>    
           
        <p></p>
        <p></p>

       </div>
     </header>
    </>

     )
}

export default AboutUs