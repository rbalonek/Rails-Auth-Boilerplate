import React, { useState } from "react";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="auth-container">
      <hr />

      <div className="login-form__container">
        <h2>Register</h2>
        <div className="login-form-box">
          <form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister(formData);
            }}
          >
            <label>
              Username:
              <input
                name="username"
                type="text"
                value={username}
                onChange={handleChange}
              />
            </label>
            <label style={{ position: "relative", left: "17px" }}>
              Email:
              <input
                name="email"
                type="text"
                value={email}
                onChange={handleChange}
              />
            </label>
            <label style={{ position: "relative", left: "2px" }}>
              Password:
              <input
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
              />
            </label>
            <button
              style={{ position: "relative", top: "15px" }}
              className="btn btn__primary"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
