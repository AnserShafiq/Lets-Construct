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
    const [singleCheck, showSingleHead] = useState(false);
    const [team, showTeamHead] = useState(false);
    const [contractor, showContractorHead] = useState(false);
    const [output,setOutput] = useState([]);
    const [hideInputs, setHideInputs] = useState(false);
    const [showForm, setHiddenForm] = useState(false);
    const [orderPlaced, setPlacedOrder] = useState({
        description: '',
        orderPlacer: '',
        orderReceiver: '',
        addressOfOrder:'',
        orderStatus:'UnAnswered',
    })
    const handleSinglePersons = async(entry) =>{
        try {
            alert('Checking....')
            setHideInputs(true);
            showSingleHead(true);
            showTeamHead(false);
            showContractorHead(false);
            
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
                <p><span className='heading'>Work's As:</span> {person.workCategories}</p>
            )
        }
        else{
            // Teams Description
            return(<p><span className='heading'>Team's Description:</span><p className='teamsDescrip'>{person.groupDescription}</p></p>)
        }
    }
    const handleOnlyTeam = async(entry) =>{
        try {
            showSingleHead(false);
            showTeamHead(true);
            showContractorHead(false);
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
            showSingleHead(false);
            showTeamHead(false);
            showContractorHead(true);
            alert('Checking....')
            setHideInputs(true);
            const response = await axios.get(`/workers/contractorWithTeam`);
            setOutput(response.data);
          } catch (error) {
            console.error('Error fetching people:', error);
          }
    }
    const toPlaceOrder = (person) =>{
        orderPlaced.orderReceiver = person.userName;
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
            addressOfOrder:'',
            orderStatus: 'UnAnswered',
          });
        closeForm();
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
                                <img src={onlyTeam} className='btnImg2' alt='onlyTeam' onClick={()=>handleOnlyTeam('onlyTeam')}/>
                                <img src={contractorWithTeam} className='btnImg2' alt='contractorWithTeam' onClick={()=>handleContractorWithTeam('contractorWithTeam')}/>
                            </div>
                        </div>
                    )}
                    <div>
                    <span>{hideInputs }</span>
                    <span>
                        {singleCheck === true &&(
                            <div className='pageHead'>
                                <h3>Single Worker's</h3>
                            </div>
                        )}
                        {team === true &&(
                            <div className='pageHead'>
                                <h3>Teams Of Worker's</h3>
                            </div>
                        )}
                        {contractor === true &&(
                            <div className='pageHead'>
                                <h3>Contractors With Team</h3>
                            </div>
                        )}

                        <div className='displayWorkers'>
                        {output.map((person) => {
                        // console.log(person)
                        return (    
                            <div key={person.userName} className="boxDiv">
                                <div >
                                    <h3>Username: {person.userName}</h3>
                                    <p ><span className='heading'>Contact Number:</span> {person.contactNumber}</p>
                                    <p ><span className='heading'>Email:</span> {person.emailID}</p>
                                    <p ><span className='heading'>City:</span> {person.city}</p>
                                    {otherEntries(person)}
                                    <button onClick={()=>toPlaceOrder(person)} className='toOrderBtn'>To Order</button>
                                    <Modal isOpen={showForm} onRequestClose={closeForm}>
                                        <h2 className='modalHead'>Share some description about project</h2>
                                        <form autoComplete="off" onSubmit={handlePlacedOrder} className='modalForm'>
                                            
                                            <TextField
                                                required
                                                name="addressOfOrder"
                                                className='entrySection'
                                                type="string"
                                                variant="outlined"
                                                label="Enter Your's Address"
                                                value={orderPlaced.addressOfOrder}
                                                onChange={(e) => setPlacedOrder({ ...orderPlaced, addressOfOrder: e.target.value,orderPlacer: dealersName })}
                                            />
                                            <TextField
                                                required
                                                name="orderDescription"
                                                className='entrySection'
                                                type="string"
                                                variant="outlined"
                                                label="Describe Work..."
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