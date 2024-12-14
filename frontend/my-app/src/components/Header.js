import React from 'react'
import './Header.css'
function Header() {
  return (
    <><div className="d-flex container ">
    <div className='img'>
    <img src="https://www.facultyplus.com/wp-content/uploads/2018/10/Vaagdevi-Logo.png" alt="" style={{"width":"120px"}} />

    </div>
    <div className="clg">
            <div className="v" >Viswambara Educational Society</div>
            <div className="VAAGDEVI">VAAGDEVI</div>
            <div className="COLLEGE">COLLEGE OF ENGINEERING</div>
            <div className="AUTO">AUTONOMOUS</div>
            <div className="NAAC">Accredited by NAAC with 'A' Grade</div>
            <div className="EEE">Accredited by National Board of Accreditation(B.Tech-EEE, CSE & ECE) </div>
            <div className="AICTE">Approved by AICTE, New Delhi & Affiliated to JNTUH, Hyderabad.</div>
    </div></div>
    </>
  )
}

export default Header
