import React, { Component,useState } from 'react';
import {withStyles} from '@material-ui/core/styles';
import './assets/Accountants/css/reg.css'
import  Slider from '@material-ui/core/Slider';
import  Typography  from '@material-ui/core/Typography';
import Sidebar from './layouts/accountant/sidebar';
import {Table,TableCell,TableRow }from '@material-ui/core';
 //import {Pie} from 'react-chartjs-2';
import TableDetails from './TableDetails'

const PrettoSlider = withStyles({
  root:{color:'MediumVioletRed', height:10},
  thumb:{height:25,width:25,backgroundColor:'white',border:'3px solid black', marginTop:-9,marginLeft:-9},
  track:{height:10, borderRadius:4},
  rail:{height:10, borderRadius:4},



})(Slider);


function SalaryAdvances(){
  const [pAmount, setpAmount] = useState(2755000);
  const [interest, setintesrest] = useState(7);
  const [duration, setDuration] = useState(147);
  const maxValue= 6000000;
  const intMax= 20;
  const maxDuration =360;


  const intr = interest/1200;
  const emi= duration ? Math.round(pAmount * intr /(1- (Math.pow(1/(1 + intr),duration)))):0;
  const totalAmt = duration * emi;
  var TotalAmountofCredit = Math.round((emi/intr) *(1 - Math.pow((1 + intr),(-duration))));
  const TotalamountofInterest = Math.round(totalAmt - TotalAmountofCredit);

  
  
  
  return(
    <div>
      <Sidebar/>
    <div className="CalApp">
      <h2 className="CalHeading"><u>Salary Advanaces Calculator</u></h2>
      
      <div>
        <Typography gutterBottom><strong>Loan Amount</strong></Typography>
        <PrettoSlider value={pAmount} onChange={(event,vAmt) => {setpAmount(vAmt)}} defaultValue={pAmount} max={maxValue}/>
    
      </div>

      <div>
        <Typography gutterBottom><strong>Interest rate %</strong></Typography>
        <PrettoSlider value={interest} onChange={(event,vInt) => {setintesrest(vInt);}} max={intMax} defaultValue={interest} />
    
      </div>



      <div>
        <Typography gutterBottom><strong>Tenure (months)</strong></Typography>
        <PrettoSlider value={duration} onChange={(event,vOur) => {setDuration(vOur);}} max={maxDuration} defaultValue={duration} />
    
      </div>
      <div className="tre">

        <Table >
          <TableRow>
            <TableCell>
              <TableDetails pAmount={pAmount} totalAmt={totalAmt} interest={interest} duration={duration} emi={emi} TotalamountofInterest={TotalamountofInterest}/>
            </TableCell>
          </TableRow>
        </Table>
      </div>


    </div>





    </div>
  );

}
export default SalaryAdvances;

