import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { pb } from "../../pocketBase";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const savedUserData = await pb
        .collection("users")
        .authWithPassword(formData.email, formData.password);
      if (pb.authStore.token === savedUserData.token) {
        navigate("/main");
      }
    } catch (err) {
      console.log(err);
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="input-login"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password </label>

          <input
            className="input-login"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
