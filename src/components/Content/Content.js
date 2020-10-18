import React from 'react'
import './Content.css'


const Content = ({ step, handlePreviousButtonClick, handleNextButtonClick, handleFinishButtonClick, heading, description, mainPart }) => {
    return (
        <div className='content'>
            <div className='content__container'>
                <header className='content__header'>
                    <span className='grey-color'>STEP {step} OF 3</span>
                    <span className='span__help grey-color'>Lost or have trouble? <a className='blue-color' href='#'>Get help</a></span>
                </header>

                <main className='main'>
                    <div className='main__header'><h1>{heading}</h1>
                        <p className='description grey-color'>{description}</p>
                    </div>
                    <div className='main__content'>
                        {mainPart}
                    </div>
                </main>

                <div className='control-buttons'>
                    <a href='#' onClick={handlePreviousButtonClick} className='control__buttons--previous blue-color'>Back to the previous step</a>
                    <button onClick={handleNextButtonClick} className='ui button skip'>Skip for now</button>
                    <button onClick={step < 3 ? handleNextButtonClick : handleFinishButtonClick} className='ui primary button next'>{step < 3 ? 'Next step' : 'Finish'}</button>
                </div>
            </div>
        </div >
    )
}

export default Content
