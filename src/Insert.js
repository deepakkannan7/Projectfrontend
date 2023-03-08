// import React from 'react'
import"./Insert.css"
import {Link} from'react-router-dom'
import axios from 'axios'
import React, { Component } from 'react'
export class Insert extends Component {
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
        <div className="bdyi">
        <a><Link to="/First"><div className="backins"></div></Link></a>
        <div className="hinsert">
            <h1>POST</h1>
        </div>
        <div className="Ainsert">
            <div className="Ainsert1">
                POST is used to send data to a server to create/update a resource.The data sent to the server with POST is stored in the request body of the HTTP request
            </div>
        </div>
        <div className="insid">
            <form onSubmit={this.handleSubmit}>
            <div className="Ainsid">
                <label>BID</label><br></br>
            </div>
                <div className="insinputid">
                <input type="text" placeholder="Enter the bat ID"className="insinputid" value={this.state.bid} onChange={this.handleBidChange}></input>
                </div>
            </form>
        <div className="insname">
                <form onSubmit={this.handleSubmit}>
            <div className="Ainsname">
                    <label>BName</label><br></br>
            </div>
                    <div className="insinputname">
                    <input type="text" placeholder="Enter the bat NAME" className="insinputname" value={this.state.bname} onChange={this.handleBnameChange}></input>
                    </div>
                </form>
        </div>
        <div className="insprice">
                <form onSubmit={this.handleSubmit}>
            <div className="Ainsprice">
                    <label>Bprice</label><br></br>
            </div>
                    <div className="insinputprice">
                    <input type="text" placeholder="Enter the bat PRICE" className="insinputprice" value={this.state.bprice} onChange={this.handleBpriceChange}></input>
                    </div>
                </form>
        </div>
        <div className="inscountry">
                <form onSubmit={this.handleSubmit}>
            <div className="Ainscountry">
                    <label>Bcountry</label><br></br>
            </div>
                    <div className="insinputcountry">
                    <input type="text" placeholder="Enter the bat COUNTRY" className="insinputcountry" value={this.state.bcountry} onChange={this.handleBcountryChange}></input>
                    </div>
                </form>
        </div>
        <div classname="inssubmit">
                <form onSubmit={this.handleSubmit}>
                    <button type="submit" className="Ainssubmit">
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

export default Insert