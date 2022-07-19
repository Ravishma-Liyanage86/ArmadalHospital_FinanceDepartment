import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './assets/Accountants/css/addSal.css';
import Spinner from 'react-bootstrap/Spinner';
import swal from 'sweetalert';
import Table from 'react-bootstrap/Table';
import Sidebar from './layouts/accountant/sidebar';

class ViewPaySheetRequest extends Component {

    state = {
        viewPayrequest:[],
        loading:true,
            

    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:8000/api/viewPayrequest');
        // console.log(res);

           if(res.data.status === 200)
           {
                     this.setState({
                        viewPayrequest:res.data.viewPayrequest,
                        loading:false,

                     });
           }

    }

   

    render() {
           
        var request_TABLE = "";
        if(this.state.loading)
        {

            request_TABLE = <tr><td  colSpan="17"><h2><Spinner animation="border" variant="primary" />Loading...</h2></td></tr>
        }
        else
        {

            request_TABLE =
            this.state.viewPayrequest.map( (item) => { 

                return(

                   <tr key={item.id}>
                       <td>{item.id}</td>
                       <td>{item.name}</td>
                       <td>{item.select}</td>
                       <td>{item.jobstatus}</td>
                       <td>{item.nic}</td>
                       <td>{item.eid}</td>
                       <td>{item.othrs}</td>
                       <td>{item.time}</td>
                       <td>{item.redate}</td>
                      
                       <td>
                           <Link to={`/AddPaySheet/${item.id}/${item.nic}`} className="btn btn-success btn-md">Add pay sheet</Link>
                       </td>

                       {/* <td>
                           <button type="button" onClick={(e) => this.deleteProcedure(e,item.id)} className="btn btn-danger btn-sm">Delete</button>
                       </td> */}
                   </tr>

                );
            });

        }


        return (



            <div  className="view">
                <Sidebar />
                <div className="container">
                    <h1 className="hp"> Finance Staff       <button className="btn btn-warning btn-md float-end">   <Link to={"/FinanceStaff"}><i className="bar1"> <p>Back</p></i></Link></button></h1>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Staff Salary Procedures
                                        <br/>
                                     
                                    </h4>

                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered table-striped " >
                                        <thead>
                                            <tr>
                                                <th>Pay Sheet Requst ID </th>
                                                <th>Employee's name  </th>
                                                <th>Staff category </th>
                                                <th>Job Status </th>
                                                <th>NIC </th>
                                                <th>Employee ID </th>
                                                <th>Completed OT hours </th>
                                                <th>Time period of required pay sheet </th>
                                                <th>the date request made  </th>
                                                <th>Add Pay Sheet  </th>
                                                


                                            </tr>
                                        </thead>
                                        <tbody>
                                            {request_TABLE}    
                                        </tbody>
                                    </table>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );

    }
}
export default ViewPaySheetRequest;