import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Log.css'
function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate()
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  const handleSubmit = async(e)=>{

    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser",{
      method : 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:credentials.email,password:credentials.password})
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
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"     
            name="email"
            placeholder="Enter your email"
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
            placeholder="Enter your password"
            name="password"
            onChange={onChange}
            value={credentials.password}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Login
        </button>
        <div>
        <Link className="m-3" to="/register">new User?</Link>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Login;
