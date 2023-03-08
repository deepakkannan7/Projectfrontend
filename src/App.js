import "./App.css";
import Insert from "./Insert";
import Get from "./Get";
import Update from "./Update";
import First from "./First";
import Delete from "./Delete";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
function App()
{
  return(
      // {/* <Delete/> */}
      // {/* <First/> */}
      // {/* <Login/> */}
      // {/* <Signup/> */}
      // {/* <Insert/> */}
      // {/* <Get/> */}
      // <Update/>
    <BrowserRouter>
    <div className="App">
       <Routes>
     <Route path='/' element={<Login/>}></Route>
     <Route path='/Login' element={<Login/>}></Route>
     <Route path='/Signup' element={<Signup/>}></Route>
     <Route path='/First' element={<First/>}></Route>
     <Route path='/Insert' element={<Insert/>}></Route>
     <Route path='/Get' element={<Get/>}></Route>
     <Route path='/Update' element={<Update/>}></Route>
    <Route path='/Delete' element={<Delete/>}></Route> 
       </Routes>
       </div>  
     </BrowserRouter> 
      
      );
    }
    export default App;
{/* // import logo from './logo.svg';
// import './App.css';
// import Gif from './Gif';
// import Wru from './Wru';
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
// function App() { */}
{/* //   return (
//     <BrowserRouter>
//     <div className="App">
//       <Routes>
//         <Route path='/' element={<Gif/>}></Route>
//         <Route path='/Gif' element={<Gif/>}></Route>
//         <Route path='/Wru' element={<Wru/>}></Route>
//         </Routes>
//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;


// import './App.css';

// import Dropdown from './Dropdown';
// function App() { */}
{/* //     var options = [
//         { 'label': 'Lime', 'value': 'lime' },
//         { 'label': 'Lavender', 'value': 'lavender' },
//         { 'label': 'Crimson', 'value': 'crimson' },
//         { 'label': 'Darkblue', 'value': 'darkblue' },
//         { 'label': 'Teal', 'value': 'teal' },
//         { 'label': 'Rebecca Purple', 'value': 'rebeccapurple' },
//         { 'label': 'Ghost White', 'value': 'ghostwhite' },
//         { 'label': 'Aqua Marine', 'value': 'aquamarine' },
//         { 'label': 'Alice Blue', 'value': 'aliceblue' }
//     ];
//     return (
//         <div className="App">
//             <center><h1 className='apptitle'>COLOR CHANGER</h1></center>
//             <Dropdown options={options} />
            
//         </div>
//     );
// }

// export default App; */}

