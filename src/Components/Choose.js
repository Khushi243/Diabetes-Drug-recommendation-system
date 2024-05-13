import React from 'react'
import cloud from './images/cloud.png';
import man from './images/man.png';
import './Choose.css'
function Choose() {
  return (
    <div className='ChooseCard'>
        <h1>Why to choose us?</h1>
        <div className='itemcard'>
            <ul>
                <li>
                    <div className='item'>
                       <div className='item-info'>
                       <img src={cloud} alt='' class='center'/>
                            <div>
                                <h3>Improved Decision-Making Confidence</h3>
                            </div>
                        </div>
                        <p>we empower medical professionals to make informed treatment decisions with greater confidence.</p> 
                    </div>  
                </li>
                    <li>
                        <div className='item'>
                            <div className='item-info'>
                            <img src={man} alt=''/>
                                <div>
                                    <h3>Streamlined Workflow and Efficiency</h3>
                                </div>
                            </div>
                            <p>we save time by integrating functionalities like a secure patient portal and drug interaction checker.
                        </p>
                        </div>
                    </li>
                </ul>
            </div>         
        </div>
  )
}

export default Choose