import { makeStyles } from "@material-ui/core";
export default makeStyles(()=>({
    A:{
        backgroundColor: '#7BA1D4',
        margin: '0',
    },
    forFormOne:{
        width: '40%',
        marginLeft:'5rem',
    },
    forFormTwo:{
        width: '50%',
        marginRight: '-5rem',
    },
    forForms:{
        display: 'flex',
        flexDirection: 'row',
    },
    pageTag:{
        textAlign:'center',
        letterSpacing:'0.8rem',
        color:'#16427c',
        fontSize:'3rem',
        margin:'0px',
    },
    Footer:{
        borderTopStyle: 'dashed',
        borderWidth:'2px',
        margin:'4px -8px 0px -8px',
        padding:'0px',
        borderColor: 'darkBlue',
    },
    footerText:{
        textAlign: 'center',
        margin:0,
        padding:'0px',
        fontSize:'14px',
        color: 'darkBlue',
    },
}));