import React from 'react';
import Header1 from '../../Header/header.js';
import Footer from '../../Header/footer.js';
import './style.css';
import single from '../../../images/single.png';
import onlyTeam from '../../../images/onlyTeam.png';
import contractorWithTeam from '../../../images/contractorWithTeam.png';
import { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { TextField } from "@material-ui/core";
import { createOrder } from '../../../actions/Workers/Orders/createOrders.js';
import { useDispatch } from 'react-redux';
const WorkersSearch=()=>{
    const [output,setOutput] = useState([]);
    const [hideInputs, setHideInputs] = useState(false);
    const [showForm, setHiddenForm] = useState(false);
    const [orderPlaced, setPlacedOrder] = useState({
        description: '',
        orderPlacer: '',
        orderReceiver: '',
        orderStatus:'UnAnswered',
    })
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
            return(<p >Team's Description:<p className='teamsDescrip'>{person.groupDescription}</p></p>)
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
    const toPlaceOrder = () =>{
        setHiddenForm(true);
    }
    const closeForm = () =>{
        setHiddenForm(false);
    }
    const dispatch = useDispatch();
    const [userdata] = useState(JSON.parse(localStorage.getItem('userData')));
    const dealersName = userdata.user.fullName;
    const handlePlacedOrder = async(e) =>{
        console.log('Inside Handle Placed Order ')
        e.preventDefault();
        dispatch(createOrder(orderPlaced))
        console.log(orderPlaced);
        alert("Order Got Placed...");
        setPlacedOrder({
            description: '',
            orderPlacer: '',
            orderReceiver: '',
            orderStatus: 'UnAnswered',
          });
    }

    return(
        <>
            <Header1/>
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
                                    <button onClick={toPlaceOrder} className='toOrderBtn'>To Order</button>
                                    <Modal isOpen={showForm} onRequestClose={closeForm}>
                                        <h2 className='modalHead'>Share some description about project</h2>
                                        <form autoComplete="off" onSubmit={handlePlacedOrder} className='modalForm'>
                                            
                                            <TextField
                                                required
                                                name="orderReceiverName"
                                                className='entrySection'
                                                type="string"
                                                variant="outlined"
                                                label="Enter Worker's Username To Whom You Want To Send Order..."
                                                value={orderPlaced.orderReceiver}
                                                onChange={(e) => setPlacedOrder({ ...orderPlaced, orderReceiver: e.target.value,orderPlacer: dealersName })}
                                            />
                                            <TextField
                                                required
                                                name="orderDescription"
                                                className='entrySection'
                                                type="string"
                                                variant="outlined"
                                                label="Enter Address And Description..."
                                                value={orderPlaced.description}
                                                onChange={(e) => setPlacedOrder({ ...orderPlaced, description: e.target.value })}
                                            />
                                            <button type='submit' size='large' className='modalBtn'>SUBMIT</button>
                                        </form>
                                    </Modal>
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