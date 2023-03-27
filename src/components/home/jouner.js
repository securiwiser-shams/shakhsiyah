import React from 'react';
import RangoNumerico from './range';
const JounerSection = () => {
    return (
        <div className='jouney_container'>
            <div className='jouney_content'>
                <h1>Start Your Journey</h1>
                <p>Enter your child’s date of birth to discover the key steps to joining us </p>
                <form>
                    <RangoNumerico rango={[1, 31]} date="DD"/>
                    <RangoNumerico rango={[1, 12]} date="MM"/>
                    <RangoNumerico rango={[2023, 2006]} date="YY"/>
                </form>
            </div>
        </div>
    );
};

export default JounerSection;