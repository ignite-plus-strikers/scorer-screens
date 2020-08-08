import '../App.css'
import React, { Component } from 'react';

class Footer extends Component{
    constructor(props){
      super(props);
        this.state={
            
        }
    }
   
  
    render(){  
      return(
                <div className = "footer">  
                     <footer className="main-footer">
                    
                        <div className="address">
                         Cricket Association for the blind in India<br/>
                         CA:39,15th Cross,16th Main<br/>
                         Sector 4,HSR Layout<br/>
                         Bengaluru-560102,India

                        </div>
                        <div className="contact_us">
                          Contact Us<br/>
                          info@samarthanam.org<br/>
                          kumar@samarthanam.org<br/>
                          +91 8025721444/9922
                        </div>

                        <div className="rights">
                        &copy;2020 Samarthanam Trust.All rights reserved
                        </div>
                        
                        
                    </footer>
                </div>
        );
    }
  }
  
  export default Footer;