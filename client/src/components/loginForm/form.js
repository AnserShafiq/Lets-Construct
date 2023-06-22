// LoginForm.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { loginUser} from '../../actions/loginCustomers.js';
import useStyles from './styles.js';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [fullName, setfullName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  
  // const handlefullNameChange = (e) => {
  //   setfullName(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Send the login request to the backend API
  //   try {
  //     const response = await fetch('/customers/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ fullName, password }),
  //     });
  //     console.log(response);
  //     const result2 = await response.json();

  //     if (response.status === 200) {

  //       const{_id} = result2.data;
  //       localStorage.setItem('userID',_id);
  //       localStorage.setItem('userData',JSON.stringify(result2.data))
  //       alert("Login Successful");
  //       dispatch(loginUser(fullName, password));
  //       toNavigate('/Customers/CustomersHome');

  //       setError('');
  //     } else {
  //       // Login failed
  //       setError(result2.message);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setError('Internal server error');
  //   }
  //   // dispatch(loginUser(fullName, password));
  // };
  const handlefullNameChange = (e) => {
    setfullName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('/customers/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ fullName, password }),
  //     });
  //     console.log(`On Login Form ===> ${response}`);
  //     const result = await response.json();
  //     if (response.status === 200) {
  //       // Login successful
  //       localStorage.removeItem('userID')
  //       console.log(result.data)
  //       // const { id }=result.data;
  //       // localStorage.setItem('userID',id)
  //       localStorage.setItem('userData', JSON.stringify(result.data))

  //       alert("Login Successful");
       
  //       dispatch(loginUser(fullName, password));

  //       navigation('/Customers/CustomersHome');
        
  //       setError('');
  //     } else {
  //       // Login failed
  //       setError(result.message);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setError('Internal server error');
  //   }
  //   dispatch(loginUser(fullName, password));
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/customers/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, password }),
      });
      console.log(`On Login Form ===> ${response}`);
      const result = await response.json();
      console.log('result:', result); // Add this line for debugging
      if (response.status === 200) {
        // Login successful
        localStorage.removeItem('userID');
        // const { id }=result.user;
        localStorage.setItem('userID',result.user._id);
        localStorage.setItem('userData', JSON.stringify(result));
        alert('Login Successful');
  
        dispatch(loginUser(fullName, password));
  
        navigation('/Customers/CustomersHome');
  
        setError('');
      } else {
        // Login failed
        setError(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Internal server error');
    }
    dispatch(loginUser(fullName, password));
  };
  

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" className={`${classes.root} ${classes.Form}`} onSubmit={handleSubmit}>
        <Typography variant='h6' className={classes.formHead}>Login</Typography>
        <TextField
          required
          name="fullName"
          variant="outlined"
          type="string"
          label="Username"
          className={classes.entryPoint}
          value={fullName}
          onChange={handlefullNameChange}
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

