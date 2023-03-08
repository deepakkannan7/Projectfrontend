import axios from "axios";
import react ,{useState}from "react";
import { Link } from "react-router-dom";
import './Delete.css'
function Delete() {
    const [search,setSearch]=useState("");
    const [idData,setData]=useState([]);
    const searchid=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.delete('http://127.0.0.1:8080/delete/'+search)
            .catch(err=>console.log(err))
        }
    }
  return (
    <div><>
<div className="bdy1">
<a><Link to="/First"><div className="backdel"></div></Link></a>
    <div className="deleteid">
                <h2 className="hdelete">Delete</h2>
                <div className="search" >
                    <input type="text" className='delinputid' placeholder="Enter the Bat Id To Be Deleted"  value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchid}/>   

                </div>
                <div className="delpara">The Entered Id will Be Deleted</div>
                </div>
                
                 
            </div>      
        </>
        </div>
  )
}

export default Delete;