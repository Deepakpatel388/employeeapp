import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Layout from '../components/LayOut';

const Login = () => {
    const [inputValue, setInputValue] = useState({
        email: "",
        password:""
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setInputValue({
            ...inputValue,
            [name] : value
        })
        console.log(inputValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert();
        setInputValue({
            email: "",
            password:""
        })
    }
  return (
    <Layout>
        <div>
        <h1>Register Here</h1>     

        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
                <p>Not registered yet just ! <NavLink to={"/register"}>Register</NavLink></p>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Login