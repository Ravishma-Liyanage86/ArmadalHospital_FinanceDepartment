import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './assets/Accountants/css/addSal.css';
import Spinner from 'react-bootstrap/Spinner';
import swal from 'sweetalert';
import Table from 'react-bootstrap/Table';
class ViewSalaryProcedure extends Component {

    state = {
        viewProcedure:[],
        loading:true,
            

    }
    

    async componentDidMount() {
        const res = await axios.get('http://localhost:8000/api/viewProcedure');
        // console.log(res);

           if(res.data.status === 200)
           {
                     this.setState({
                        viewProcedure:res.data.viewProcedure,
                        loading:false,

                     });
           }

    }

    deleteProcedure = async (e,id) =>{


        const deleteSalPro = e.currentTarget;
        <Spinner animation="border" variant="primary" />
        deleteSalPro.innerText = "Deleting.......";
        const res = await axios.delete(`http://localhost:8000/api/deleteProcedure/${id}`);
        if(res.data.status === 200)
        {
            deleteSalPro.closest("tr").remove();
            swal({
                title: "Successfuly deleted the Procedure!",
                text: res.data.message,
                icon: "warning",
                button: "ok!",
            });
              
              console.log(res.data.message);
        }
    }

    render() {
           
        var procedure_TABLE = "";
        if(this.state.loading)
        {

            procedure_TABLE = <tr><td  colSpan="17"><h2><Spinner animation="border" variant="primary" />Loading...</h2></td></tr>
        }
        else
        {

            procedure_TABLE =
            this.state.viewProcedure.map( (item) => { 

                return(

                   <tr key={item.id}>
                       {/* <td>{item.id}</td> */}
                       <td>{item.staff_category}</td>
                       <td>{item.basic}</td>
                       <td>{item.ot_rate}</td>
                       <td>{item.work_hrs}</td>
                       <td>{item.day}</td>
                       <td>{item.week}</td>
                       <td>{item.applicable}</td>
                       <td>{item.training}</td>
                       <td>{item.allStaff}</td>
                       <td>{item.EPF}</td>
                       <td>{item.ETF}</td>
                       <td>{item.Sp_bonus}</td>
                       <td>{item.start_date}</td>
                       <td>{item.closing_date}</td>
                       <td>{item.channel_rate}</td>
                       <td>
                           <Link to={`EditProcedure/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                       </td>

                       <td>
                           <button type="button" onClick={(e) => this.deleteProcedure(e,item.id)} className="btn btn-danger btn-sm">Delete</button>
                       </td>
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
                                    <h4>Staff Salary Procedures
                                        <br/>
                                     
                                    </h4>

                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered table-striped " >
                                        <thead>
                                            <tr>
                                                {/* <th>Procedure ID </th> */}
                                                <th>Staff Category  </th>
                                                <th>Basic Salary  </th>
                                                <th>OT Rate  </th>
                                                <th>Number of working hours </th>
                                                <th>hours per day  </th>
                                                <th>hours per week </th>
                                                <th>applicable for Permanent staff  </th>
                                                <th>applicable for Training staff  </th>
                                                <th>applicable for all staff  </th>
                                                <th>EPF rate</th>
                                                <th>ETF rate</th>
                                                <th>Seasonal bonus rate</th>
                                                <th>valid from</th>
                                                <th>vali until</th>
                                                <th>channeling rate</th>
                                                <th>Edit Procedure</th>
                                                <th>Delete Procedure</th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            {procedure_TABLE}    
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
export default ViewSalaryProcedure;