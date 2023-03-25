import React from 'react';

const JounerSection = () => {
    return (
        <div className='jouney_container'>
            <div className='jouney_content'>
                <h1>Start Your Journey</h1>
                <p>Enter your child’s date of birth to discover the key steps to joining us </p>
                <form>
                <input type="number" name="day" min="1" max="31" placeholder="DD ↓" />
                <input type="number" name="month" min="1" max="12" placeholder="MM ↓"  />
                <input type="number" name="year" min="1900" max="2099" placeholder="YY↓" />
                <input type="button" name="button"/>
                </form>
            </div>
        </div>
    );
};

export default JounerSection;