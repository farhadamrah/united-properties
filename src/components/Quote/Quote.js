import React from 'react'
import { ReactComponent as QuotationMark } from '../../assets/SVGs/quotation-mark.svg'
import { ReactComponent as Up } from '../../assets/SVGs/up.svg'
import './Quote.css'

const Quote = ({ quote }) => {
    return (
        <div className='quote'>

            <p className='quote__content'>
                {quote.content}
            </p>

            <div className='author'>
                <p className='author__name'>{quote.author.name}</p>
                <p className='author__job'>{quote.author.job}</p>
            </div>

            <div className="quotation-mark">
                <QuotationMark />
            </div>

            <div className='up'>
                <Up />
            </div>

        </div>
    )
}

export default Quote
