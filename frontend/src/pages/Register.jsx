import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const { name, email, password, passwordCheck } = formData;
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
          <FaUser /> Register
        </h1>
        <p>Please Create An Account</p>
      </section>
      <section className="form">
        <form action="">
          <div className="form-group">
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter Your Name "
            />
          </div>
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
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              id="passwordCheck"
              name="password2"
              value={passwordCheck}
              placeholder="Confirm Your Password"
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

export default Register;
