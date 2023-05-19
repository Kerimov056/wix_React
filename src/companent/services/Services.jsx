import React from 'react'
import './services.scss'
import { BsCircleFill } from 'react-icons/bs';


const Services = () => {
    return (
        <>
            <div className='services'>
                <div className='services_in'>
                    <div className='up'>
                        <h4>SERVICES</h4>
                        <h1>Taking Your Business to <br/> the Next Level</h1>
                    </div>
                    <div className='low'>
                        <div>
                            <span><BsCircleFill /></span>
                            <span><BsCircleFill /></span>
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services