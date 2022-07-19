import React from "react";
import {Table,TableCell,TableHead,TableRow }from '@material-ui/core';
import './assets/Accountants/css/reg.css'
import { Tab } from "bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
function TableDetails(props){

    return(
         <Table style={{width:'100%',border: '2px solid #CCC'}} aria-label="simple-table">
           <TableHead>
               <TableRow>
                   <TableCell className="ETableCellText"><strong>Loan Amount</strong></TableCell>
                   <TableCell className="ETableCellValt"><strong>Rs.</strong>{props.pAmount}</TableCell>
               
               
               </TableRow>
               <TableRow>
                   <TableCell className="ETableCellText"><strong>Interest %</strong></TableCell>
                   <TableCell className="ETableCellValt">{props.interest}</TableCell>
               
               
               </TableRow>
               <TableRow>
                   <TableCell className="ETableCellText"><strong>Tenure (months)</strong></TableCell>
                   <TableCell className="ETableCellValt">{props.duration}</TableCell>
               
               
               </TableRow>
               <TableRow>
                   <TableCell className="ETableCellText"><strong>Loan(monthly)</strong></TableCell>
                   <TableCell className="ETableCellValt"><strong>Rs.</strong>{props.emi}</TableCell>
               
               
               </TableRow>
               <TableRow>
                   <TableCell className="ETableCellText"><strong></strong>Total interest</TableCell>
                   <TableCell className="ETableCellValt"><strong>Loan Amount</strong>{props.TotalamountofInterest}</TableCell>
               
               
               </TableRow>
               <TableRow>
                   <TableCell className="ETableCellText"><strong>Total payment</strong><br/>(Loan Amount + Interest)</TableCell>
                   <TableCell className="ETableCellValt"><strong>Rs.</strong>{props.totalAmt ? props.totalAmt: 0}</TableCell>
               
               
               </TableRow>

              
           </TableHead>


         </Table>
    )


}

export default TableDetails;