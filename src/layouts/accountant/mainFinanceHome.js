import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';
import '../../assets/Accountants/css/styles.css';
import '../../assets/Accountants/js/scripts';

function mainFinanceHome() {


    return (


        <div className="sb-nav-fixed">
            <Navbar />


            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div>
                <div id="layoutSidenav_content">
                    <main>

                      Finance Department

                    </main>
                      <Footer></Footer>
                </div>

            </div>
        </div>
    );

}

export default mainFinanceHome;