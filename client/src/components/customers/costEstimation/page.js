import React from 'react';
import Header from '../../Header/header.js';
import Footer from '../../Header/footer.js';
import './style.css';
import { useState } from 'react';
import { TextField,Select, MenuItem ,InputLabel } from "@material-ui/core";
const CostEstimations=()=>{
    const [result,setResult]=useState(0);
    const [plotData, setPlotData] = useState({
        plotSize: Number,
        noOfFloors: Number,
        noOfRooms: Number,
        noOfWashrooms: Number,
        noOfLounges: Number,
        noOfKitchen: Number,
        needMatrial: '',
    });
    const calculateResult=()=>{
        // console.log(`=========> ${plotSize}`)
    }
    return(
        <>
            <Header/>
                <div maxwidth='lg'>
                    <div className='pageLink'>
                        <h4>
                            ={'>'} <a href='/Customers/CustomersHome' className='linkBtn'>Customers</a> ={'>'} <a href='/Customers/CustomersHome/CostEstimation' className='linkBtn'>Cost Estimation</a>
                        </h4>
                    </div>
                    <div className='centerHeading'>
                        <h2>Your's Construction Plan....</h2>
                    </div>
                    <div className='subSections'>
                        <form>
                            <div>
                            <TextField 
                                required name="plotSize" className='section1'
                                type="number" variant="outlined" label="Plot Size" value={plotData.plotSize} 
                                onChange={(e) => setPlotData({...plotData, plotSize: e.target.value})} />
                            <TextField 
                                required name="noOfFloors" className='section2'
                                type="number" variant="outlined" label="No Of Floors" value={plotData.noOfFloors} 
                                onChange={(e) =>  setPlotData({...plotData, noOfFloors: e.target.value})} />
                            <TextField 
                                required name="noOfRooms" className='section2'
                                type="number" variant="outlined" label="No Of Rooms" value={plotData.noOfRooms} 
                                onChange={(e) => setPlotData({...plotData, noOfRooms: e.target.value})} />
                            <TextField 
                                required name="noOfWashrooms" className='section2'
                                type="number" variant="outlined" label="No Of Washrooms" value={plotData.noOfWashrooms} 
                                onChange={(e) => setPlotData({...plotData, noOfWashrooms: e.target.value})} />
                            <TextField 
                                required name="noOfLounges" className='section3 ' 
                                type="number" variant="outlined" label="No Of Lounges" value={plotData.noOfLounges} 
                                onChange={(e) =>  setPlotData({...plotData, noOfLounges: e.target.value})} />
                            <TextField 
                                required name="noOfKitchens" className='section3' 
                                type="number" variant="outlined" label="No Of Kitchens" value={plotData.noOfKitchen} 
                                onChange={(e) => setPlotData({...plotData, noOfKitchen: e.target.value})} />
                            <InputLabel htmlFor="gender" className='section4'>Need Material</InputLabel>
                            <Select
                            required
                            name="needMaterial"
                            variant="outlined"
                            label="Need Material"
                            className='section4'
                            value={plotData.needMatrial}
                            // className={Classes.entryPoint2}
                            onChange={(e) => setPlotData({ ...plotData, needMatrial: e.target.value })}
                            >
                            
                            <MenuItem value="yes">Yes</MenuItem>
                            <MenuItem value="no">No</MenuItem>
                            </Select>
                            </div>
                            <button onClick={calculateResult}>SUBMIT</button>
                        </form>
                    </div>
                </div>
            <Footer/>
        </>
    );
}

export default CostEstimations;