// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import styles from '../styles/Login.module.css';

// const Login = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState({ email: '', password: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const loginUser = async () => {
//     try {
//       console.log('Sending login request...');
//       const response = await axios.post('/login', data, {
//         withCredentials: true,
//       });
//       console.log('Login request successful.');
//       setData({ email: '', password: '' });
//       navigate('/');
//     } catch (error) {
//       console.log('Error occurred during login:', error);
//       if (error.response && (error.response.status === 404 || error.response.status === 409)) {
//         console.log('Login failed:', error.response.data.message);
//       } else {
//         console.log('Unexpected error:', error);
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     loginUser();
//   };

//   return (
    
//     <div className={styles.formContainer}>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div>
//           <h1>Login</h1>
//           <label>Email: </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={data.email}
//             onChange={handleChange}
//             className={styles.input}
//           />
//         </div>
        
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-md" id="navbar">
//         <a className="navbar-brand" href="#" id="logo">
//         </a>
//         <div className="collapse navbar-collapse" id="collapsibleNavbar">
//         </div>
//       </nav>
//         <div>
//           <label>Password: </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={data.password}
//             onChange={handleChange}
//             className={styles.input}
//           />
//         </div>
//         <button type="submit" className={styles.button}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const loginUser = async () => {
    try {
      const response = await axios.post('/login', data, {
        withCredentials: true,
      });
      setData({ email: '', password: '' });
      navigate('/');
    } catch (error) {
      if (error.response && (error.response.status === 404 || error.response.status === 409)) {
        console.error('Login failed:', error.response.data.message);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h1 className={styles.heading}>Login</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;