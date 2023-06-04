import React from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useState } from "react";
import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/newCustomerUser.js';

const Form = () => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [newUserData, setUserData] = useState({
    fullName: '',
    nationalId: Number,
    contactNumber: Number,
    email: '',
    address: '',
    password: '',
    gender: ''
  });

  const Classes = useStyles();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createUser(newUserData));
    window.location.reload();
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkEmail = (e) => {
    const email = e.target.value;
    setIsValidEmail(validateEmail(email));
    setUserData({ ...newUserData, email });
  };

  const checkPassword = (e) => {
    const password = e.target.value;
    setIsValidPassword(password.length >= 6);
    setUserData({ ...newUserData, password });
  };

  const clear = () => {
    if (isValidEmail && isValidPassword) {
      window.location.reload();
    } else {
      alert('Please enter a valid email and a password with a length of at least six characters.');
    }
  };

  return (
    <Paper className={Classes.paper}>
      <form autoComplete="off" validate='true' className={`${Classes.root} ${Classes.Form}`} onSubmit={handleSubmit}>
        <Typography variant='h6' className={Classes.formHead}>To Create New ID</Typography>
        <TextField required className={Classes.entryPoint} name="userName" variant="outlined" label="UserName" value={newUserData.fullName} onChange={(e) => setUserData({ ...newUserData, fullName: e.target.value })} />
        <TextField required name="nationalID" className={`${Classes.numbersArea} ${Classes.entryPoint} `} type="number" variant="outlined" label="National ID" value={newUserData.nationalId} onChange={(e) => setUserData({ ...newUserData, nationalId: e.target.value })} />
        <TextField required name="contactNumber" variant="outlined" className={`${Classes.numbersArea} ${Classes.entryPoint} `} type="number" label="Contact Number" value={newUserData.contactNumber} onChange={(e) => setUserData({ ...newUserData, contactNumber: e.target.value })} />
        <TextField required name="email" variant="outlined" type="email" label="E-mail" className={Classes.entryPoint} value={newUserData.email} onChange={checkEmail} error={!isValidEmail} helperText={!isValidEmail ? 'Please enter a valid email address' : ''} />
        <TextField required name="address" variant="outlined" label="Address" value={newUserData.address} className={Classes.entryPoint} onChange={(e) => setUserData({ ...newUserData, address: e.target.value })} />

        <TextField required name="password" variant="outlined" type="password" label="Password - Characters Should Be More Than 6" value={newUserData.password} className={Classes.entryPoint} onChange={checkPassword} error={!isValidPassword} helperText={!isValidPassword ? 'Password should have a length of at least six characters' : ''} />

        <TextField required name="gender" variant="outlined" label="Gender" value={newUserData.gender} className={Classes.entryPoint} onChange={(e) => setUserData({ ...newUserData, gender: e.target.value })} />
        <div className={Classes.FormBtns}>
          <Button className={Classes.buttonSubmit} variant='contained' color="primary" fullWidth type="submit" onClick={clear} size='large'>Submit</Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
