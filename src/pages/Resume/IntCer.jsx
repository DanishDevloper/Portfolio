import React from 'react'

const IntCer = ({title,duration,description}) =>{
    return(
        <li className='timeline-item'>
            <h4 className='h4 timeline-item-title'>{title}</h4>
            <span>{duration}</span>
            <p className='timeline-text'>{description}</p>
        </li>
    )
} 

export default IntCer