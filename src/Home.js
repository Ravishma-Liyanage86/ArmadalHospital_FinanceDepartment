import React from "react";
import { Link } from "react-router-dom";
import './assets/Accountants/css/home.css'

 import picz from './images/bk123.PNG';


class Home extends React.Component {
    render() {
        return (
            <div className="container">

                <div>

                    <title>About Armadal Hospital</title>

                </div>
                <div className="homebg" >
                    <div class="header">
                        <h1 className='primary'>About Armadal Hospital</h1>
                    </div>

                    
                    <h2><center>WELCOME TO ARMADAL MEDICAL HOSPITAL</center> </h2>
                    <h3><center>Your Trustworthy Medical Partner</center></h3><br />

                    <center>       <img src={picz} />&emsp; </center>
                    <h4><center>We are here to provide patient-centered healthcare with excellence in quality, service and access</center></h4>
                    <br /> <br />   <Link to="/Login">       <button className="homebtn">LOGIN</button></Link>



                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                    
                    </div>
                </div>

                );
    }
    
    
}
 export default Home;
