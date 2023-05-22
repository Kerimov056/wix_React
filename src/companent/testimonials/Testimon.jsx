import React, { useState, useEffect } from 'react';
import './testimon.scss';

const Testimon = () => {
    const [change, setChange] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (change === 3) {
                setChange(1);
            } else {
                setChange(change + 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [change]);

    const slide = (num) => {
        setChange(num);
    };

    return (
        <>
            <div className='caursel'>
                <div className='caursel_in'>
                    <h3>TESTIMONIALS</h3>
                    <h1>“I'm a testimonial. Click to <br /> edit me and add text”</h1>
                    <h4 style={{ display: change === 1 ? "block" : "none" }}>Josh Phillips</h4>
                    <h4 style={{ display: change === 2 ? "block" : "none" }}>Gabriella Spring</h4>
                    <h4 style={{ display: change === 3 ? "block" : "none" }}>Louise Maxwell</h4>
                    <h5>Company name</h5>
                    <div>
                        <p className={change === 1 ? "active" : ""} style={{ opacity: change === 1 ? 1 : 0.6 }} onClick={() => slide(1)}></p>
                        <p className={change === 2 ? "active" : ""} style={{ opacity: change === 2 ? 1 : 0.6 }} onClick={() => slide(2)}></p>
                        <p className={change === 3 ? "active" : ""} style={{ opacity: change === 3 ? 1 : 0.6 }} onClick={() => slide(3)}></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimon;
