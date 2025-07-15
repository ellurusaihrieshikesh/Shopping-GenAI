import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/Signup.module.css';

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const registerUser = async () => {
    console.log(data);
    const { name, email, password } = data;
    try {
      const response = await axios.post('/register', { name, email, password });
      navigate('/login');
    } catch (error) {
      if (error.response.status === 405 || error.response.status === 409) {
        // Display the error message to the user
        console.log(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    registerUser();
  };

  return (
      <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md" id="navbar">
        <a className="navbar-brand" href="#" id="logo">
        </a>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
        </div>
      </nav>

      <div className={styles.form}>
        <div>
          <h1 className={styles.formTitle}>User Registration</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.labelInputContainer}>
            <label className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={handleChange}
              className={styles.input}
            />

            <label className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className={styles.input}
            />

            <label className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <input
            id="button1"
            type="submit"
            value="Submit"
            className={styles.button1}
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
