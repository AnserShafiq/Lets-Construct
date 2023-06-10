import React from 'react';
import Header from '../../Header/header.js';
import Footer from '../../Header/footer.js';
import './style.css';
import single from '../../../images/single.png';
import onlyTeam from '../../../images/onlyTeam.png';
import contractorWithTeam from '../../../images/contractorWithTeam.png';

const WorkersSearch=()=>{

    return(
        <>
            <Header/>
                <div maxwidth='lg'>
                    <div className='pageLink'>
                        <h4>
                        ={'>'} <a href='/Customers/CustomersHome' className='linkBtn'>Customers</a> ={'>'} <a href='/Customers/CustomersHome/WorkersSearch' className='linkBtn'>Workers Or Labor</a>
                        </h4>
                    </div>
                    <div className='centerHeading'>
                        <h2>You Need Worker As.....</h2>
                    </div>
                    <div className='subSections'>
                        <img src={single} className='btnImg2' alt='singleWorker' />
                        <img src={onlyTeam} className='btnImg2' alt='onlyTeam' />
                        <img src={contractorWithTeam} className='btnImg2' alt='contractorWithTeam' />
                    </div>
                </div>
            <Footer/>
        </>
    );
}

export default WorkersSearch;