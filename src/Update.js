// import React from 'react'
import"./Update.css"
import {Link} from'react-router-dom'
import axios from 'axios'
import React, { Component } from 'react'
export class Update extends Component {
    constructor(props){
        super(props);
        this.state={
            bid:"",
            bname:"",
            bprice:"",
            bcountry:""
        };
    }
    handleBidChange=(event)=>{
        this.setState({bid:event.target.value});
    };
    handleBnameChange=(event)=>{
        this.setState({bname:event.target.value});
    };
    handleBpriceChange=(event)=>{
        this.setState({bprice:event.target.value});
    };
    handleBcountryChange=(event)=>{
        this.setState({bcountry:event.target.value});
    };
    handleSubmit=(event)=>{
        event.preventDefault();
        const data={
            bid:this.state.bid,
            bname:this.state.bname,
            bprice:this.state.bprice,
            bcountry:this.state.bcountry,
        };
        axios.post('http://127.0.0.1:8080/add1Details',data)
    };
  render() {
    return (
        <>
        <div className="bdyu">
        <a><Link to="/First"><div className="backupd"></div></Link></a>
        <div className="hupdate">
            <h1>PUT</h1>
        </div>
        <div className="Aupdate">
            <div className="Aupdate1">
            The Update API lets your client applications download hashed versions of the Web Risk lists for storage in a local or in-memory database. 
            </div>
        </div>
        <div className="updateid">
            <form onSubmit={this.handleSubmit}>
            <div className="Aupdateid">
                <label>BID</label><br></br>
            </div>
                <input type="text" placeholder="Enter the bat ID" className="upinputid"  value={this.state.bid} onChange={this.handleBidChange}></input>
            </form>
        <div className="updatename">
                <form onSubmit={this.handleSubmit}>
            <div className="Aupdatename">
                    <label>BName</label><br></br>
            </div>
                    <input type="text" placeholder="Enter the bat NAME" className="upinputname"  value={this.state.bname} onChange={this.handleBnameChange}></input>
                </form>
        </div>
        <div className="updateprice">
                <form onSubmit={this.handleSubmit}>
            <div className="Aupdateprice">
                    <label>Bprice</label><br></br>
            </div>
                    <input type="text" placeholder="Enter the bat PRICE" className="upinputprice"  value={this.state.bprice} onChange={this.handleBpriceChange}></input>
                </form>
        </div>
        <div className="updatecountry">
                <form onSubmit={this.handleSubmit}>
            <div className="Aupdatecountry">
                    <label>Bcountry</label><br></br>
            </div>
                    <input type="text" placeholder="Enter the bat COUNTRY" className="upinputcountry"  value={this.state.bcountry} onChange={this.handleBcountryChange}></input>
                </form>
        </div>
        {/* <div className="ucomp">
            (* is compulsory)
        </div> */}
        <div classname="updatesubmit">
                <form onSubmit={this.handleSubmit}>
                    <button type="submit" className="Aupdatesubmit">
                        Submit
                    </button>
                </form>
        </div>
        </div>
        </div>
        </>
    )
  }
}

export default Update