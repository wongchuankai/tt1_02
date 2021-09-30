import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import { createHashHistory } from 'history'
import './Login.css';
import { useHistory } from 'react-router';


async function loginUser(credentials) {
  console.log(credentials)
    axios.post("http://localhost:8000/api/login" , credentials).then(res => {
      console.log(res.data.token)
      return res.data.token
    }).catch(err=>{
      console.log(err)
      return {}
    })

  }

export default function Login({ setToken, loginset }) {
 const history = useHistory()

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    // e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    if(token === {}) {

    }
    else {
      // console.log(token)
      // setToken(token);
      localStorage.setItem("token", JSON.stringify(token))
      history.push('/products')
      loginset(true)
    }
  }

  return(
    <div className="login-wrapper">
    <h1>Log In Here</h1>
    {/* <form onSubmit={handleSubmit}> */}
      <label>
        <p>Username</p>
        <input type="text" onChange={e => setUserName(e.target.value)}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)}/>
      </label>
      <div>
        <button type="submit" onClick={ e=> handleSubmit(e)}>Submit</button>
      </div>
    {/* </form> */}
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }