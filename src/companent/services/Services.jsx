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
                        <h1>Taking Your Business to <br /> the Next Level</h1>
                    </div>
                    <div className='low'>
                        <div className='low_in'>
                            <Cart img={'./image/one.png'} name={'Business Plans'} info="I'm a paragraph.Click here to add your own text and edit me."/>
                            <Cart img={'./image/two.png'} name={'Accounting Services'} info="I'm a paragraph.Click here to add your own text and edit me."/>
                            <Cart img={'./image/uc.png'} name={'Finance Optimization'} info="I'm a paragraph.Click here to add your own text and edit me."/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Cart = ({img,name,info}) => {
    return (
        <>
            <div className='cart' data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <div className='low_in_img'>
                    <img src={img}></img>
                </div>
                <div className='low_in_text'>
                    <h3>{name}</h3>
                    <p>{info}</p>
                </div>
            </div>
        </>
    )
}

export const Number = () => {
    return (
        <>
            <div className='number'>
                <div className='number_in'>
                    <div className='nums'>
                        <div className='nam'>
                            <h1>We're Good with Numbers</h1>
                        </div>
                        <div className='sum'>
                            <Say say={15} text={"Years of Experience"}/>
                            <p className='point'></p>
                            <Say say={36} text={"Qualified Experts"}/>
                            <p className='point'></p>
                            <Say say={120} text={"Clients Every Year"}/>
                            <p className='point endpoint'></p>
                            <Say say={9} text={"Intl. Partners"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export const Say = ({say,text}) => {
    return (
        <>
            <div>
                <h1>{say}</h1>
                <h3>{text}</h3>
            </div>
        </>
    )
}
export default Services