import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import"./Get.css"
export class Get extends Component {
    state={
        data:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/show1Details')
        .then(response=>{
         this.setState({data:response.data});
        })
        .catch(error=>{
            console.log(error);
        });
    }
  render() {
    return (
       
        <div className="tableali">
        <table border={1}>
            <thead>
                <tr>
                    <th>BID</th>
                    <th>BNAME</th>
                    <th>BPRICE</th>
                    <th>BCOUNTRY</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.data.map(user=>(
                        <tr key={user.bid}>
                            <td>{user.bid}</td>
                            <td>{user.bname}</td>
                            <td>{user.bprice}</td>
                            <td>{user.bcountry}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>

        // <>
        // <div className="bdyg">
        // <a><Link to="/First"> <div className="backget"></div></Link></a>
        // <div className="hget">
        //     <h1>GET</h1>
        // </div>
        // <div className="Aget">
        //     <div className="Aget1">
        //     GET method is used to retreive data from a server at the specified resource
        //     </div>
        // </div>
        // <div className="getid">
        //     <form>
        //     <div className="Agetid">
        //         <label>BID*</label><br></br></div>
        //         <input type="text" placeholder="Enter the bat ID" className="getinputid"></input>
        //     </form>
        // <div className="getname">
        //     <div className="Agetname">
        //         <form>
        //             <label>BName</label><br></br>
        //             <input type="text" placeholder="Enter the bat NAME" className="getinputname"></input>
        //         </form>
        //     </div>
        // </div>
        // <div className="getprice">
        //     <div className="Agetprice">
        //         <form>
        //             <label>Bprice</label><br></br>
        //             <input type="text" placeholder="Enter the bat PRICE" className="getinputprice"></input>
        //         </form>
        //     </div>
        // </div>
        // <div className="getcountry">
        //     <div className="Agetcountry">
        //         <form>
        //             <label>Bcountry</label><br></br>
        //             <input type="text" placeholder="Enter the bat COUNTRY" className="getinputcountry"></input>
        //         </form>
        //     </div>
        // </div>
        // <div className="gcomp">
        //     (* is compulsory)
        // </div>
        // <div classname="getsubmit">
        //         <form>
        //             <button type="submit" className="Agetsubmit">
        //                 Submit
        //             </button>
        //         </form>
        // </div>
        // </div>
        // </div>
        // </>
    
    );
  }
}

export default Get;