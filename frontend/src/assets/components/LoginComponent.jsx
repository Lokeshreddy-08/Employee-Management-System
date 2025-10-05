import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkCredentials, getUserDetails } from '../../services/EmployeeService';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function checkLogin(e) {
    e.preventDefault();
    try {
      // 1️⃣ Check credentials
      const res = await checkCredentials({ email, password });
      
      if (res.data === 'ok') {
        // 2️⃣ Get user details
        const userResponse = await getUserDetails(email);
        const username = userResponse.data.username;

        // 3️⃣ Store in localStorage
        localStorage.setItem('username', username);

        // 4️⃣ Navigate to home page or employees page
        navigate('/employees');
      } else {
        alert('Invalid Credentials');
      }

    } catch (error) {
      console.error(error);
      alert('Invalid Credentials');
    }
  }

  return (
    <div>
      <br />
      <label>Enter Email :</label>
      <input
        type="text"
        placeholder="Enter Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />
      <label>Enter Password:</label>
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />
      <button className="btn btn-success" onClick={checkLogin}>Submit</button>
    </div>
  );
};

export default LoginComponent;
