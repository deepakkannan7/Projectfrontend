import React, { useState } from 'react';
import "./Signup.css";
import {Link} from'react-router-dom'
function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
    // You can add your own code to handle form submission here
  };

  return (
    <>
    <div className="bdys">
    <a><Link to="/Login"> <div className="supback"></div></Link></a>
      <div className="hsignup">Signup</div>
    <div className="suptotal">
      <form onSubmit={handleSubmit}>
        <div className="supuser">
        <label>
          Username
        </label></div>
        <div className="supinputname">
          <input type="text" className="supinputname" placeholder="Enter the USERNAME" value={username} onChange={(e) => setUsername(e.target.value)} /></div>
        {/* <br /> */}
        <div className="supemail">
        <label>
          Email
        </label></div>
        <div className="supinputmail">
          <input type="email" className="supinputmail" placeholder="Enter the EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
        {/* <br /> */}
        <div className="suppassword">
        <label>
          Password
        </label></div>
        <div className="supinputpass">
          <input type="password" className="supinputpass" placeholder="Enter the PASSWORD" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
        <br />
        <a><Link to="/First"> <button type="submit" className="supsignup">Signup</button></Link></a>
      </form>
    </div>
    </div>
    </>
  );
}

export default Signup;
