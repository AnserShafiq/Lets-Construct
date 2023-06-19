import React,{useEffect} from "react";
import { TextField, Button, Typography, Paper} from "@material-ui/core";
import { useState } from "react";
import useStyles from './stylesForSignUp.js';
import { useDispatch, useSelector } from 'react-redux';
import { createProductDealer, fetchProductDealerUsernames } from '../../actions/ProductDealers/signUp.js'

const Form = () => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [newUserData, setUserData] = useState({
    userName: '',
    bussinessTitle:'',
    nationalId: Number,
    contactNumber: Number,
    emailID: '',
    area:'',
    city: '',
    password: '',
});
  const Classes = useStyles();

  const dispatch = useDispatch();

  const productDealerUsernames = useSelector((state) => state.productDealersUsernames);
  console.log(`Sign Up Form ===> ${productDealerUsernames}`)
  
  useEffect(() => {
    dispatch(fetchProductDealerUsernames());
  }, [dispatch]);
  
  const checkUsernameUnique = (username) => {
    return !productDealerUsernames.includes(username);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const isUsernameUnique = checkUsernameUnique(newUserData.userName);
    
    if (isUsernameUnique) {
      dispatch(createProductDealer(newUserData));
      window.location.reload();
    } 
    else {
      alert('Username is already taken. So refil the form with unique username');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkEmail = (e) => {
    const email = e.target.value;
    setIsValidEmail(validateEmail(email));
    setUserData({ ...newUserData, emailID: email });
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
        <TextField 
        required 
        className={Classes.entryPoint} 
        name="userName" 
        variant="outlined" 
        label="Username" 
        value={newUserData.userName} 
        onChange={(e) => setUserData({ ...newUserData, userName: e.target.value })} 
        />
        <TextField required className={Classes.entryPoint} name="bussinessTitle" variant="outlined" label="Bussiness Title" value={newUserData.bussinessTitle} onChange={(e) => setUserData({ ...newUserData, bussinessTitle: e.target.value })} />
        <TextField required name="nationalID" className={`${Classes.numbersArea} ${Classes.entryPoint} `} type="number" variant="outlined" label="National ID" value={newUserData.nationalId} onChange={(e) => setUserData({ ...newUserData, nationalId: e.target.value })} />
        <TextField required name="contactNumber" variant="outlined" className={`${Classes.numbersArea} ${Classes.entryPoint} `} type="number" label="Contact Number" value={newUserData.contactNumber} onChange={(e) => setUserData({ ...newUserData, contactNumber: e.target.value })} />
        <TextField required name="email" variant="outlined" type="email" label="E-mail" className={Classes.entryPoint} value={newUserData.emailID} onChange={checkEmail} error={!isValidEmail} helperText={!isValidEmail ? 'Please enter a valid email address' : ''} />
        <TextField required name="area" variant="outlined" label="Area Deal's In" value={newUserData.area} className={Classes.entryPoint} onChange={(e) => setUserData({ ...newUserData, area: e.target.value })} />
        <TextField required name="city" variant="outlined" label="City" value={newUserData.city} className={Classes.entryPoint} onChange={(e) => setUserData({ ...newUserData, city: e.target.value })} />
        <TextField required name="password" variant="outlined" type="password" label="Password - Characters Should Be More Than 6" value={newUserData.password} className={Classes.entryPoint} onChange={checkPassword} error={!isValidPassword} helperText={!isValidPassword ? 'Password should have a length of at least six characters' : ''} />
        
     
        <div className={Classes.FormBtns}>
          <Button className={Classes.buttonSubmit} variant='contained' color="primary" fullWidth type="submit" onClick={clear} size='large'>Submit</Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
