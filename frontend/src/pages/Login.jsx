import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {  email, password,  } = formData;
  const onChange = (event) => {
    setFormData((prevState) => (
      {
        ...prevState ,
        [event.target.name] : event.target.value
      }
    ))
  };
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Sign In To Your  Account</p>
      </section>
      <section className="form">
        <form action="">
       
          <div className="form-group">
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter Your Email "
            />
          </div>
          <div className="form-group">
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter Your Password "
            />
          </div>
       
          <div className="form-group">
          <button className="btn btn-block" type="submit"> Register</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
