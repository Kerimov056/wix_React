import React from 'react'
import './navbar.scss'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div>
                    <h1>BizBud</h1>
                    <div>
                        <span>Home</span>
                        <span>Services</span>
                        <span>About</span>
                        <span>Testimonials</span>
                        <span>Clients</span>
                        <span>Contact</span>
                    </div>
                    <button>Call Now</button>
                </div>
            </div>
        </>
    )
}

export default Navbar