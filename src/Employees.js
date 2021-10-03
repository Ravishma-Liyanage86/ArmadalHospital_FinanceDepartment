import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './assets/Accountants/css/addSal.css';
import Spinner from 'react-bootstrap/Spinner';
import swal from 'sweetalert';
import Table from 'react-bootstrap/Table';


class Employees extends Component {

    state = {
        viewEmployees:[],
        loading:true,
            

    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:8000/api/viewEmployees');
        // console.log(res);

           if(res.data.status === 200)
           {
                     this.setState({
                        viewEmployees:res.data.viewEmployees,
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
            this.state.viewEmployees.map( (item) => { 

                return(

                   <tr key={item.id}>
                       <td>{item.id}</td>
                       <td>{item.name}</td>
                       <td>{item.phone}</td>
                       <td>{item.stafftype}</td>
                       <td>{item.email}</td>
                       
                       
                   </tr>

                );
            });

        }


        return (



            <div  className="view">
                <div className="container">
                    <h1 className="hp"> Finance Staff       <button className="btn btn-warning btn-md float-end">   <Link to={"/FinanceStaff"}><i className="bar1"> <p>Back</p></i></Link></button></h1>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>All employees of Armadal Hospital
                                        <br/>
                                     
                                    </h4>

                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered table-striped " >
                                        <thead>
                                            <tr>
                                                <th>Employee ID </th>
                                                <th>Employee's name  </th>
                                                <th>Phone number </th>
                                                <th>Staff Category </th>
                                                <th>Email address</th>
                                                
                                                


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
export default Employees;