import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Modal from './modal';

const Contact = (props) => {
    // const navigate = useNavigate();
    // setTimeout( () => {
        // navigate("/about")
    // }, 2000)

    return(
        <div>
            <Modal />
            <div 
                className='ui raised very padded text container segment'
                style={{marginTop:'80px'}}
            >
                <Link to='/alex' className='ui header'>Alex</Link>
                <p>This is Contact page. fbvijhcikjd cpfbvc ikjpfd
                    x bvfdouibv kcj pgibvpo ugfd</p>
            </div>

            <div 
                className='ui raised very padded text container segment'
                style={{marginTop:'80px'}}
            >
                <Link to='/bob' className='ui header'>Bob</Link>
                <p>This is Contact page. fbvijhcikjd cpfbvc ikjpfd
                    x bvfdouibv kcj pgibvpo ugfd</p>
            </div>

            
        </div>

    )
}

export default Contact