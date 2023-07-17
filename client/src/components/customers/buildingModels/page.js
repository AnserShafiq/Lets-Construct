import React from 'react';
import Header1 from '../../Header/header.js';
import Footer from '../../Header/footer.js';
import house1 from '../../../images/3M2F.PNG';
import house2 from '../../../images/3M1F.PNG';

import './styles.css';

const BuildingModels = () =>{
    return(
        <>
            <Header1 />
            <div className='pageLink'>
                <h4>
                    =&gt; <a href='/Customers/CustomersHome' className='linkBtn'>Customers</a> =&gt; <a href='/Customers/CustomersHome/BuildingModels' className='linkBtn'>Building Models</a>
                </h4>
            </div>
            <h2 className='mainHeading'>Building Models</h2>
            <div className='outerDiv'>
                <h3 className='divHeading'>For 3 & 5 Marla House:</h3>
                <div className='innerDiv'>
                    <div className='cardModel'>
                        <img alt='3MarlaDoubleStory' width={400} height={300} src={house1} className='modelsImg'/>
                        <h3 className='modelName'>Double Story</h3>
                    </div>
                    <div className='cardModel'>
                        <img alt='3MarlaSingleStory' width={400} height={300} src={house2} className='modelsImg'/>
                        <h3 className='modelName'>Single Story</h3>
                    </div>
                </div>
            </div>
            <div className='outerDiv lowerDivs'>
                <h3 className='divHeading'>For 7 & 10 Marla House:</h3>
                <div className='innerDiv'>
                    <div className='cardModel'>
                        <img alt='3MarlaDoubleStory' width={400} height={300} src={house1} className='modelsImg'/>
                        <h3 className='modelName'>Double Story</h3>
                    </div>
                    <div className='cardModel'>
                        <img alt='3MarlaSingleStory' width={400} height={300} src={house2} className='modelsImg'/>
                        <h3 className='modelName'>Single Story</h3>
                    </div>
                </div>
            </div>
            <div className='outerDiv lowerDivs'>
                <h3 className='divHeading'>For 13 Marla & 1 Kanal House:</h3>
                <div className='innerDiv'>
                    <div className='cardModel'>
                        <img alt='3MarlaDoubleStory' width={400} height={300} src={house1} className='modelsImg'/>
                        <h3 className='modelName'>Double Story</h3>
                    </div>
                    <div className='cardModel'>
                        <img alt='3MarlaSingleStory' width={400} height={300} src={house2} className='modelsImg'/>
                        <h3 className='modelName'>Single Story</h3>
                    </div>
                </div>
            </div>
            <div className='outerDiv lowerDivs lastDiv'>
                <h3 className='divHeading'>For 2 Kanal House:</h3>
                <div className='innerDiv'>
                    <div className='cardModel'>
                        <img alt='3MarlaDoubleStory' width={400} height={300} src={house1} className='modelsImg'/>
                        <h3 className='modelName'>Double Story</h3>
                    </div>
                    <div className='cardModel'>
                        <img alt='3MarlaSingleStory' width={400} height={300} src={house2} className='modelsImg'/>
                        <h3 className='modelName'>Single Story</h3>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default BuildingModels;