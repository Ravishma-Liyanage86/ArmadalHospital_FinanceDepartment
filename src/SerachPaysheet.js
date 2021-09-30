import './assets/Accountants/css/reg.css'
import { Link } from 'react-router-dom';
import React, { Component, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

function SearchPaySheet() {

    const [data, setData] = useState([])
    async function search(key) {
        console.warn(key)
        let result = await fetch('http://localhost:8000/api/search/' + key);
        result = await result.json();
        console.warn(result)
        setData(result)

    }










    return (

        <div className="container">
            <div className="col-md-6">
                <div className="jk">
                    <h1>Search Your Paysheet</h1>
                    <br />
                    <label >Please input your NIC number  :</label>
                    <input type="text" className="asd" onChange={(e) => search(e.target.value)} className="form-control" placeholder="nic"></input>


                    <Table striped bordered hover size="md" variant="dark" >
                        <thead>
                            <tr>
                                <th>Pay Sheet Requst ID </th>
                                <th>Employee's Name  </th>
                                <th>Employee's NIC  </th>
                                <th>Basic Salary </th>
                                <th>Your OT payment </th>
                                <th>EPF </th>
                                <th>ETF </th>
                                <th>Month and Yer  of the paysheet </th>
                                <th>Your Bonuses </th>
                                <th>Channeling Charges  </th>
                                <th>Total Salary </th>
                                <th>The date you made the request </th>



                            </tr>
                            {
                                data.map((item) =>



                                    <tr key={item.id}>
                                        <td id="reqID">{item.reqid}</td>
                                        <td>{item.ename}</td>
                                        <td>{item.nic}</td>
                                        <td>{item.basic}</td>
                                        <td>{item.ot}</td>
                                        <td>{item.epf}</td>
                                        <td>{item.etf}</td>
                                        <td>{item.time}</td>
                                        <td>{item.bonuse}</td>
                                        <td>{item.channelcharges}</td>
                                        <td>{item.total}</td>
                                        <td>{item.padate}</td>

                                        <td>
                                            <Link to={`/Generate the slip/${item.id}/${item.nic}`} className="btn btn-danger btn-sm">Generate pay Sheet</Link>
                                        </td>

                                    </tr>
                                )
                            }



                        </thead>

                    </Table>

                </div>
            </div>

        </div>

    )

}
export default SearchPaySheet;
