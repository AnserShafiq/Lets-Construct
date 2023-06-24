import React,{useEffect} from "react";
import { TextField, Button, Typography, Paper, Select, MenuItem, InputLabel } from "@material-ui/core";
import { useState } from "react";
import useStyles from './styles.js';
import { useDispatch, useSelector } from 'react-redux';
import { createWorker, fetchWorkerUsernames } from '../../actions/Workers/new.js';

const Form = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [newUserData, setUserData] = useState({
    userName: '',
    nationalId: Number,
    contactNumber: Number,
    emailID: '',
    city: '',
    password: '',
    gender: '',
    workType:'',
    workCategories:'',
    groupDescription:'',
  });
  const Classes = useStyles();

//   const dispatch = useDispatch();
  const dispatch = useDispatch();

  const workerUsernames = useSelector((state) => state.workerUsernames);
  console.log(`Sign Up Form ===> ${workerUsernames}`)
  
  useEffect(() => {
    dispatch(fetchWorkerUsernames());
  }, [dispatch]);
  
  const checkUsernameUnique = (username) => {
    return !workerUsernames.includes(username);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const isUsernameUnique = checkUsernameUnique(newUserData.userName);
    
    if (isUsernameUnique && isValidEmail) {
      dispatch(createWorker(newUserData));
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
  const handleWorkTypeChange = (e) => {
    const workType = e.target.value;
    setUserData({ ...newUserData, workType, workCategories: '', groupDescription: '' });
  };
  const renderWorkCategoriesField = () => {
    if (newUserData.workType === 'Single_Worker') {
      return (
        <>
            <InputLabel htmlFor="workCategories" className={Classes.entryPoint}>Work Categories</InputLabel>
            <Select
            required
            name="workCategories"
            variant="outlined"
            label="Work Categories"
            value={newUserData.workCategories}
            className={Classes.entryPoint2}
            onChange={(e) => {
                setUserData({ ...newUserData, workCategories: e.target.value })
            }}
            >
            <MenuItem value="Plumber">Plumber</MenuItem>
            <MenuItem value="Labor">Labor</MenuItem>
            <MenuItem value="Electrician">Electrician</MenuItem>
            <MenuItem value="Painter">Painter</MenuItem>
            <MenuItem value="Carpenter">Carpenter</MenuItem>
            </Select>
        </>
      );
    }
    return null;
  };

  const renderGroupDescriptionField = () => {
    if (newUserData.workType === 'Group_Of_Workers' || newUserData.workType === 'Contractor_With_Workers') {
        
        return (
        <TextField
          required
          name="groupDescription"
          variant="outlined"
          label="Group Description"
          value={newUserData.groupDescription}
          className={Classes.entryPoint}
          onChange={(e) => {
            setUserData({ ...newUserData, groupDescription: e.target.value })
        }}/>
      );
    }
    return null;
  };
  return (
    <Paper className={Classes.paper}>
      <form autoComplete="off" validate='true' className={`${Classes.root} ${Classes.Form}`} onSubmit={handleSubmit}>
        <Typography variant='h6' className={Classes.formHead}>To Create New ID</Typography>
        <TextField required className={Classes.entryPoint} name="userName" variant="outlined" label="UserName" value={newUserData.userName} onChange={(e) => setUserData({ ...newUserData, userName: e.target.value })} />
        <TextField required name="nationalID" className={`${Classes.numbersArea} ${Classes.entryPoint} `} type="number" variant="outlined" label="National ID" value={newUserData.nationalId} onChange={(e) => setUserData({ ...newUserData, nationalId: e.target.value })} />
        <TextField required name="contactNumber" variant="outlined" className={`${Classes.numbersArea} ${Classes.entryPoint} `} type="number" label="Contact Number" value={newUserData.contactNumber} onChange={(e) => setUserData({ ...newUserData, contactNumber: e.target.value })} />
        <TextField required name="email" variant="outlined" type="email" label="E-mail" className={Classes.entryPoint} value={newUserData.emailID} onChange={checkEmail} error={!isValidEmail} helperText={!isValidEmail ? 'Please enter a valid email address' : ''} />
        <TextField required name="city" variant="outlined" label="City" value={newUserData.city} className={Classes.entryPoint} onChange={(e) => setUserData({ ...newUserData, city: e.target.value })} />

        <TextField required name="password" variant="outlined" type="password" label="Password - Characters Should Be More Than 6" value={newUserData.password} className={Classes.entryPoint} onChange={checkPassword} error={!isValidPassword} helperText={!isValidPassword ? 'Password should have a length of at least six characters' : ''} />
        <InputLabel htmlFor="gender" className={Classes.entryPoint}>Gender</InputLabel>
        <Select
          required
          name="gender"
          variant="outlined"
          label="Gender"
          value={newUserData.gender}
          className={Classes.entryPoint2}
          onChange={(e) => setUserData({ ...newUserData, gender: e.target.value })}
        >
          
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
        <InputLabel htmlFor="workType" className={Classes.entryPoint}>Work Type</InputLabel>
        <Select
          required
          name="worktype"
          variant="outlined"
          label="Work Type"
          value={newUserData.workType}
          className={Classes.entryPoint2}
          onChange={handleWorkTypeChange}
        >
          
          <MenuItem value="Single_Worker">Single Worker</MenuItem>
          <MenuItem value="Group_Of_Workers">Group Of Workers</MenuItem>
          <MenuItem value="Contractor_With_Workers">Contractor With Workers</MenuItem>
        </Select>
        
        {renderWorkCategoriesField()}

        {renderGroupDescriptionField()}
     
        <div className={Classes.FormBtns}>
          <Button className={Classes.buttonSubmit} variant='contained' color="primary" fullWidth type="submit" onClick={clear} size='large'>Submit</Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
