import React, { useState } from 'react'
import Content from '../Content/Content';
import data from '../data';
import Menu from '../Menu/Menu';
import './App.css'

const App = () => {
    const [currentStep, setcurrentStep] = useState(2);
    const { heading, description, mainPart, quote } = data[currentStep];


    const handleNextButtonClick = () => {
        setcurrentStep(currentStep + 1);
    }

    const handlePreviousButtonClick = () => {
        setcurrentStep(currentStep - 1);
    }

    const handleFinishButtonClick = () => console.log("Finish")



    return (
        <div className='App'>
            <Menu quote={quote} />
            <Content step={currentStep + 1}
                handlePreviousButtonClick={handlePreviousButtonClick}
                handleNextButtonClick={handleNextButtonClick}
                heading={heading}
                description={description}
                mainPart={mainPart}
                handleFinishButtonClick={handleFinishButtonClick}
            />
        </div>
    )
}

export default App;
