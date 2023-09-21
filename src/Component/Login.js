import React from "react";
import { NavLink } from "react-router-dom";
import { Lock } from "react-feather";

function Login() {
  return (
    <div className=" container-fluid">
      <div className=" row">
      <div className="col-6 d-flex justify-content-center align-items-center mt-5 signupimage ">
          <img className="w-75 h-100" src="https://knowledgemission.kerala.gov.in/img/official-login.jpg" />
        </div>  

        <div className="col-6 container-fluid  ">
          <div className=" col border border-3 rounded-5  h-50 w-50 d-flex flex-column align-items-center signupfrom1">

          <div className="row mb-2 mt-3 ">
              <Lock />
            </div>

            <div className="row mb-3 mt-2">
              <h4>Login Page</h4>
            </div>

            <div className="row signupform">
        
              <form className="ms-5">
                <input type="email" className= " mt-2 border-1 rounded-3 w-75" placeholder="  Email*" />
                <br />
               
                <input type="password" className= " mt-3 border-1 rounded-3 w-75" placeholder="  Passeord*" />
                <br />
                
                <button className= " mt-4 mb-2 ms-4 border-1 rounded-3 w-50">LOG IN</button>
                <br />
                <span >Alrady have a Account?</span>
                <NavLink to="/signup" className= " ms-2 border-1 rounded-3 w-25">SignUp</NavLink>
              </form>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Login;
