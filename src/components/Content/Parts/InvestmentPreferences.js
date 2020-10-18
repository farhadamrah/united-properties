import React from 'react'
import './InvestmentPreferences.css'
import checkboxes from './checkboxes'
import RectangularCheckbox from '../../RectangularCheckbox/RectangularCheckbox'

const InvestmentPreferences = () => {
    return (
        <div>
            <form>
                <div>
                    <h3>What kind of real estate are you interested in?</h3>

                    <div className='checkboxes'>
                        {checkboxes.map(c => (
                            <RectangularCheckbox label={c.label} checked={c.checked} />
                        ))}
                    </div>

                </div>
            </form>
        </div>
    )
}

export default InvestmentPreferences;
