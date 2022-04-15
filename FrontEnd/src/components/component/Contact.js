import React, { useState } from "react";

function Contact(){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [commentTextarea,setcommentTextarea] = useState("");

    var handleSubmit = (event) =>{
        event.preventDefault(); //Stop the form default action that is to submit the data and reload the page
        var contact = { //creating JS object of movie data
            name : event.target.name.value,
            email : event.target.email.value,
            commentTextarea : event.target.commentTextarea.value
        }
        console.log(contact);
        console.log(JSON.stringify(contact))
    }

    return(
        
        <div className="row justify-content-center box-height">
            <div className="col-6 align-self-center shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="m-5">
                    <h4><b><p>Get in touch with us</p></b></h4>
                        <div className="mb-3">
                            <label htmlFor="name" className="text-dark">Name</label>
                            <input type="text" className="form-control" name="name" placeholder="Enter your Name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="text-dark">Email</label>
                            <input type="text" className="form-control" name="email" placeholder="Enter your email"/>
                        </div>
                        <div class="form-group">
                            <label htmlFor="commentTextarea">Comments</label>
                            <textarea class="form-control" name="commentTextarea" rows="3"></textarea>
                        </div>
                        <br/>
                        <div className="mb-3 text-center">
                            <button className="btn btn-primary">Send Message</button>
                        </div>
                    </div>
                </form>    
            </div>
        </div>

    )
}

export default Contact