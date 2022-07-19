import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/Accountants/css/FinanceStaff.css';
import Spinner from 'react-bootstrap/Spinner';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Sidebar from './layouts/accountant/sidebar';
class FinanceStaff extends Component {
    render() {


        return (

            <div>

             <Sidebar/>

                <h1 className="h1"> Finance Staff</h1>


                <div className="spg">

                    <h4 className="ht">Staff Slary Procedures</h4>
                    <br />
                    <ProgressBar animated now={45} />
                    <div className="qwe">
                        <Link to={"/AddSalaryProcedure"}><Spinner animation="border" variant="danger" /><i className="barj"> AddSalaryProdeure</i></Link>
                        <br />
                        <br />
                        <Link to={"/ViewSalaryProcedure"}> <Spinner animation="border" variant="danger" /><i className="barj"> ViewSalaryProcedure</i></Link>
                        <br />
                        <br />
                        <Link to={"/ViewPaySheetRequest"}> <Spinner animation="border" variant="danger" /><i className="barj"> View Pay Sheet Requests</i></Link>
                        <br />
                        
                        <br/>
                    </div>









                </div>

            </div>
        );

    }
}
export default FinanceStaff;