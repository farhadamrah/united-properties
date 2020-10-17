import React from 'react'
import './RectangularCheckbox.css'

const RectangularCheckbox = ({label, checked}) => {
    return (
        <div className='checkbox-container'>
            <input type='checkbox'  checked={checked} />
            <p className='checkbox__label'>{label}</p>
        </div>
    )
}

export default RectangularCheckbox
