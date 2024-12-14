import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Selectabranch.css'
function Selectabatch() {
  let navigate = useNavigate();
  const NAV =()=>{
    navigate("/welcome");
  }
  return (
    <div>
    
    <div className= "body">
     <div className='select' >
      <h5 className='mb-2' >Select a Branch</h5>
      <div className="container w-300">
                        <select className="m-4 h-100 bg-info rounded"  /*onChange={(e)=>setQty(e.target.value)}**/>
                            {Array.from(Array(41),(e,i)=>{
                                return(
                                    <option key={i+1984} value={i+1984}> {i+1984} </option>
                                )
                            })}
                        </select>
                        
                        
                    </div>
                    <button className="btn btn-success rounded" onClick={NAV} >Next</button>
     </div>
    </div>
    </div>
  )
}

export default Selectabatch
