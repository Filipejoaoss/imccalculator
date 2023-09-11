import Button from "./Button"

import './ImcTable.css';

const ImcTable = ( { data, imc, info, infoClass, resetCalc } ) => {
  return (
    <div id="result-container">
        <p id="imc-number"> Your IMC: <span className={infoClass}> { imc } </span> </p>
        <p id="imc-info"> Current Situation: <span className={infoClass}> { info } </span> </p>
        <h3>Classifications Table: </h3>
        <div id="imc-table">
            <div className="table-header">
                <h4> IMC </h4>
                <h4> Classification </h4>
                <h4> Obesity </h4>
            </div>
            {data.map((item) => (
                <div className="table-data" key={item.info}>
                    <p> { item.classification } </p>
                    <p> { item.info } </p>
                    <p> { item.obesity } </p>
                </div>
            ))}
        </div>
        <Button id="back-btn" action={resetCalc} text="Back" />
    </div>
  )
}

export default ImcTable