import React, { useState } from "react";
import RangoNumerico from './range';
import arrow_gold from '../../../static/assets/img/arrow/arrow_gold.svg'
import Jouney_content from './jouney_content'


const JounerSection = () => {
    const fechaActual = new Date();
    const yearActual = fechaActual.getFullYear();
    const yearMenos7 = yearActual - 17;
    const [isDisabled, setIsDisabled] = useState(true);

    function handleDisableClick() {
        var day = document.querySelector(".day");
        var month = document.querySelector(".month");
        var year = document.querySelector(".year");
        if( (day.innerHTML.includes('DD') || month.innerHTML.includes('MM') || year.innerHTML.includes('YY')) || isDisabled == false){
            setIsDisabled(true);
            if(day.innerHTML.includes('DD')){
                day.style.color = 'red';
            }
            if(month.innerHTML.includes('MM')){
                month.style.color = 'red';
            }
            if(year.innerHTML.includes('YY')){
                year.style.color = 'red';
            }
        }else{
            setIsDisabled(false);
            day.style.color = 'black';
            month.style.color = 'black';
            year.style.color = 'black';
        }
        if(isDisabled == false){
            setIsDisabled(true);
        }
    }
    return (
        <>
            <div className='jouney_container'>
                <div className='jouney_content'>
                    <h1>Start Your Journey</h1>
                    <p>Enter your child’s date of birth to discover the key steps to joining us </p>
                    <div className="date_container">
                        <RangoNumerico rango={[1, 31]} date="DD" selector="day"/>
                        <RangoNumerico rango={[1, 12]} date="MM" selector="month"/>
                        <RangoNumerico rango={[yearActual, yearMenos7]} date="YY" selector="year"/>
                        <div className='button_arrow' onClick={handleDisableClick}>
                            <img src={arrow_gold} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`adm-async-form-two ${isDisabled ? "disable" : "alive"}`} >
                <div className='adm-results-slide-out'>
                    <div className="close-adm-results" onClick={handleDisableClick}></div>
                    <Jouney_content/>
                </div>
            </div>
        </>
    );
};

export default JounerSection;