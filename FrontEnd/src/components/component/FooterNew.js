import './FooterNew.css';
import React from 'react';
import { Link } from 'react-router-dom';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterNew = () => {


 
    return (

    <>
    <footer class="site-footer">
          <div class="container">
              <div class="row">
                  <div className="col-sm-5 col-md-6 text-start">
                      <h6>About</h6>
                      <p className="text-start">FlatnFlatmates <i> ENDS YOUR SEARCH </i> for the tiresome work of finding a roof to stay in a new city. It enables to find PG/Flats/Rooms as per their requirements and allows the owners to add their property details for finding tenants/flatmates/roommates. Technologies used are React JS along with CSS and Bootstrap for better user interface in front-end and J2EE in backend along with MySQL as database.
                      </p>
                  </div>

                  <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 text-end">
                      <h6>Quick Links</h6>
                      <ul class="footer-links">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/">Contribute</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                        
                  </ul>
              </div>

          </div>
          <hr></hr>
      </div>
      <div class="container">
              <div class="row">
                  <div className="col-md-8 col-sm-6 col-xs-12">
                      <p class="copyright-text text-start">Copyright &copy; 2022 All Rights Reserved by
                        <Link to="/" > FlatnFlatmates</Link>
                      </p>
                  </div>

                  <div class="col-md-4 col-sm-6 col-xs-12">
                      <ul class="social-icons">
                          <li><Link to="https://www.facebook.com/"><FacebookSharpIcon /></Link><i class="fa fa-facebook"></i></li>
                          <li><Link to="https://twitter.com/"><TwitterIcon/></Link><i class="fa fa-twitter"></i></li>
                          <li><Link to="https://www.linkedin.com/"><LinkedInIcon/></Link><i class="fa fa-linkedin"></i></li>
                      </ul>
                  </div>
              </div>
          </div>
          </footer>
    </>
  )
}

export default FooterNew;


