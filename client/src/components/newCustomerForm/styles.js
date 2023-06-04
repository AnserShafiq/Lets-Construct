import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#688bba',
    borderRadius: '15%',
    marginBottom:'20px',
  },
  entryPoint:{
    width:'96%',
  },
  numbersArea:{
    '& input[type=number]': {
      '-moz-appearance': 'textfield',
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
    },
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',

  },
  formHead:{
    textAlign: 'center',
    fontFamily:'sans-serif',
    fontWeight: '600',
    color:'#BFBFBF',
    fontSize: '25px',
    letterSpacing: '0.2rem',
  },
  FormBtns:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'Center',
  },
  buttonSubmit: {
    marginBottom: 5,
    width:'50%',
    alignSelf:'center',
  },
  secondBtn:{
    width:'50%',
    backgroundColor: 'mediumBlue',
  },
}));