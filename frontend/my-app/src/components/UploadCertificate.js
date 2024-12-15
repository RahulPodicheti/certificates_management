import React from 'react'
import Navbar from './Navbar'
import './Uploadcertificate.css'
function UploadCertificate() {
  return (
    <div>
      <Navbar/>
     <div className="body">
      <div className="upload">
        <h5>Upload Certificates</h5>
      <div className=" d-flex m-1">
          <label htmlFor="exampleInputOrganisation" className="organ form-label">
            Organisation 
          </label>
          <input
            type="text"
            placeholder="Enter your Organisation"
            name="Organisation"
            // onChange={onChange}
            // value={credentials.password}
            className=" form-control"
            id="exampleInputOrganisation"
          />
        </div>
        <div className="container d-flex m-1">
          <label htmlFor="exampleInputCourse" className=" form-label">
            Course 
          </label>
          <input
            type="text"
            placeholder="Enter your Course"
            name="Course"
            // onChange={onChange}
            // value={credentials.password}
            className=" form-control"
            id="exampleInputCourse"
          />
        </div>
        <div className="container d-flex m-1">
          <label htmlFor="exampleInputFrom" className=" form-label">
            From 
          </label>
          <input
            type="date"
            name="From"
            // onChange={onChange}
            // value={credentials.password}
            className=" form-control"
            id="exampleInputFrom"
          />
        </div>
        <div className="container d-flex m-1">
          <label htmlFor="exampleInputTo" className=" form-label">
            To 
          </label>
          <input
            type="date"
            name="To"
            // onChange={onChange}
            // value={credentials.password}
            className=" form-control"
            id="exampleInputTo"
          />
        </div>
        <div className="container d-flex m-1">
          <label htmlFor="exampleInputCert" className=" form-label">
            Upload PDF
          </label>
          <input
            type="file"
            name="Cert"
            // onChange={onChange}
            // value={credentials.password}
            className=" form-control"
            id="exampleInputCert"
          />
        </div>
        <button className="btn btn-warning btn-sm mt-2 rounded">Upload Certificate</button>
      </div>
      
      
     </div>
    </div>
  )
}

export default UploadCertificate
