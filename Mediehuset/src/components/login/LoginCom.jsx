 import style from './LoginCom.module.scss';
import React, { useState } from 'react';
import { CiAt } from "react-icons/ci";
import { IoIosLock } from "react-icons/io";

export function LoginComp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert(JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit} className={style.login}>
      <h2>Login</h2>
      <div className={style.inputContainer}>
      <span><CiAt /></span>
        <input
          className="input-field"
          type="email" // Use type="email" for email validation
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style.inputContainer}>
      <span>< IoIosLock /></span>
        <input
          className="input-field"
          type="password"
          placeholder="Indsat din adgangskode"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn">
        Login
      </button>
    </form>
  );
}
