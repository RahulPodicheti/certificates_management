import React, {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom';
import './Log.css'
function Registercertificate() {
  const [credentials,setCredentials] = useState({email:"",password:"",name:"",rollno:""});
    let navigate = useNavigate()
  const onChange =(event)=>{
    setCredentials({...credentials, [event.target.name]: event.target.value })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser",{
      method : 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:credentials.email,password:credentials.password,name:credentials.name,rollno:credentials.rollno})
    });
    const json = await response.json();  
    console.log(json);
    if(!json.success){
      alert("Enter Valid credentials!")
      setCredentials({email:"",password:"",name:"",rollno:""})
    }
    if(json.success){
      setCredentials({email:"",password:"",name:"",rollno:""})
      navigate("/selectabatch");
    }
  }
  return (
    <div>
      <div className="body my-3">
      <form onSubmit={handleSubmit} >
      <div className="mb-3 d-flex">
          <label htmlFor="exampleInputRno" className="form-label">
            Roll No
          </label>
          <input
            type="text"
            name="rollno"
            onChange={onChange}
            value={credentials.rollno}
            className="form-control"
            id="exampleInputRno"
          />
        </div>
        <div className="mb-3 d-flex">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="name"
            name="name"
            onChange={onChange}
            value={credentials.name}
            className="form-control"
            id="exampleInputName"
          />
        </div>
        <div className="mb-3 d-flex">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            onChange={onChange}
            value={credentials.email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 d-flex">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={onChange}
            value={credentials.password}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Register
        </button>
        <div>
        <Link className="m-3" to="/login">Already have an account?</Link>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Registercertificate
