import { useState } from 'react';

import Button from './Button'

import './ImcCalc.css'

const ImcCalc = ( { calcImc } ) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const clearForm = (e) => {
        e.preventDefault();
        setHeight("");
        setWeight("");
    }

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "")
    }

    const handleChangeHeight = (e) => {
        const updatedValue = validDigits(e.target.value);

        setHeight(updatedValue);
    } 

    const handleChangeWeight = (e) => {
        const updatedValue = validDigits(e.target.value);

        setWeight(updatedValue);
    }

    return (
        <div id='calc-container'>
            <h2>IMC Calculator</h2>
            <form id='imc-form'>
                <div className="form-inputs">
                    <div className='form-control'>
                        <label htmlFor="height"> Height: </label>
                        <input 
                            type="text" 
                            name="height" 
                            id="height" 
                            placeholder="Put your height (e.g 1,75m)" 
                            onChange={(e) => handleChangeHeight(e)} 
                            value={height}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="weight"> Weight: </label>
                        <input
                            type="text" 
                            name="weight" 
                            id="weight" 
                            placeholder="Put your weight (e.g 72kg)" 
                            onChange={ (e) => handleChangeWeight(e)} 
                            value={weight}
                        />
                    </div>
                </div>
                <div className="action-control">
                    <Button id='calc-btn' action={(e) => {calcImc(e, height, weight)}} text='Calculate' />
                    <Button id='clear-btn' action={clearForm} text='Clear' />
                </div>
            </form>
        </div>
    );
}

export default ImcCalc