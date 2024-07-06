import React from 'react'

const TimelineItem = ({title,mark, date, description}) =>{
    return(
        <li className='timeline-item'>
            <h4 className='h4 timeline-item-title'>{title}</h4>
            <p className='timeline-text'>{mark}</p>
            <span>{date}</span>
            <p className='timeline-text'>{description}</p>
        </li>
    )
} 

export default TimelineItem