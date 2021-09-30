import './assets/Accountants/css/reg.css'
import React,{useState} from 'react'
function Registration() {

    const [name,setName]=useState("")
    const [NIC,setNIC]=useState("")
    const [email,setEmail]=useState("")
    const [dob,setDob]=useState("")
    const [gender,setGender]=useState("")
    const [password,setPassword]=useState("")
    
    function register()
    {
        
        let item={name,NIC,email,dob,gender,password}
        console.warn(item)
    }
    
    
    
    
    
    return (
        <div className="col-sm-6 offset-sm-3">
            <div className="regbx1">
                <h1 className="h1"> Finance Staff Registartion</h1>

                <label for="inputPassword3" className="labelsreg">Your name  :</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name" />

                <label for="inputPassword3" className="labelsreg">Your NIC number  :</label>
                <input type="text" value={NIC} onChange={(e)=>setNIC(e.target.value)}className="form-control" placeholder="nic" />
                
                <label for="inputPassword3" className="labelsreg">Your email  :</label>
                <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}className="form-control" placeholder="email" />
                
                <label for="inputPassword3" className="labelsreg">Your dob  :</label>
                <input type="text" value={dob} onChange={(e)=>setDob(e.target.value)} className="form-control" placeholder="Birthday" />
                
                <label for="inputPassword3" className="labelsreg">Your gender  :</label>
                <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} className="form-control" placeholder="gender" />
                
                <label for="inputPassword3" className="labelsreg">Your password  :</label>
                <input type="text" value={password}  onChange={(e)=>setPassword(e.target.value)}className="form-control" placeholder="password with at least 8 characters" />
                
                <label for="inputPassword3" className="labelsreg">Please Confirm Your password   :</label>
                <input type="text" className="form-control" placeholder="confirm the password" />
                
                <button onClick={register} className="btreg">Register with the system</button>
            </div>
        </div>
    )

}

export default Registration