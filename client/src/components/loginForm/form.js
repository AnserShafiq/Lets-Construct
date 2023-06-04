// // LoginForm.js

// import React, { useState } from 'react';
// import useStyles from './styles.js';

// const LoginForm = () => {
//   const [fullName, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const Classes = useStyles();
//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Send the login request to the backend API
//     try {
//       const response = await fetch('/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ fullName, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Login successful
//         console.log(data.message);
//         alert("Login Successfull");
//         window.open('/Customers/CustomersHome');
//         setError('');
//       } else {
//         // Login failed
//         setError(data.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setError('Internal server error');
//     }
//   };

//   return (
//     <div className={Classes.formBody}>
//       <h1 className={Classes.formHeading}>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label className={Classes.labelOfUserName} htmlFor="fullName">UserName:</label>
//           <input
//             className={Classes.inputSection}
//             type="text"
//             id="fullName"
//             value={fullName}
//             onChange={handleUsernameChange}
//           />
//         </div>
//         <div>
//           <label className={Classes.labelOfUserName} htmlFor="password">Password:</label>
//           <input
//             className={Classes.inputSection}
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         {error && <p>{error}</p>}
//         <button className={Classes.LoginBtn}type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions/loginUsers.js';
import useStyles from './styles.js';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the login request to the backend API
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(response);
      const data = await response.json();

      if (response.ok) {
        // Login successful
        console.log(data.message);
        alert("Login Successful");
        window.open('/Customers/CustomersHome');
        setError('');
      } else {
        // Login failed
        setError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Internal server error');
    }
    dispatch(loginUser(email, password));
  };

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" className={`${classes.root} ${classes.Form}`} onSubmit={handleSubmit}>
        <Typography variant='h6' className={classes.formHead}>Login</Typography>
        <TextField
          required
          name="email"
          variant="outlined"
          type="email"
          label="Email"
          className={classes.entryPoint}
          value={email}
          onChange={handleEmailChange}
          error={email !== '' && !isEmailValid()}
          helperText={email !== '' && !isEmailValid() ? 'Invalid email address' : ''}
        />
        <TextField
          required
          name="password"
          variant="outlined"
          type="password"
          label="Password"
          className={classes.entryPoint}
          value={password}
          onChange={handlePasswordChange}
        />

        {error && (
          <Typography variant="body2" color="error" className={classes.errorMsg}>
            {error}
          </Typography>
        )}

        <div className={classes.FormBtns}>
          <Button className={classes.buttonSubmit} variant='contained' color="primary" fullWidth type="submit" size='large'>Login</Button>
        </div>
      </form>
    </Paper>
  );
};

export default LoginForm;

