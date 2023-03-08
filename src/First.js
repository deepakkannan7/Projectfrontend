// import React from 'react'
import "./First.css";
import {Link} from'react-router-dom'



import React, { Component } from 'react'

export class First extends Component {
  render() {
    return (
        <>
        <div className="bdyf">
        <a><Link to="/Login"> <div className="Fback"></div></Link></a>
         {/* <div className="ch"> */}
             <h1 className="ch">Ballakeemat</h1>
         {/* </div> */}
        <div className="Fbody">
         <br></br>
         <a><Link to="/Insert">
         <div className='Insert'>
             <div className='Ins1'>
             <h3>Post</h3>
             </div>
         </div>
         </Link></a>
         <a><Link to="/Get">
         <div className="Get">
             <h3>Get</h3>
         </div>
         </Link></a>
         <a><Link to="/Update">
         <div className="Update">
             <h3>Put</h3>
         </div>
         </Link></a>
         <a><Link to="/Delete">
         <div className="Delete">
             <h3>Delete</h3>
         </div>
         </Link></a>
         </div>
         </div>
        </>
    )
  }
}

export default First