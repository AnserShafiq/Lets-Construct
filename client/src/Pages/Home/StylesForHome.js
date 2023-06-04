import { makeStyles } from "@material-ui/core";
export default makeStyles(()=>({
    A:{
        backgroundColor: '#7BA1D4',
        margin: '0',
    },
    BoxButton:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '15px',
        width:'30%',
        height: '15em',
    },
    btns:{
        width:'100%',
        height: '100%',
    },
    buttonsContainer:{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    welcomeSection:{
        color: 'darkBlue',
        textAlign:'center',
        margin:0,
        letterSpacing:10,
        fontSize: '3rem',
        fontWeight: 400,
    },
    buttonArea: {
        borderLeftStyle: 'solid',
        borderLeftWidth:'5px',
        borderColor: 'darkBlue',
        margin:'-3rem 0px 0 1.5rem',
        paddingLeft:'10px',
    },
    extraLine: {
        paddingLeft:'10px',
        fontSize:'2rem',
        color: 'darkBlue',
        fontFamily: 'sans-serif',
    },
    image:{
        marginTop:'-2%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        width: '20%',
        height: '20%',
    },
    Footer:{
        borderTopStyle: 'dashed',
        borderWidth:'2px',
        margin:'-10px 0px 0px 0px',
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