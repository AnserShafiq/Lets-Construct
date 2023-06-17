import React from 'react';
import Header from '../../Header/header.js';
import Footer from '../../Header/footer.js';
import './style.css';
import single from '../../../images/single.png';
import onlyTeam from '../../../images/onlyTeam.png';
import contractorWithTeam from '../../../images/contractorWithTeam.png';
import { useState } from 'react';
import axios from 'axios';

const WorkersSearch=()=>{
    const [output,setOutput] = useState([]);
    const [hideInputs, setHideInputs] = useState(false);
    const handleSinglePersons = async(entry) =>{
        try {
            alert('Checking....')
            setHideInputs(true);
            const response = await axios.get(`/workers/singleWorkers`);
            setOutput(response.data);
          } catch (error) {
            console.error('Error fetching people:', error);
          }
    }
    const otherEntries = (person) =>{
        if(person.workType === 'Single_Worker')
        {
            return(
                <p>Work's As: {person.workCategories}</p>
            )
        }
        else{
            return(<p>Team's Description: {person.groupDescription}</p>)
        }
    }
    const handleOnlyTeam = async(entry) =>{
        try {
            alert('Checking....')
            setHideInputs(true);
            const response = await axios.get(`/workers/onlyTeam`);
            setOutput(response.data);
          } catch (error) {
            console.error('Error fetching people:', error);
          }
    }
    const handleContractorWithTeam = async(entry) =>{
        try {
            alert('Checking....')
            setHideInputs(true);
            const response = await axios.get(`/workers/contractorWithTeam`);
            setOutput(response.data);
          } catch (error) {
            console.error('Error fetching people:', error);
          }
    }
    return(
        <>
            <Header/>
            <div className='container'>
                <div className='content'>
                    <div className='pageLink'>
                        <h4>
                        ={'>'} <a href='/Customers/CustomersHome' className='linkBtn'>Customers</a> ={'>'} <a href='/Customers/CustomersHome/WorkersSearch' className='linkBtn'>Workers Or Labor</a>
                        </h4>
                    </div>
                    {!hideInputs && (
                        <div className='subSection'>
                            <div className='centerHeading'>
                                <h2>You Need Worker As.....</h2>
                            </div>
                            <div className='btnsSection'>
                                <img src={single} className='btnImg2' alt='singleWorker' onClick={()=>handleSinglePersons('singleWorkers')}/>
                                <img src={onlyTeam} className='btnImg2' alt='onlyTeam' onClick={()=>handleOnlyTeam('singleWorkers')}/>
                                <img src={contractorWithTeam} className='btnImg2' alt='contractorWithTeam' onClick={()=>handleContractorWithTeam('singleWorkers')}/>
                            </div>
                        </div>
                    )}
                    <div>
                    <span>{hideInputs }</span>
                    <span>
                        <div className='displayWorkers'>
                        {output.map((person) => {
                        console.log(person)
                        return (    
                            <div key={person.userName} className="boxDiv">
                                <div >
                                    <h3>Username: {person.userName}</h3>
                                    <p>Contact Number: {person.contactNumber}</p>
                                    <p>Email: {person.emailID}</p>
                                    <p>City: {person.city}</p>
                                    {otherEntries(person)}
                                </div>
                            </div>
                        )})}
                        </div>
                        </span>
                    </div>
                </div>
            <Footer className='footer'/>
            </div>
        </>
    );
}

export default WorkersSearch;