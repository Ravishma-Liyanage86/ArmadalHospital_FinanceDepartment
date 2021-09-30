
import './assets/Accountants/css/reg.css'
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

class PaySheetRequest extends Component {

    state = {
        reqid: '',
        ename: '',
        nic: '',
        basic: '',
        ot: '',
        epf: '',
        etf: '',
        time: '',
        bonuse: '',

        channelcharges: '',
        total: '',
        padate: '',
    }
    handleInput = (e) => {
        this.setState({

            [e.target.name]: e.target.value
        });

    }

    async componentDidMount() {


        const req_id = this.props.match.params.id;
        const e_nic = this.props.match.params.nic;
        console.log(req_id);
        console.log(e_nic);

        document.getElementById('rrt').innerText = req_id;
        document.getElementById('empnic').innerText = e_nic;
        



    }

    addPaysheet = async (e) => {

        e.preventDefault();
        const res = await axios.post('http://localhost:8000/api/addPaySheet', this.state);
        if (res.data.status === 200) {
            //console.log(res.data.message);
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                button: "ok!",
            });
            this.setState({
                reqid: '',
                ename:'',
                nic: '',
                basic: '',
                ot: '',
                epf: '',
                etf: '',
                time: '',
                bonuse: '',

                channelcharges: '',
                total: '',
                padate: '',

            });
        }

    }

    render() {
        return (
            
            <div className="container"> 
            
                                <h1 className="h1"> Add the pay sheet</h1>
                                <br/>
                                <div className="drt">
                                <div className="mmm">The pay sheet request id of this paysheet request:
                                           
                                        <div id="rrt" ><h1>******** </h1></div>
                                        <div id="empnic" ><h1>******** </h1></div>
                                        </div>
                                        <br/>
                                        </div>
                                <form onSubmit={this.addPaysheet}>

                          <table >
                            <thead>
                              <tr>
                                 <th>
                                    <div className="addOne">
                                            
         
                                            <label className="labelsreg1">Employee's request Id :</label>
                                            <input type="text" name="reqid" onChange={this.handleInput} value={this.state.reqid} className="form-control " placeholder="request id" />

                                            <label className="labelsreg1">Employee's full name :</label>
                                            <input type="text" name="ename" onChange={this.handleInput} value={this.state.ename} className="form-control " placeholder="full name" />
                                             
                                            <label className="labelsreg1">Employees' NIC number :</label>
                                            <input type="text" name="nic" onChange={this.handleInput} value={this.state.nic} className="form-control " placeholder="NICnumber" />
                                             
                                            {/* <input type="text" name="select" onChange={this.handleInput} value={this.state.select} className="form-control" aria-label=".form-select-sm example"/> */}
                                            {/* <option selected>Select</option>
                                                <option value="1">Nurses</option>
                                                <option value="2">Doctors</option>
                                                <option value="3">Radiologists</option>
                                                <option value="4">Accountants</option>
                                                <option value="5">Pharmasists</option>
                                                <option value="6">Ambulance Staff</option> */}

                                            <div className="form-group mb-3">
                                                <label className="labelsreg1">basic Salary  :</label>
                                                <input type="text" name="basic" onChange={this.handleInput} value={this.state.basic} className="form-control" placeholder="perment or trainng" />
                                            </div>

                                            <label className="labelsreg1">OT payments :</label>
                                            <input type="text" name="ot" onChange={this.handleInput} value={this.state.ot} className="form-control" placeholder="nic" />

                                            <p className="labelsreg1">should be deducted</p>

                                            <label className="labelsreg1"> EPF:</label>
                                            <input type="text" name="epf" onChange={this.handleInput} value={this.state.epf} className="form-control" placeholder="eid" />

                                            <label className="labelsreg1">ETF :</label>
                                            <input type="text" name="etf" onChange={this.handleInput} value={this.state.etf} className="form-control" placeholder="OT hrs" />
                                       </div>
                                       </th>
                                       <th>
                                       <div className="addtwo">
                                            
                                            <p className="labelsreg1">The time period</p>

                                            <label className="labelsreg1">The month and year  :</label>
                                            <input type="text" name="time" onChange={this.handleInput} value={this.state.time} className="form-control" placeholder="month and year" />

                                            <p className="labelsreg1">Should be add</p>

                                            <label className="labelsreg1"> Sesonal bonuses :</label>
                                            <input type="text" name="bonuse" onChange={this.handleInput} value={this.state.bonuse} className="form-control" placeholder="month and year" />

                                            <p className="labelsreg1">Only applicable if employee is a doctor</p>

                                            <label className="labelsreg1"> total channeling fee charges:</label>
                                            <input type="text" name="channelcharges" onChange={this.handleInput} value={this.state.channelcharges} className="form-control" placeholder="eid" />

                                            <label className="labelsreg1"> total salary:</label>
                                            <input type="text" name="total" onChange={this.handleInput} value={this.state.total} className="form-control" placeholder="eid" />




                                            <label className="labelsreg1">The date pay sheet made   :</label>
                                            <input type="date" name="padate" onChange={this.handleInput} value={this.state.padate} className="form-control" placeholder="confirm the password" />

                                            <button type="submit" className="buttonr3">Make The pay sheet</button>
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
