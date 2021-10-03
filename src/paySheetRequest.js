import './assets/Accountants/css/reg.css'
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './validation';



class PaySheetRequest extends Component {

    state = {
        name: '',
        select: '',
        jobstatus: '',
        nic: '',
        eid: '',
        othrs: '',
        time: '',
        redate: '',
        error_list:[],
    }
     validateNIC = (e) =>{
        var nic = document.getElementById('nic');
        var msg = document.getElementById('msg');
    
        if (nic.value.length == 10) {
          
            msg.innerHTML = "N.I.C. length is valid";
            msg.style.color = "#350D7C";
        } else if(nic.value.length == 12){
            msg.innerHTML = "N.I.C. length is valid";
            msg.style.color = "#350D7C";
        }else{
            msg.innerHTML = "N.I.C. must be 10 or 12 characters";
            msg.style.color = "#F10707";
        }
    }
    handleInput = (e) => {
        
        this.setState({

            [e.target.name]: e.target.value
        });

    }
   
    saveRequest = async (e) => {

        e.preventDefault();
        const res = await axios.post('http://localhost:8000/api/addPaySheetRequest', this.state);
        if (res.data.status === 200) {
            //console.log(res.data.message);
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                button: "ok!",
            });
            this.setState({
                name: '',
                select: '',
                jobstatus: '',
                nic: '',
                eid: '',
                othrs: '',
                time: '',
                redate: '',

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

                <h1 className="h1"> The requst form to view the monthly Pay Sheet</h1>
                <form onSubmit={this.saveRequest}>
                    <script></script>

                    <table >
                        <thead>
                            <tr>
                                <th>
                                    <div className="addPay">
                                        <label className="labelsreg12">Your Full name  :</label>
                                        <input type="text" name="name" onChange={this.handleInput} value={this.state.name} className="form-control " placeholder="name" />
                                        <span className="text-danger">{this.state.error_list.name}</span>

                                        <label className="labelsreg12">Staff Category  :</label>
                                        <input type="text" name="select" onChange={this.handleInput} value={this.state.select} className="form-control " placeholder="type" />
                                        <span className="text-danger">{this.state.error_list.select}</span>

                                        {/* <input type="text" name="select" onChange={this.handleInput} value={this.state.select} className="form-control" aria-label=".form-select-sm example"/> */}
                                        {/* <option selected>Select</option>
                                                <option value="1">Nurses</option>
                                                <option value="2">Doctors</option>
                                                <option value="3">Radiologists</option>
                                                <option value="4">Accountants</option>
                                                <option value="5">Pharmasists</option>
                                                <option value="6">Ambulance Staff</option> */}

                                        <div className="form-group mb-3">
                                            <label className="labelsreg12">Your current job status  :</label>
                                            <input type="text" name="jobstatus" onChange={this.handleInput} value={this.state.jobstatus} className="form-control" placeholder="perment or trainng" />
                                            <span className="text-danger">{this.state.error_list.jobstatus}</span>
                                        
                                        </div> 
                        

                                        <label className="labelsreg12">Your NIC  :</label>
                                        <input type="text" name="nic" id="nic" onChange={this.handleInput} value={this.state.nic} onKeyUp={this.validateNIC} className="form-control" placeholder="nic" />
                                        <span id="msg"></span>
                                        <span className="text-danger">{this.state.error_list.nic}</span>
                                       


                                        <label className="labelsreg12">Your Employee ID :</label>
                                        <input type="text" name="eid" onChange={this.handleInput} value={this.state.eid} className="form-control" placeholder="eid" />
                                        <span className="text-danger">{this.state.error_list.eid}</span>


                                        <label className="labelsreg12">Your total OT hours  :</label>
                                        <input type="text" name="othrs" onChange={this.handleInput} value={this.state.othrs} className="form-control" placeholder="OT hrs" />
                                        <span className="text-danger">{this.state.error_list.othrs}</span>

                                        <div className="labelsreg12">The time period you need  to see your monthly payment sheet</div>

                                        <label className="labelsreg12">The month and year  :</label>
                                        <input type="text" name="time" onChange={this.handleInput} value={this.state.time} className="form-control" placeholder="month and year" />
                                        <span className="text-danger">{this.state.error_list.time}</span>
                                         
                                        <label className="labelsreg12">The date request made   :</label>
                                        <input type="date" name="redate" onChange={this.handleInput} value={this.state.redate} className="form-control" placeholder="confirm the password" />
                                        <span className="text-danger">{this.state.error_list.redate}</span>

                                        <button type="submit" className="btreg">Make The request</button>
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
export default PaySheetRequest;