import Button from './Button'
import './ImcCalc.css'

const ImcCalc = () => {
  return (
    <div id='calc-container'>
        <h2>IMC Calculator</h2>
        <form id='imc-form'>
            <div className="form-inputs">
                <div className='form-control'>
                    <label htmlFor="height"> Height: </label>
                    <input type="text" name="height" id="height" placeholder="Put your height (m)" />
                </div>
                <div className='form-control'>
                    <label htmlFor="weight"> Weight: </label>
                    <input type="text" name="weight" id="weight" placeholder="Put your weight (kg)" />
                </div>
            </div>
            <div className="action-control">
                <Button id='calc-btn' text='Calculate' />
                <Button id='clear-btn' text='Clear' />
            </div>
        </form>
    </div>
  );
}

export default ImcCalc