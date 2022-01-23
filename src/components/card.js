import React from 'react';
import { useParams } from 'react-router';


const Card = () => {
    let username  = useParams();
    return (
        <div 
            className='ui raised very padded text container segment'
            style={{marginTop:'80px'}}
        >
            <h3 className='ui header'>Card of {username.user}</h3>
        
        </div>
    );
}

export default Card;