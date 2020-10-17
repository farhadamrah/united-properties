import React from 'react'
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './InvestmentPlans.css'


const InvestmentPlans = () => {
    return (
        <div>
            <form>
                <h3>Ho much are you planning to invest in this year?</h3>
                <Range min={10000} max={1000000} marks={{ 0: { label: '$10.000' } }} />


                <div className='question'>
                    <h3>Are you an accredited investor?</h3>
                    <button class="btn-yes">Yes</button>
                    <button class="btn-no">No</button>
                </div>




            </form>
        </div >
    )
}

export default InvestmentPlans;
