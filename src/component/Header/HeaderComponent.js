import React, { Component } from 'react';
import header from './header_CABI.png'
import '../../Scorecard.css'
import Button from '@material-ui/core/Button';
import zIndex from '@material-ui/core/styles/zIndex';


class HeaderComponent extends Component{
    constructor(props){
      super(props);
        this.state={
            login:false
        }
    }
   
  
    render(){  
      return(
                <div className="cont">  
                    <Button variant="contained" color="primary" style={{marginTop:"30px",position:"absolute",marginLeft:"1400px"}}> Logout</Button>
                    <img className="header_img" src={header} alt="header" ></img>
                   
                </div>
        );
    }
  }
  
  export default HeaderComponent
  
  
   
  
  