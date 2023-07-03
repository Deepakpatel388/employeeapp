import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/LayOut";

const Register = () => {
    const [inputValue, setInputValue] = useState({
        email: "",
        name:"",
        organisation:"",
        password:"",
        confirmPassword:""
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
        setInputValue({
            email: "",
            name:"",
            organisation:"",
            password:"",
            confirmPassword:"" 
        })
    }
    
  return (
    <Layout>
      <div>
        <h1>Register Here</h1>     

        <div className="for-bg">
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
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Organisation Name
              </label>
              <input
                type="text"
                className="form-control"
                name="organisation"
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
              <label className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
                <p>You have already registered ! <NavLink to={"/login"}>Login</NavLink></p>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
