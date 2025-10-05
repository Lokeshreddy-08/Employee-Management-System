import React from 'react'
import { useState } from 'react';
import { signUp } from '../../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const SignUpComponent = () => {

    const [username,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

    function signUpEmployee(e){
        e.preventDefault();
        const employee={username,email,password};
        console.log(employee)
        signUp(employee).then((response) => {
            console.log(response.data)
            navigate('/login');
        })
    }

  return (
    <div>
        <h2> SignUp</h2>
        <form>
            <label>Enter Username:    </label>
            <input type="text"
                placeholder='Enter username'
                name='userName'
                value={username}
                onChange={(e) => setUserName(e.target.value)}
            />

            <br/>
            <br/>

            <label>Enter Email:    </label>
            <input type="email"
                placeholder='Enter Email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br/>
            <br/>

            <label>Enter Password:    </label>
            <input type="password"
                placeholder='Enter Password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <button type="button" className="btn btn-success" onClick={signUpEmployee}>Submit</button>

        </form>
    </div>
  )
}

export default SignUpComponent