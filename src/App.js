//import logo from './logo.svg';
import './App.css';
//import { Button } from 'react-bootstrap'
import Header from './Header';
import Image from 'react-bootstrap/Image'
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import AddSalaryProcedure from './AddSalaryProcedure';
import ViewSalaryProcedure from './ViewSalaryProcedure';
import EditProcedure from './EditProcedure';
import FinanceHome from './FinanceHome';
import Registration from './Registration';
import ViewPaySheetRequest from './ViewPaySheetRequest';
import AddPaySheet from './AddPaySheet';
import PaySheetRequest from './paySheetRequest';
import FinanceStaff from './FinanceStaff';
import React from 'react';
import Terms from './Terms';
import Menubar from './menubar'
import Home from './Home';
import Privacy from './Privacy';
import Footer from './layouts/accountant/footer';
import './assets/Accountants/css/styles.css';
import logo from './images/arm-logo.jpeg';
import './assets/Accountants/js/scripts';
//import hospital from './images/hospital-bc.jpg.crdownload'
import SearchPaySheet from './SerachPaysheet';
import  Employees from './Employees';
import Contact from "./contact.js";
import Feed from "./feed.js";
import Benifits from "./benifits";
import Hidebar from "./Hidebar"
import SalaryAdvances from "./SalaryAdvances"
function App() {
  return (
    <div className="App">
       {/* <div style={{ backgroundImage: `url(${hospital})`, height:'100%' }}> */}
        <BrowserRouter>
          <h1 className="header_style"><Image src={logo} width="200px" height="120px" margin-top="5px" margin-left="20px" margin-right="100px" margin-bottom="5px"border-radius="5px" roundedCircle /> Armadal Hospital </h1>
          <Header />

          <h1>Finance department</h1>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/Benifits">
            <Benifits />
          </Route>
          <Route path="/feed">
            <Feed/>
          </Route>
          <Route path="/AddSalaryProcedure">
            <AddSalaryProcedure />
          </Route>
          <Route path="/ViewSalaryProcedure">
            <ViewSalaryProcedure />
          </Route>
          <Route path="/ViewPaySheetRequest">
            <ViewPaySheetRequest />
          </Route>
          <Route path="/AddPaySheet/:id/:nic" component={AddPaySheet}>
            
          </Route>
          <Route path="/EditProcedure/:id" component={EditProcedure}>
            
          </Route>
          <Route path="/Terms">
            <Terms />

          </Route>
          <Route path="/Registration">
            <Registration />
          </Route>
          <Route path="/feedback">
            <Login />
          </Route>
          <Route path="/Privacy">
            <Privacy />
          </Route>

          <div className="sb-nav-fixed">
            <main>



                <br/>
                < Menubar/>
              <Route path="/FinanceHome">
                <FinanceHome />
              </Route>
              <Route path="/PaySheetRequest">
                <PaySheetRequest />
              </Route>
               
              <Route path="/FinanceStaff">
                <FinanceStaff />
              </Route>
              <Route path="/Employees">
                <Employees />
              </Route>
              <Route path="/SalaryAdvances">
                <SalaryAdvances />
              </Route>
              <Route path="/SerachPaysheet" component={SearchPaySheet}>
                
              </Route>
              <Hidebar/>

            </main>
            
          </div>



          <Footer></Footer>
        </BrowserRouter>
      </div>
      
    // </div>
  );
}

export default App;
