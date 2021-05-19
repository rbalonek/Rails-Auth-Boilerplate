import React, { useState } from "react";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

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
        <h2>Login</h2>
        <div className="login-form-box">
          <form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin(formData);
            }}
          >
            <label>
              Username:
              <input
                name="username"
                type="text"
                value={username}
                onChange={handleChange}
                placeholder="BobTest1"
              />
            </label>
            <label style={{ position: "relative", left: "2px" }}>
              Password:
              <input
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                placeholder="123456"
              />
            </label>

            <button className="btn btn__primary btn-space">Login</button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
