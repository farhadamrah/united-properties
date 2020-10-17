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


                    {/* <div className="ui four column grid">
                        <div className="column">Single family</div>
                        <div className="column">Residential multifamily</div>
                        <div className="column">Commercial retail</div>
                        <div className="column">Commercial industrial</div>
                        <div className="column">Commercial hospitality</div>
                        <div className="column">Commercial warehousing</div>
                        <div className="column">Commercial office</div>
                        <div className="column">Other</div>
                    </div> */}
                </div>
            </form>
        </div>
    )
}

export default InvestmentPreferences;
