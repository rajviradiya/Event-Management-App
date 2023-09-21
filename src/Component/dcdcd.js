<div className="container-fluid header  bg-success header">
      <div className="row d-flex flex-row">

      <div className="col-2 ps-4 d-flex align-content-end headimage">
        <img className=" ps-5 p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYVhOa18gp3X0htN0BYWTZTG6_cYFmkZBgw&usqp=CAU"/>
      </div>

      <div className="col-10 m-0 p-0  Headlist ">
        <ul className=" list-inline d-flex justify-content-start ">
          <li >
            <NavLink className="nav" to="/">Home</NavLink>
          </li >
          <li>
            <NavLink className="nav"  to="/about">About</NavLink>
          </li>
          <li >
            <NavLink className="nav"  to="/event">Event</NavLink>
          </li>
          <li >
            <NavLink className="nav"  to="/gallary">Gallary</NavLink>
          </li>
          <li >
            <NavLink className="nav" to="/contact">Contact</NavLink>
          </li>
          <li >
            <NavLink className="nav"  to="/signup">Signup</NavLink>
          </li>
        </ul>
      </div>



      
.signup{
  width: 100%;
  height: 670px;
}


.signupimage{
  width: 50%;
  height: auto;
  float: left;
}
.signupimage img{
  width: 760px;
  height: 660px;
}

.signupPage{
  width: 50%;
  float: left;
  text-align: center;
  background-color: blue;

}

      </div>
    </div>





<div className="container-fluid signup bg-danger">
      <div className="row">

        <div className="m-0 p-0 col-6 signupimage ">
          <img src="https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg" />
        </div>

        <div className="col-6 m-0 p-0 container-fluid bg-danger justify-content-center">
            <div className=" col h-100 pt-5 d-flex flex-column align-items-center bg-dark-subtle">

                <div className="row mb-2 ">
                    <Lock />
                </div>

                <div className="row mb-3">
                    <h3>SignUp Page</h3>
                </div>

                <div className="row bg-danger-subtle signupform">
<div></div>
                      

<form className=""> 
<input type="text" placeholder="Name*" />
<br />
<input type="email" placeholder="Email*" />
<br />
<input type="radio" />
<span>Male</span>
<input type="radio" />
<span>Female</span>
<input type="radio" />
<span>Other</span>
<br />
<input type="number" placeholder="phone*" />
<br />
<input type="password" placeholder="passeord*" />
<br />
<input type="passeord" placeholder="confirm-Password*" />
<br />
<input type="checkbox" />
<span>Remember Me</span>
<br />
<button>SIGN UP</button>
<br />
<span>Alrady have a Account?</span>
<NavLink>Login</NavLink>
</form>


</div>

</div> 
</div>

</div>
</div>