import React from 'react';
import './assets/Accountants/css/Hidebar.css';
import whatsapp from "./images/whatsap.png";
import Tlgrm from "./images/tegrm.png";
import wibr from "./images/wibr.png";
import cct from "./images/ct.png";
import Skp from "./images/skp.png";


function Hidebar(){

    return(

<div id="mySidenav" className="sidenav">
  <a href="https://www.whatsapp.com/" id="whatsap"><img src={whatsapp} width="30" height="30"/></a>
  <a href="https://telegram.org/" id="tegrm"><img src={Tlgrm} width="30" height="30"/></a>
  <a href="https://www.viber.com/" id="wibr"><img src={wibr} width="30" height="30"/></a>
  <a href="https://www.chat.com/" id="ct"><img src={cct} width="30" height="30"/></a>
  <a href="https://www.skype.com/" id="skp"><img src={Skp} width="30" height="30"/></a>
   
</div>

);
}

export default Hidebar;