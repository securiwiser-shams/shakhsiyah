import React, { useState } from "react";
import arror_dowm from '../../../static/assets/img/arrow/arrow_down.svg'

function RangoNumerico(props) {
    const [divs, setDivs] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
  
    function generarDivs() {
      const num1 = props.rango[0];
      const num2 = props.rango[1];
      const rango = Math.abs(num1 - num2);
      const cantidadDivs = rango + 1;
      const numerosEnRango = Array.from({ length: cantidadDivs }, (_, index) => {
        return num1 < num2 ? num1 + index : num1 - index;
      });
      const divsGenerados = numerosEnRango.map((numero) => (
        <div
          key={numero}
          className="adm-select"
          data-val={numero.toString().padStart(2, "0")}
          onClick={() => {
            setSelectedValue(numero);
            setIsOpen(false);
          }}
        >
          {numero}
        </div>
      ));
      setDivs(divsGenerados);
      setIsOpen(!isOpen);
    }
  
    return (
      <div>
        <div onClick={generarDivs} className={`date_title ${isOpen ? 'best_border' : ''}`}>
          <label>{selectedValue || props.date} <img src={arror_dowm}/></label>
        </div>
        <div className={isOpen ? 'open' : 'date_Seleccion'}>{divs}</div>
      </div>
    );
  }
  
  export default RangoNumerico;
  