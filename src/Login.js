import React, { useState } from 'react';
import "./Login.css";
import {Link} from'react-router-dom'
const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setemail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // You can add your authentication logic here
  };

  return (
    <>
    <div className="bdyl">
    <div className="Loghead">Login</div>
    <div className="logtot">
      <div className="Logimg">

      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="Logname">
          <label htmlFor="email" className="Logname">Email</label><br></br></div>
          <input
            type="text"
            id="username"
            placeholder="Enter your EMAIL"
            value={email}
            className="Loginputuser"
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <div className="Logpass">
          <label htmlFor="password" className="Logpass">Password</label><br></br></div>
          <input
            type="password"
            id="password"
            placeholder="Enter your PASSWORD"
            value={password}
            className="Loginputpass"
            onChange={handlePasswordChange}
          />
        </div>
        <a><Link to="/First">
        <button type="submit" className="Logsubmit">Login</button></Link></a>
      </form>
      <h3 className="Donacc">Don't have an account?</h3>
      <a><Link to="/Signup">
      <div className="Logsignup">
        SignUp
      </div></Link></a>
    </div>
    </div>
    </>
  );
};

export default Login;
