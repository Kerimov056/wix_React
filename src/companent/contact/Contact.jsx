import React from 'react'
import './contact.scss'
import { ImFacebook } from 'react-icons/im';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';


const Contact = () => {
  return (
    <>
        <div className='contact'>
            <div className='contact_in'>
                <div className='left'>
                    <div>
                        <h3>CONTACT</h3>
                        <h1>Let’s Work Together</h1>
                        <p>500 Terry Francine St. San Francisco, CA 94158</p>
                        <p>info@mysite.com</p>
                        <p>Tel: 123-456-7890</p>
                        <div>
                            <span><ImFacebook/> <AiOutlineTwitter/> <GrLinkedinOption/></span>
                        </div>
                    </div>
                </div>
                <div className='right'> 
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}



export default Contact