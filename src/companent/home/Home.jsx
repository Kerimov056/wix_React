import React, { useEffect } from 'react'
import './home.scss'
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        AOS.init({
            offset: 630,
            duration: 1800,
            delay: 260,
        });
        AOS.refresh();
    }, []);

    return (
        <>
            <div className='bod'>
                <div className='text' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <h1>The Power <br /> of Good Advice</h1>
                    <h3>I'm a paragraph. Click here to add your <br /> own text and edit me.</h3>
                    <button>Learn More</button>
                </div>
            </div>
        </>
    )
}

export default Home