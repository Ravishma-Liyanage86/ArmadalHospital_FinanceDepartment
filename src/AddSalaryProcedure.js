import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './assets/Accountants/css/addSal.css'
import bh from'./images/ft7.jpg';

class AddSalaryProcedure extends Component {

    state = {
        staff_category:'',
        basic: '',
        ot_rate: '',
        work_hrs: '',
        day: '',
        week: '',
        applicable: '',
        training: '',
        allStaff: '',
       
        EPF: '',
        ETF: '',
        Sp_bonus: '',
        start_date: '',
        closing_date: '',
        channel_rate: '',
        
        error_list:[],

    }
    
    handleInput = (e) => {
        this.setState({

            [e.target.name]: e.target.value
        });



    }
    

    
   
    saveProcedure = async (e) => {

        e.preventDefault();
        const res = await axios.post('http://localhost:8000/api/storeSalaryProcedureRequest', this.state,);
        if (res.data.status === 200) {
            //console.log(res.data.message);
            
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                button: "ok!",
            });
            
            this.setState({
                staff_category:'',
                basic: '',
                ot_rate: '',
                work_hrs: '',
                day: '',
                week: '',
                applicable: '',
                training: '',
                allStaff: '',
                EPF: '',
                ETF: '',
                Sp_bonus: '',
                start_date: '',
                closing_date: '',
                channel_rate: '',

            });
        }
        else
        {
              this.setState({

                 error_list: res.data.validate_error,
              }) 
        }

    }

    render() {
        return (
            <div className="container">

                <h4 className="text-center">Payment calculation procedure of the staff</h4>
                <br/>
                <button className="btn btn-warning btn-md float-end">   <Link to={"/FinanceStaff"}><i className="bar1"> Back</i></Link></button>
                {/* {
                display_errors.map((item) =>{
                   return( <p>item</p>)

                }) 

            
            } */}

                <div className="card">


                    <p className="title">About me</p>
                    <p>An Accountant</p>

                </div>
                

                <form onSubmit={this.saveProcedure} >

                 <br/>



                    <table >
                        <thead>
                            <tr>
                                <th>
                                    <div className=" frOne">

                                        <div className="form-group row">
                                            <br />
                                            <label className="col-sm-4 col-form-label">Staff Category which you are going to edit the payment procedure</label>
                                            <div className="col-sm-6">
                                                <input type="text" name="staff_category" onChange={this.handleInput} value={this.state.staff_category} className="form-control" />
                                                <span className="text-warning">{this.state.error_list.staff_category}</span>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-4 col-form-label">Basic Salary</label>
                                            <div className="col-sm-6">
                                                <input type="text" name="basic" onChange={this.handleInput} value={this.state.basic} className="form-control" />
                                                <span className="text-warning">{this.state.error_list.basic}</span>
                                            </div>
                                        </div>

                                        <br />

                                        <div className="form-group row">
                                            <label className="col-sm-4 col-form-label"> OT Rate</label>
                                            <div className="col-sm-6">
                                                <input type="text" name="ot_rate" onChange={this.handleInput} value={this.state.ot_rate} className="form-control" />
                                                <span className="text-warning">{this.state.error_list.ot_rate}</span>
                                            </div>
                                        </div>
                                        <br />

                                        <div className="form-group row">
                                            <label className="col-sm-4 col-form-label">Number of hours should be considered as Working hours</label>
                                            <div className="col-sm-6">
                                                <input type="text" name="work_hrs" onChange={this.handleInput} value={this.state.work_hrs} className="form-control" />
                                                <span className="text-warning">{this.state.error_list.work_hrs}</span>
                                                <br />

                                                <div style={{ paddingLeft: 10 }}>
                                                <input name="day" onChange={this.handleInput} value={this.state.day} className="form-check-input" type="checkbox" id="gridCheck1" />
                                                <label className="form-check-label" >per day </label>
                                                 </div>
                                                <div style={{ paddingLeft: 10 }}>
                                                    <input name="week" onChange={this.handleInput} value={this.state.week} className="form-check-input" type="checkbox" id="gridCheck2" />
                                                    <label className="form-check-label" >per week</label>
                                                </div>
                                                <br />


                                            </div>
                                        </div>


                                        <br />
                                        <div className="row">
                                            <legend className="col-form-label col-sm-4 pt-0">These changes applicable for</legend>
                                            <div className="col-sm-8">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" name="applicable" value={this.state.applicable} id="applicable" />
                                                    <label className="form-check-label" >
                                                        Permanent staff under this category
                                                    </label>


                                                    <br />


                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" name="training" onChange={this.handleInput} value={this.state.training} id="applicable" />
                                                    <label className="form-check-label" >
                                                        Training staff under this category
                                                    </label>
                                                    <br />
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" name="allStaff" onChange={this.handleInput} value={this.state.allStaff} id="applicable" />
                                                    <label className="form-check-label" >
                                                        All staff under this category
                                                    </label>

                                                </div>



                                            </div>

                                        </div>
                                    </div>

                                </th>








                                <th>

                                    <div className="frtwo">
                                        <h5 className="text-center">Should be deducted</h5>
                                        <div className="form-group row">
                                            <label className="col-sm-6 col-form-label">The EPF rate should be deducted</label>
                                            <div className="col-sm-6">
                                                <input type="text" name="EPF" onChange={this.handleInput} value={this.state.EPF} className="form-control" />
                                                <span className="text-warning">{this.state.error_list.EPF}</span>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="form-group row">
                                            <label className="col-sm-6 col-form-label">The ETF rate should be deducted</label>
                                            <div className="col-sm-6">
                                                <input type="text" name="ETF" onChange={this.handleInput} value={this.state.ETF} className="form-control" />
                                                <span className="text-warning">{this.state.error_list.ETF}</span>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <h5 className="text-center">Should be added</h5>
                                        <div className="form-group row">
                                            <label className="col-sm-6 col-form-label">Seasonal bonus rate<br />(If there is any special rate for this category)</label>
                                            <div className="col-sm-6">
                                                <input type="text" name="Sp_bonus" onChange={this.handleInput} value={this.state.Sp_bonus} className="form-control" />
                                            </div>
                                        </div>

                                        <br />
                                        <div className="form-group row">
                                            <label className="col-sm-6 col-form-label">Changes should be valid for</label>
                                            <div className="col-sm-6">
                                                <input type="date" name="start_date" onChange={this.handleInput} value={this.state.start_date} className="form-control" />
                                                <span className="text-warning">{this.state.error_list.start_date}</span>
                                            </div>
                                        </div>
                                        <br />

                                        <div className="form-group row">
                                            <label className="col-sm-6 col-form-label">Changes should remain until</label>
                                            <div className="col-sm-6">
                                                <input type="date" name="closing_date" onChange={this.handleInput} value={this.state.closing_date} className="form-control" />
                                                <span className="text-warning">{this.state.error_list.closing_date}</span>
                                            </div>
                                        </div>
                                        <br />

                                        <h5 className="text-center">Relevant only if the editing staff category is Doctors</h5>
                                        <br />
                                        <div className="form-group row">
                                            <label className="col-sm-6 col-form-label">The rate of Doctor's from one channelling fee</label>
                                            <div className="col-sm-6">
                                                <input type="text" name="channel_rate" onChange={this.handleInput} value={this.state.channel_rate} className="form-control" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="text-center">
                                            <button type="submit" className="buttonr">Create the payment procedure</button>
                                        </div>

                                    </div>


                                </th>
                            </tr>
                        </thead>
                    </table>


                </form>
            </div>

        );
    }
}
export default AddSalaryProcedure;