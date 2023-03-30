import React, { useState } from "react";
import RangoNumerico from './range';
import arrow_gold from '../../../static/assets/img/arrow/arrow_gold.svg'
import Jouney_content from './jouney_content'


const JounerSection = () => {
    const fechaActual = new Date();
    const yearActual = fechaActual.getFullYear();
    const yearMenos7 = yearActual - 17;
    const [isDisabled, setIsDisabled] = useState(true);
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    function handleDisableClick() {
        setIsDisabled(!isDisabled);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (isNaN(selectedDay) || isNaN(selectedMonth) || isNaN(selectedYear)) {
            setIsDisabled(true);
            alert('Please enter a valid input');
        } else {
            setIsDisabled(false);
        }
    }

    return (
        <>
            <div className='jouney_container'>
                <div className='jouney_content'>
                    <h1>Start Your Journey</h1>
                    <p>Enter your child’s date of birth to discover the key steps to joining us </p>
                    <form onSubmit={handleFormSubmit}>
                        <RangoNumerico rango={[1, 31]} date="DD" onChange={setSelectedDay} />
                        <RangoNumerico rango={[1, 12]} date="MM" onChange={setSelectedMonth} />
                        <RangoNumerico rango={[yearActual, yearMenos7]} date="YY" onChange={setSelectedYear} />
                        <div className='button_arrow' onClick={handleFormSubmit}>
                            <img src={arrow_gold} />
                        </div>
                    </form>
                </div>
            </div>
            <div className={`adm-async-form-two ${isDisabled ? "disable" : ""}`} >
                <div className='adm-results-slide-out'>
                    <div className="close-adm-results" onClick={handleDisableClick}></div>
                    <Jouney_content/>
                </div>
            </div>
        </>
    );
};

export default JounerSection;