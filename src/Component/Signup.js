import React, { useState } from "react";
import "../App.css";
import { Form, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

function Signup() {

  return (
    <div className="container-fluid signup ">
      <div className="row">
        <div className="m-0 p-0 col-6 signupimage ">
          <img src="https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg" />
        </div>

        <div className="col-6 container-fluid  ">
          <div className=" col border border-3 rounded-5   h-75 w-50 d-flex flex-column align-items-center signupfrom1">

            <div className="row mt-4 mb-3">
              <h4>SignUp</h4>
            </div>

            <div className="row signupform">
        
              <form className="ms-5">
                <input  type="text" className= " mt-3 border-1 rounded-3 w-75" placeholder="  Name*" />
                <br />
                <input type="email" className= " mt-3 border-1 rounded-3 w-75" placeholder="  Email*" />
                <br />
                <input type="radio"  className= " mt-3 ms-2" />
                <span>Male</span>
                <input type="radio"  className= " mt-3 ms-2"/>
                <span>Female</span>
                <input type="radio"  className= " mt-3 ms-2"/>
                <span>Other</span>
                <br />
                <input type="number" className= " mt-3 border-1 rounded-3 w-75" placeholder="  Phone*" />
                <br />
                <input type="password" className= " mt-3 border-1 rounded-3 w-75" placeholder="  Passeord*" />
                <br />
                <input type="passeord" className= " mt-3 mb-2 border-1 rounded-3 w-75" placeholder="  Confirm-Password*" />
                <br />
                <input type="checkbox" />
                <span>Remember Me</span>
                <br />
                <button className= " mt-2 mb-2 ms-5 border-1 rounded-3 w-50">SIGN UP</button>
                <br />
                <span >Alrady have a Account?</span>
                <NavLink to="/login" className= " ms-2 border-1 rounded-3 w-25">Login</NavLink>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Signup;
