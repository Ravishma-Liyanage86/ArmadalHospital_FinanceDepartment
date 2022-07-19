import React from 'react';
import '../../assets/Accountants/css/menubar.css';
import logout from '../../images/logout.png'

import { Link } from 'react-router-dom';


const Sidebar = () => {


    return (
        <div className="sidebar">
            <div className="menu">
               
                    <h3>Armadal Hospital</h3>
                    <hr className="hr1" />
                    <h1>Finance Department</h1>
                    <hr className="hr1" />
                    <Link to="Savings.jsp"><i className="bar1"> Home</i></Link>
                    <Link to={"/FinanceHome"}><i className="bar1"> Finance Department</i></Link>
                    <Link to={"/paySheetRequest"}><i className="bar1">Request for Pay Sheet</i></Link>
                    <Link to={"/SerachPaysheet"}><i className="bar1">View Pay Sheet</i></Link>
                    <Link to={"/Employees"}><i className="bar1">View Employees</i></Link>
                    <Link to={"/SalaryAdvances"}><i className="bar1">Salary Advances</i></Link>
                    <Link to={"/FinanceStaff"}><i className="bar1">Finance Staff</i></Link>
                    <Link to="#services"><i className="bar1">Issues about Pay Sheet</i></Link>
                    <br /><br /><br /><br /><br /><br />
                    <Link to="#" className="f90-logout-button" id="bar">Logout &emsp;&emsp;<img src={logout} width="30pxpx" height="30px" margin-top="5px" border-radius="5px" /></Link>

                    
                
            </div>
        </div>



    );


}

export default Sidebar;