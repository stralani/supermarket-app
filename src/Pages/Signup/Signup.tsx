import React, { useState } from "react";
import "./Signup.scss";
import { useNavigate } from "react-router-dom";
import { pb } from "../../pocketBase";

type FormData = { name: string; email: string; password: string };

const Signup = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const go = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      username: formData.name,
      email: formData.email,
      emailVisibility: true,
      password: formData.password,
      passwordConfirm: formData.password,
      name: formData.name,
      gigs: [],
    };
    const record = await pb.collection("users").create(data);
    console.log(record);

    // (optional) send an email verification request
    // await pb.collection('users').requestVerification('test@example.com');

    // Optionally, you can redirect the user to another page or perform any other actions here
    go("/main");
    console.log("User signed up:", formData);
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="sign-up-input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="sign-up-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="sign-up-input"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="signup">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
