import React from "react";
import useStyles from './styles.js';

const Footer = () =>{
    const Classes = useStyles();
    return(
        <footer className={Classes.Footer}>
                <p className={Classes.footerText}>Copyright © 2023 Let's Construct Inc. All rights reserved.</p>
        </footer>
    );
};
export default Footer;