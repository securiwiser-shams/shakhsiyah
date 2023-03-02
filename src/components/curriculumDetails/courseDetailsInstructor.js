import { Link } from 'gatsby';
import React from 'react';

const CourseDetailsInstructor = () => {
    return (
        <div className="course-instructors">
            <h3>instructors</h3>
            <div className="instructors-heading">
                <div className="instructors-img w-img">
                    <Link to="/instructor-profile"><img src="/assets/img/course/farah-290x350.svg" alt="img not found" /></Link>
                </div>
                <div className="instructors-body">
                    <h5><Link to="/instructor-profile">Dr Farah Ahmed</Link></h5>
                    <span>Chair of Trustees and Director of Education and Research

.</span>
                    <div className="intructors-review">
                        <i className="fas fa-star"></i>
                        <span>4.7 (54 reviews)</span>
                    </div>
                    <div className="instructors-footer">
                        <i className="fas fa-desktop"></i>
                        <span>3 Coursess</span>
                        <i className="far fa-user-friends"></i>
                        <span>78,742 Students</span>
                    </div>
                </div>
            </div>
            <div className="intructors-content">
                <p>Farah Ahmed is Leverhulme Early Career Research Fellow at the Faculty of Education, 
                    University of Cambridge. She co-convenes the Intercultural and Conflict-transformation 
                    Dialogue’ strand of the Cambridge Educational Dialogue Research group. Her current 
                    project is: Rethinking Islamic education for British Muslim children: a philosophical 
                    investigation of dialogue in Islamic educational theory and an empirical study trialling 
                    dialogic pedagogy in UK madrasahs (supplementary schools). Farah has published widely on 
                    Islamic education and has worked for nineteen years on research driven curriculum development 
                    and teacher education for Muslim teachers.</p>
            </div>
        </div>
    );
};

export default CourseDetailsInstructor;