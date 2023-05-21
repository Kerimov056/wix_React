import React from 'react'
import './clients.scss'

const Clients = () => {
    return (
        <>
            <div className='clients'>
                <div className='up'>
                    <h2>OUR HAPPY CLIENTS</h2>
                </div>
                <div className='line'></div>
                <div className='low'>
                    <div className='one'>
                        <button type='button'>BAR</button>
                        <button type='button'>121</button>
                    </div>
                    <div className='two'>
                        <h1>HUNTER</h1>
                    </div>
                    <div className='there'>
                        <h1>Loco Graphix</h1>
                    </div>
                    <div className='fo'>
                        <h1>Mid Dreams</h1>
                    </div>
                    <div className='five'>
                        <h1>Mava Jones</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients