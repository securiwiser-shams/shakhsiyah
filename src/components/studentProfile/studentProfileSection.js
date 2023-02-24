import { Link, navigate } from 'gatsby';
import React from 'react';
import StudentActiveCourses from './studentActiveCourses';
import StudentWishlistCourse from './studentWishlistCourse';
import UserEnrolledCourses from './userEnrolledCourses';

const StudentProfileSection = () => {
    return (
        <div className="course-details-area pt-120 pb-100">
            <div className="container">
                <div className="student-profile-author pb-30">
                    <div className="student-profile-author-img">
                        <img src="/assets/img/course/course-student.png" alt="img not found" />
                    </div>
                    <div className="student-profile-author-text">
                        <span>Hello,</span>
                        <h3 className='student-profile-author-name'>David Allberto</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-4">
                        <div className="student-profile-sidebar mb-30">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                                        data-bs-target="#home" type="button" role="tab" aria-controls="home"
                                        aria-selected="true"><i className="fas fa-tachometer-alt-fast"></i>
                                        Dashboard</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                        data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                                        aria-selected="false"><i className="fas fa-user"></i> My Profile</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab"
                                        data-bs-target="#contact" type="button" role="tab" aria-controls="contact"
                                        aria-selected="false"><i className="fas fa-graduation-cap"></i> Enrolled
                                        Courses</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="wishlist-tab" data-bs-toggle="tab"
                                        data-bs-target="#wishlist" type="button" role="tab" aria-controls="wishlist"
                                        aria-selected="false"><i className="fas fa-bookmark"></i> Wishlist</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="reviews-tab" data-bs-toggle="tab"
                                        data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews"
                                        aria-selected="false"><i className="fas fa-star"></i> Reviews</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="quiz-tab" data-bs-toggle="tab" data-bs-target="#quiz"
                                        type="button" role="tab" aria-controls="quiz" aria-selected="false"><i
                                            className="fas fa-cubes"></i> My Quiz Attempts</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="history-tab" data-bs-toggle="tab"
                                        data-bs-target="#history" type="button" role="tab" aria-controls="history"
                                        aria-selected="false"><i className="fas fa-cart-plus"></i> Order
                                        History</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="ques-tab" data-bs-toggle="tab" data-bs-target="#ques"
                                        type="button" role="tab" aria-controls="ques" aria-selected="false"><i
                                            className="fas fa-fist-raised"></i> Question &
                                        Answer</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="setting-tab" data-bs-toggle="tab"
                                        data-bs-target="#setting" type="button" role="tab" aria-controls="setting"
                                        aria-selected="false"><i className="fas fa-cog"></i> Settings</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button onClick={()=>{navigate("/login")}} className="nav-link" id="logout-tab" data-bs-toggle="tab"
                                        data-bs-target="#logout" type="button" role="tab" aria-controls="logout"
                                        aria-selected="false" ><i className="fas fa-sign-out-alt"></i> Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8">
                        <div className="student-profile-content">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel"
                                    aria-labelledby="home-tab">
                                    <h4 className='mb-25'>Dashboard</h4>
                                    <div className="student-profile-content-fact">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-6 col-md-4">
                                                <div className="counter-wrapper text-center mb-30">
                                                    <div className="counter-icon">
                                                        <div className="counter-icon-wrap">
                                                            <svg id="layer2" xmlns="http://www.w3.org/2000/svg"
                                                                width="50.897" height="56.553"
                                                                viewBox="0 0 50.897 56.553">
                                                                <path id="path3518"
                                                                    d="M26.3.646,1.793,13.689a.834.834,0,0,0,.048,1.522L16.07,21.734h21.4L51.7,15.211a.834.834,0,0,0,.05-1.522L27.244.647a.9.9,0,0,0-.473-.117A1.023,1.023,0,0,0,26.3.646Z"
                                                                    transform="translate(-1.323 -0.529)"
                                                                    fill="#5299d3" />
                                                                <path id="path3534"
                                                                    d="M16.66,2.911a35.363,35.363,0,0,0-7.55.718,9.782,9.782,0,0,0-2.456.841,3.065,3.065,0,0,0-.858.648,1.7,1.7,0,0,0-.451,1.106v7.4l-.077.893a17.977,17.977,0,0,1,22.781,0l-.077-.891v-7.4a1.7,1.7,0,0,0-.451-1.106,3.056,3.056,0,0,0-.856-.648,9.78,9.78,0,0,0-2.456-.841,35.363,35.363,0,0,0-7.55-.718Z"
                                                                    transform="translate(8.788 5.574)" fill="#a0c7e7" />
                                                                <path id="path3604"
                                                                    d="M9.111,3.629a9.782,9.782,0,0,0-2.456.841,3.065,3.065,0,0,0-.858.648,1.7,1.7,0,0,0-.451,1.106v7.4l-.077.893a17.891,17.891,0,0,1,1.962-1.388V6.225a1.7,1.7,0,0,1,.451-1.106A3.066,3.066,0,0,1,8.54,4.47,9.782,9.782,0,0,1,11,3.629a34,34,0,0,1,6.607-.7c-.316-.006-.62-.02-.943-.02a35.363,35.363,0,0,0-7.55.718Z"
                                                                    transform="translate(8.788 5.574)" fill="#74addc" />
                                                                <path id="rect3599"
                                                                    d="M18.372,4.5h1.885A14.107,14.107,0,0,1,34.395,18.636V33.67H4.233V18.636A14.107,14.107,0,0,1,18.372,4.5Z"
                                                                    transform="translate(6.135 9.64)" fill="#356287" />
                                                                <path id="path3610"
                                                                    d="M18.372,4.5A14.107,14.107,0,0,0,4.233,18.636V33.669H6.118V18.636A14.107,14.107,0,0,1,20.257,4.5Z"
                                                                    transform="translate(6.135 9.64)" fill="#2c5170" />
                                                                <path id="path3506"
                                                                    d="M15.317,11.649a14.343,14.343,0,0,0-13.2,14.545v1.451a.943.943,0,0,0,.939.946H46.418a.943.943,0,0,0,.939-.946V26.193a14.341,14.341,0,0,0-13.2-14.545H15.317Z"
                                                                    transform="translate(0.711 27.962)"
                                                                    fill="#5299d3" />
                                                                <path id="path3508"
                                                                    d="M7.827,9.922a.943.943,0,0,0-.948.939v8.909a.943.943,0,0,0,.948.939h9.42a.943.943,0,0,0,.946-.939V10.861a.943.943,0,0,0-.946-.939Z"
                                                                    transform="translate(12.912 23.538)" fill="#fca" />
                                                                <path id="path3510"
                                                                    d="M7.827,9.922a.943.943,0,0,0-.948.939v2.723a9.605,9.605,0,0,0,11.314,0V10.861a.943.943,0,0,0-.946-.939Z"
                                                                    transform="translate(12.913 23.538)"
                                                                    fill="#ffb889" />
                                                                <path id="path3512"
                                                                    d="M15.318,11.648a14.345,14.345,0,0,0-13.2,14.546v1.451a.943.943,0,0,0,.939.946H4.941A.943.943,0,0,1,4,27.645V26.194A14.345,14.345,0,0,1,17.2,11.648H15.318Z"
                                                                    transform="translate(0.711 27.961)"
                                                                    fill="#3385c8" />
                                                                <path id="path3514"
                                                                    d="M8.661,11.126,5.83,13.95a.943.943,0,0,0,0,1.329l6.6,6.6a.943.943,0,0,0,1.329,0l2.163-2.158,2.165,2.158a.943.943,0,0,0,1.329,0l6.6-6.6a.943.943,0,0,0,0-1.329L23.19,11.126a.942.942,0,0,0-1.337,0l-5.928,5.928L9.99,11.126a.933.933,0,0,0-1.329,0Z"
                                                                    transform="translate(9.523 25.911)"
                                                                    fill="#a0c7e7" />
                                                                <path id="path3520"
                                                                    d="M8.387,7.087a3.625,3.625,0,0,0-3.514,3.7A3.63,3.63,0,0,0,8.387,14.5a3.252,3.252,0,0,0,.808-.114c0-.007,0-.013,0-.02V7.189a3.341,3.341,0,0,0-.8-.1Z"
                                                                    transform="translate(7.773 16.275)"
                                                                    fill="#ffb889" />
                                                                <path id="path3522"
                                                                    d="M15.171,10.79A3.63,3.63,0,0,1,11.656,14.5a3.252,3.252,0,0,1-.808-.114c0-.007,0-.013,0-.02V7.189a3.341,3.341,0,0,1,.8-.1,3.625,3.625,0,0,1,3.514,3.7Z"
                                                                    transform="translate(23.084 16.275)" fill="#fca" />
                                                                <path id="path3528"
                                                                    d="M13.067,5.316a.943.943,0,0,0-.954.933A3.829,3.829,0,0,1,8.28,10.055H6.7a.943.943,0,0,0-.939.939v4.732a9.637,9.637,0,0,0,19.273,0V10.994a.943.943,0,0,0-.939-.939h-5.54a4.624,4.624,0,0,1-4.571-3.938.943.943,0,0,0-.919-.8Z"
                                                                    transform="translate(10.051 11.736)" fill="#fca" />
                                                                <path id="path3530" d="M4.8,3.167l-1.887,1v13.16H4.8Z"
                                                                    transform="translate(2.743 6.23)" fill="#eee" />
                                                                <path id="path3532"
                                                                    d="M3.592,6.614a.943.943,0,0,0-.946.939v8.511a.943.943,0,0,0,.946.946H5.473a.943.943,0,0,0,.939-.946V7.553a.943.943,0,0,0-.939-.939Z"
                                                                    transform="translate(2.067 15.063)"
                                                                    fill="#ffca28" />
                                                                <path id="path3537"
                                                                    d="M3.592,6.614a.943.943,0,0,0-.946.939v8.512a.943.943,0,0,0,.946.946H5.473a.943.943,0,0,1-.943-.946V7.553a.943.943,0,0,1,.943-.939Z"
                                                                    transform="translate(2.067 15.063)"
                                                                    fill="#ecb200" />
                                                                <path id="path3542"
                                                                    d="M6.7,6.646a.943.943,0,0,0-.939.939v4.731a9.613,9.613,0,0,0,6.526,9.1,10.337,10.337,0,0,1-5.374-9.068V7.255a1.014,1.014,0,0,1,.206-.609Z"
                                                                    transform="translate(10.051 15.145)"
                                                                    fill="#ffb889" />
                                                                <g id="Group_2872" data-name="Group 2872"
                                                                    transform="translate(11.311 50.9)">
                                                                    <path id="path3544"
                                                                        d="M5.483,14.818A.943.943,0,0,0,4.5,15.84v4.62H6.379V15.84A.943.943,0,0,0,5.483,14.818Z"
                                                                        transform="translate(-4.498 -14.817)"
                                                                        fill="#3385c8" />
                                                                    <path id="path3547"
                                                                        d="M12.891,14.818a.943.943,0,0,0-.981,1.022v4.62h1.878V15.84a.943.943,0,0,0-.9-1.022Z"
                                                                        transform="translate(14.485 -14.817)"
                                                                        fill="#3385c8" />
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="count-number">
                                                            <span className="counter">5</span>
                                                            <p>Online Courses</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-4">
                                                <div className="counter-wrapper text-center mb-30">
                                                    <div className="counter-icon">
                                                        <div className="counter-icon-wrap">
                                                            <svg id="online-course" xmlns="http://www.w3.org/2000/svg"
                                                                width="51.549" height="56.553"
                                                                viewBox="0 0 51.549 56.553">
                                                                <path id="Path_7050" data-name="Path 7050"
                                                                    d="M220.4,404.2h8.315v8.63H220.4Z"
                                                                    transform="translate(-198.783 -358.613)"
                                                                    fill="#726b93" />
                                                                <path id="Path_7051" data-name="Path 7051"
                                                                    d="M102.177,357.3v1.612a1.535,1.535,0,0,1-1.53,1.53H56.83a1.535,1.535,0,0,1-1.53-1.53V357.3Z"
                                                                    transform="translate(-52.964 -317.19)"
                                                                    fill="#988fc4" />
                                                                <path id="Path_7052" data-name="Path 7052"
                                                                    d="M102.177,77.142v29.021H55.3V77.142a1.535,1.535,0,0,1,1.53-1.53h7.042l-.993.5a1.831,1.831,0,0,0-1.016,1.635,1.81,1.81,0,0,0,1.016,1.635l3.959,1.974v7.661a2.825,2.825,0,0,0,2.242,2.756,47.052,47.052,0,0,0,19.34,0,2.825,2.825,0,0,0,2.242-2.756V81.357l1.144-.572v7.521a1.168,1.168,0,0,0,2.336,0V79.617l.479-.245a1.831,1.831,0,0,0,1.016-1.635A1.81,1.81,0,0,0,94.621,76.1l-.993-.5h7.042A1.548,1.548,0,0,1,102.177,77.142Zm-6.563,25.132a1.171,1.171,0,0,0-1.168-1.168H70.634a1.168,1.168,0,1,0,0,2.336H94.446A1.164,1.164,0,0,0,95.614,102.274ZM83.468,96.656A1.171,1.171,0,0,0,82.3,95.488H70.622a1.168,1.168,0,0,0,0,2.336H82.3A1.157,1.157,0,0,0,83.468,96.656Zm-16.934,0a1.171,1.171,0,0,0-1.168-1.168H63.031a1.168,1.168,0,1,0,0,2.336h2.336A1.157,1.157,0,0,0,66.535,96.656Zm0,5.617a1.171,1.171,0,0,0-1.168-1.168H63.031a1.168,1.168,0,1,0,0,2.336h2.336A1.157,1.157,0,0,0,66.535,102.274Z"
                                                                    transform="translate(-52.964 -68.389)"
                                                                    fill="#e3fbff" />
                                                                <path id="Path_7053" data-name="Path 7053"
                                                                    d="M193.229,134.9v6.493a.491.491,0,0,1-.374.479,44.718,44.718,0,0,1-18.382,0,.479.479,0,0,1-.374-.479V134.9l8.747,4.379a1.882,1.882,0,0,0,1.635,0Z"
                                                                    transform="translate(-157.89 -120.763)"
                                                                    fill="#726b93" />
                                                                <path id="Path_7054" data-name="Path 7054"
                                                                    d="M164.718,41.349l-13.909,6.96L136.9,41.349,150.809,34.4Z"
                                                                    transform="translate(-125.035 -32)"
                                                                    fill="#988fc4" />
                                                                <path id="Path_7055" data-name="Path 7055"
                                                                    d="M86.849,22.6V55.571a3.87,3.87,0,0,1-3.866,3.866H67.568v8.63h4.158a1.168,1.168,0,1,1,0,2.336h-21.3a1.168,1.168,0,1,1,0-2.336h4.158v-8.63H39.166A3.87,3.87,0,0,1,35.3,55.571V22.6a3.87,3.87,0,0,1,3.866-3.866H50.879l9.378-4.695a1.83,1.83,0,0,1,1.635,0l9.378,4.683H82.983A3.88,3.88,0,0,1,86.849,22.6ZM84.513,55.571V53.96H37.636v1.612a1.535,1.535,0,0,0,1.53,1.53H82.983A1.528,1.528,0,0,0,84.513,55.571Zm0-3.947V22.6a1.535,1.535,0,0,0-1.53-1.53H75.941l.993.5A1.831,1.831,0,0,1,77.95,23.21a1.81,1.81,0,0,1-1.016,1.635l-.479.245v8.689a1.168,1.168,0,0,1-2.336,0V26.247l-1.144.572V34.48a2.813,2.813,0,0,1-2.242,2.756,47.533,47.533,0,0,1-9.67,1,47.533,47.533,0,0,1-9.67-1,2.825,2.825,0,0,1-2.242-2.756V26.819l-3.959-1.974a1.831,1.831,0,0,1-1.016-1.635,1.81,1.81,0,0,1,1.016-1.635l.993-.5H39.166a1.535,1.535,0,0,0-1.53,1.53V51.624ZM61.074,30.159,74.983,23.21,61.074,16.25,47.165,23.2Zm9.565,4.309V27.975l-8.747,4.379a1.882,1.882,0,0,1-1.635,0L51.51,27.975v6.493a.491.491,0,0,0,.374.479,44.718,44.718,0,0,0,18.382,0A.479.479,0,0,0,70.639,34.468Zm-5.407,33.6v-8.63H56.917v8.63Z"
                                                                    transform="translate(-35.3 -13.85)" />
                                                                <path id="Path_7056" data-name="Path 7056"
                                                                    d="M201.58,294a1.168,1.168,0,0,1,0,2.336H177.768a1.168,1.168,0,0,1,0-2.336Z"
                                                                    transform="translate(-160.098 -261.283)" />
                                                                <path id="Path_7057" data-name="Path 7057"
                                                                    d="M189.346,245.9a1.168,1.168,0,1,1,0,2.336H177.668a1.168,1.168,0,0,1,0-2.336Z"
                                                                    transform="translate(-160.01 -218.8)" />
                                                                <path id="Path_7058" data-name="Path 7058"
                                                                    d="M115,245.9a1.168,1.168,0,0,1,0,2.336h-2.336a1.168,1.168,0,0,1,0-2.336Z"
                                                                    transform="translate(-102.601 -218.8)" />
                                                                <path id="Path_7059" data-name="Path 7059"
                                                                    d="M115,294a1.168,1.168,0,0,1,0,2.336h-2.336a1.168,1.168,0,0,1,0-2.336Z"
                                                                    transform="translate(-102.601 -261.283)" />
                                                            </svg>
                                                        </div>
                                                        <div className="count-number">
                                                            <span className="counter">2</span>
                                                            <p>Active Courses</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-4">
                                                <div className="counter-wrapper text-center mb-30">
                                                    <div className="counter-icon">
                                                        <div className="counter-icon-wrap">
                                                            <svg id="teacher_1_" data-name="teacher (1)"
                                                                xmlns="http://www.w3.org/2000/svg" width="55.594"
                                                                height="56.553" viewBox="0 0 55.594 56.553">
                                                                <path id="Path_7060" data-name="Path 7060"
                                                                    d="M174.816,53.749l-.316,2.846-.213,1.917H147.448l-.213-1.917-.316-2.846a14.748,14.748,0,0,1,1.1-7.437,14.762,14.762,0,0,0,1.174-6.545l-.167-3.316a11.854,11.854,0,1,1,23.678,0l-.167,3.316a14.762,14.762,0,0,0,1.174,6.545A14.741,14.741,0,0,1,174.816,53.749Z"
                                                                    transform="translate(-132.111 -24.004)"
                                                                    fill="#8f4d2e" />
                                                                <path id="Path_7061" data-name="Path 7061"
                                                                    d="M256.173,53.743l-.316,2.846H245.1V46.045l1.917-3.834V34.543a10.554,10.554,0,0,0-7.757-10.171,11.867,11.867,0,0,1,14.8,12.073l-.167,3.316a14.762,14.762,0,0,0,1.174,6.545,14.741,14.741,0,0,1,1.1,7.437Z"
                                                                    transform="translate(-213.469 -23.999)"
                                                                    fill="#82462a" />
                                                                <path id="Path_7062" data-name="Path 7062"
                                                                    d="M219.886,223.668a1.341,1.341,0,0,1-1.342-1.342V216h-7.668v6.326a1.341,1.341,0,0,1-1.342,1.342H208v5.751h13.419v-5.751Z"
                                                                    transform="translate(-185.954 -192.995)"
                                                                    fill="#fec9a3" />
                                                                <path id="Path_7063" data-name="Path 7063"
                                                                    d="M236.412,220.793a5.259,5.259,0,0,0,3.256-1.175V216H232v3.617a5.259,5.259,0,0,0,3.256,1.175Z"
                                                                    transform="translate(-207.078 -192.995)"
                                                                    fill="#feb784" />
                                                                <path id="Path_7064" data-name="Path 7064"
                                                                    d="M209.253,85.751v4.793a8.627,8.627,0,1,1-17.253,0V85.751a13,13,0,0,0,4.421-5.008l.371-.743.544.454a23.932,23.932,0,0,0,11.917,5.3Z"
                                                                    transform="translate(-171.871 -73.29)"
                                                                    fill="#fec9a3" />
                                                                <path id="Path_7065" data-name="Path 7065"
                                                                    d="M284.734,121.566v4.793a8.63,8.63,0,0,1-6.979,8.469,10.506,10.506,0,0,0,3.145-7.511V120.69A23.905,23.905,0,0,0,284.734,121.566Z"
                                                                    transform="translate(-247.352 -109.105)"
                                                                    fill="#fec093" />
                                                                <path id="Path_7066" data-name="Path 7066"
                                                                    d="M217.438,138.876a1.438,1.438,0,1,1,1.438-1.438A1.438,1.438,0,0,1,217.438,138.876Z"
                                                                    transform="translate(-192.995 -122.581)"
                                                                    fill="#7a432a" />
                                                                <path id="Path_7067" data-name="Path 7067"
                                                                    d="M289.438,138.876a1.438,1.438,0,1,1,1.438-1.438A1.438,1.438,0,0,1,289.438,138.876Z"
                                                                    transform="translate(-256.369 -122.581)"
                                                                    fill="#7a432a" />
                                                                <path id="Path_7068" data-name="Path 7068"
                                                                    d="M242.876,178.876A2.879,2.879,0,0,1,240,176h1.917a.959.959,0,1,0,1.917,0h1.917A2.879,2.879,0,0,1,242.876,178.876Z"
                                                                    transform="translate(-214.12 -157.788)"
                                                                    fill="#f7a468" />
                                                                <path id="Path_7069" data-name="Path 7069"
                                                                    d="M224,312h9.585v6.71H224Z"
                                                                    transform="translate(-200.037 -277.493)"
                                                                    fill="#e0e0de" />
                                                                <path id="Path_7070" data-name="Path 7070"
                                                                    d="M121.515,304.882a2.909,2.909,0,0,1-3.231-1.93l-6.331-11.877a7.465,7.465,0,0,1-1.337,7.137v7.668H93.362v-7.668a7.477,7.477,0,0,1-1.323-7.226l-6.434,11.966a2.908,2.908,0,1,1-5.522-1.826l7.038-17.518A5.749,5.749,0,0,1,92.458,280h3.78l5.751,10.544L107.74,280h3.766a5.756,5.756,0,0,1,5.344,3.627l6.958,17.5a2.91,2.91,0,0,1-2.292,3.756Z"
                                                                    transform="translate(-73.234 -249.327)"
                                                                    fill="#ec8c8c" />
                                                                <path id="Path_7071" data-name="Path 7071"
                                                                    d="M74.16,392.987,74.851,384H80.6v9.235a3.226,3.226,0,1,1-6.442-.247Z"
                                                                    transform="translate(-68.142 -340.866)"
                                                                    fill="#f59898" />
                                                                <path id="Path_7072" data-name="Path 7072"
                                                                    d="M32.965,266.888a1.865,1.865,0,0,0-1.216,2.643l.878,1.754H29.192a5.751,5.751,0,0,1-2.572-.607l-.955-.478A1.15,1.15,0,0,0,24,271.23v2.705a1.917,1.917,0,0,0,1.06,1.715l1.56.78a5.751,5.751,0,0,0,2.572.607h7.269v-5.751L35.148,268a1.865,1.865,0,0,0-2.184-1.116Z"
                                                                    transform="translate(-24 -237.737)"
                                                                    fill="#fec9a3" />
                                                                <path id="Path_7073" data-name="Path 7073"
                                                                    d="M80,352h5.751v3.834H80Z"
                                                                    transform="translate(-73.29 -312.701)"
                                                                    fill="#e0e0de" />
                                                                <path id="Path_7074" data-name="Path 7074"
                                                                    d="M222.468,308.614a2.909,2.909,0,0,1-3.231-1.93l-6.331-11.877a7.464,7.464,0,0,1-1.337,7.137v7.668H194.63c7.911-5.166,14.586-11.723,20.189-25.372a5.742,5.742,0,0,1,2.983,3.119l6.958,17.5a2.91,2.91,0,0,1-2.292,3.756Z"
                                                                    transform="translate(-174.186 -253.059)"
                                                                    fill="#e07f7f" />
                                                                <path id="Path_7075" data-name="Path 7075"
                                                                    d="M305.585,351.336,296,349.419V336l9.585,1.917Z"
                                                                    transform="translate(-263.41 -298.618)"
                                                                    fill="#a36548" />
                                                                <path id="Path_7076" data-name="Path 7076"
                                                                    d="M408,351.336l9.585-1.917V336L408,337.917Z"
                                                                    transform="translate(-361.991 -298.618)"
                                                                    fill="#8f4d2e" />
                                                                <path id="Path_7077" data-name="Path 7077"
                                                                    d="M376,352h3.834v13.419H376Z"
                                                                    transform="translate(-333.825 -312.701)"
                                                                    fill="#95573a" />
                                                                <path id="Path_7078" data-name="Path 7078"
                                                                    d="M307.5,316.793a3.4,3.4,0,0,0-2.836-3.348L296,312v2.876l9.585,1.917H307.5a3.4,3.4,0,0,1,2.836-3.348L319,312v2.876l-9.585,1.917Z"
                                                                    transform="translate(-263.41 -277.493)"
                                                                    fill="#d4bd81" />
                                                                <path id="Path_7079" data-name="Path 7079"
                                                                    d="M436.95,421.661l-3.834.639a.958.958,0,0,1-1.116-.945v-3.563a1.248,1.248,0,0,1,1.042-1.231l3.256-.543a1.248,1.248,0,0,1,1.453,1.231v3.466A.959.959,0,0,1,436.95,421.661Z"
                                                                    transform="translate(-383.115 -369.034)"
                                                                    fill="#fec9a3" />
                                                            </svg>
                                                        </div>
                                                        <div className="count-number">
                                                            <span className="counter">0</span>
                                                            <p>Completed Courses</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h4 className='mb-25'>In Progress Courses</h4>
                                                <div className="inprogress-course mb-30">
                                                    <div className="inprogress-course-img">
                                                        <Link to="/course"><img src="/assets/img/blog/blog-01.jpg" alt="" /></Link>
                                                    </div>
                                                    <div className="inprogress-course-text">
                                                        <div className="inprogress-course-rating">
                                                            <a href="#"><i className="fas fa-star"></i></a>
                                                            <a href="#"><i className="fas fa-star"></i></a>
                                                            <a href="#"><i className="fas fa-star"></i></a>
                                                            <a href="#"><i className="fas fa-star"></i></a>
                                                            <a href="#"><i className="fas fa-star"></i></a>
                                                            <span>5.00</span>
                                                        </div>
                                                        <h4 className='inprogress-course-title'>
                                                            <Link to="/course">WordPress Development Course for Plugins and Themes</Link>
                                                        </h4>
                                                        <div className="inprogress-course-lesson mb-15">
                                                            <span>Completed Lessons :</span>
                                                            <h6><span>07</span> of <span>10</span> lessons</h6>
                                                        </div>
                                                        <div className="rating-row mb-10">
                                                            <div className="progress">
                                                                <div className="progress-bar progress-bar1 wow fadeInLeft" style={{width: '70%'}}></div>
                                                            </div>
                                                            <div className="progress-tittle">
                                                                <h6><span>70%</span> Complete</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inprogress-course mb-30">
                                                    <div className="inprogress-course-img">
                                                        <Link to="/course"><img src="/assets/img/blog/blog-02.jpg" alt="" /></Link>
                                                    </div>
                                                    <div className="inprogress-course-text">
                                                        <div className="inprogress-course-rating">
                                                            <a href="#"><i className="fas fa-star"></i></a>
                                                            <a href="#"><i className="fas fa-star"></i></a>
                                                            <a href="#"><i className="fas fa-star"></i></a>
                                                            <a href="#"><i className="fas fa-star"></i></a>
                                                            <a href="#"><i className="fas fa-star"></i></a>
                                                            <span>5.00</span>
                                                        </div>
                                                        <h4 className='inprogress-course-title'>
                                                            <Link to="/course">Data Science Real-Life Data Science Exercises Included</Link>
                                                        </h4>
                                                        <div className="inprogress-course-lesson mb-15">
                                                            <span>Completed Lessons :</span>
                                                            <h6><span>08</span> of <span>10</span> lessons</h6>
                                                        </div>
                                                        <div className="rating-row mb-10">
                                                            <div className="progress">
                                                                <div className="progress-bar progress-bar1 wow fadeInLeft" style={{width: '80%'}}></div>
                                                            </div>
                                                            <div className="progress-tittle">
                                                                <h6><span>80%</span> Complete</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <h4 className='mb-25'>My Profile</h4>
                                    <ul className='student-profile-info'>
                                        <li>
                                            <h5>Registration Date :</h5>
                                            <span>October 15, 2022 10:30 am</span>
                                        </li>
                                        <li>
                                            <h5>First Name :</h5>
                                            <span>Steve</span>
                                        </li>
                                        <li>
                                            <h5>Last Name :</h5>
                                            <span>Smith</span>
                                        </li>
                                        <li>
                                            <h5>Username :</h5>
                                            <span>Steve3h</span>
                                        </li>
                                        <li>
                                            <h5>Email :</h5>
                                            <span>adminh@gmail.com</span>
                                        </li>
                                        <li>
                                            <h5>Phone :</h5>
                                            <span>(987) 547587587</span>
                                        </li>
                                        <li>
                                            <h5>Occupation :</h5>
                                            <span>Student</span>
                                        </li>
                                        <li>
                                            <h5>Biography :</h5>
                                            <span>Alison Johnson is finishing her first year at DePaul University where
                                                she is interested in business. Although she has yet to declare a major,
                                                she’s considering finance or marketing. After watching her parents run a
                                                restaurant for years, she knew at a very young age that she also wanted
                                                to go into business.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <h4 className='mb-25'>Enrolled Courses</h4>
                                    <div className="student-profile-enroll">
                                        <ul className="nav mb-30" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="enrolled-tab" data-bs-toggle="tab"
                                                    data-bs-target="#enrolled" type="button" role="tab"
                                                    aria-controls="enrolled" aria-selected="true">Enrolled
                                                    Courses (5)</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="active-tab" data-bs-toggle="tab"
                                                    data-bs-target="#active" type="button" role="tab"
                                                    aria-controls="active" aria-selected="false">Active Courses
                                                    (2)</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="completed-tab" data-bs-toggle="tab"
                                                    data-bs-target="#completed" type="button" role="tab"
                                                    aria-controls="completed" aria-selected="false">Completed Courses
                                                    (0)</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="enrolled" role="tabpanel"
                                                aria-labelledby="enrolled-tab">
                                                <div className="student-profile-enrolled-course">
                                                    <div className="row">
                                                        <UserEnrolledCourses />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="active" role="tabpanel"
                                                aria-labelledby="active-tab">
                                                <div className="student-profile-enrolled-course">
                                                    <div className="row">
                                                        <StudentActiveCourses />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="completed" role="tabpanel"
                                                aria-labelledby="completed-tab">
                                                <div className="student-profile-enrolled-course">
                                                    <p>No course completed yet.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="wishlist" role="tabpanel" aria-labelledby="wishlist-tab">
                                    <h4 className='mb-25'>Wishlist</h4>
                                    <div className="student-profile-wishlist">
                                        <div className="row">
                                            <StudentWishlistCourse />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                    <h4 className='mb-25'>Reviews</h4>
                                    <div className="student-profile-reviews">
                                        <div className="student-profile-reviews-item mb-30">
                                            <div className="student-profile-reviews-course-title">
                                                <h5>WordPress Development Course for Plugins and Themes</h5>
                                            </div>
                                            <div className="student-profile-reviews-text">
                                                <div className="student-profile-reviews-text-wrap mb-20">
                                                    <div className="student-profile-review-icon">
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                    </div>
                                                    <div className="student-profile-review-update">
                                                        <button type='button'
                                                            className='student-profile-review-update-btn'><i
                                                                className="far fa-edit"></i> Edit</button>
                                                        <button type='button'
                                                            className='student-profile-review-update-btn'><i
                                                                className="far fa-trash-alt"></i> Delete</button>
                                                    </div>
                                                </div>
                                                <div className="student-profile-review-content">
                                                    <p>Customer support is very quick, within same day or a few hours
                                                        even. Design and look is excellent for the target industry of
                                                        the Template.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="student-profile-reviews-item mb-30">
                                            <div className="student-profile-reviews-course-title">
                                                <h5>Data Science Real-Life Data Science Exercises Included</h5>
                                            </div>
                                            <div className="student-profile-reviews-text">
                                                <div className="student-profile-reviews-text-wrap mb-20">
                                                    <div className="student-profile-review-icon">
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                    </div>
                                                    <div className="student-profile-review-update">
                                                        <button type='button'
                                                            className='student-profile-review-update-btn'><i
                                                                className="far fa-edit"></i> Edit</button>
                                                        <button type='button'
                                                            className='student-profile-review-update-btn'><i
                                                                className="far fa-trash-alt"></i> Delete</button>
                                                    </div>
                                                </div>
                                                <div className="student-profile-review-content">
                                                    <p>Very nice design and awesome design elements</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="quiz" role="tabpanel" aria-labelledby="quiz-tab">
                                    <p>No quiz attempts yet.</p>
                                </div>
                                <div className="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history-tab">
                                    <h4 className='mb-25'>Order History</h4>
                                    <div className="student-profile-orders-wrapper">
                                        <div className="student-profile-orders">
                                            <div className="student-profile-order custom-height-80">
                                                <div className="student-profile-order-name">
                                                    <span>Basic</span>
                                                </div>
                                                <div className="student-profile-order-price">
                                                    <span>$19</span>
                                                </div>
                                                <div className="student-profile-order-duration">
                                                    <span>Quarterly</span>
                                                </div>
                                                <div className="student-profile-order-status">
                                                    <span>verified</span>
                                                </div>
                                                <div className="student-profile-order-method">
                                                    <span>sslcommerz</span>
                                                </div>
                                                <div className="student-profile-order-date">
                                                    <span>20-06-2022</span>
                                                </div>
                                                <div className="student-profile-order-renew">
                                                    <button type='button' className='edu-btn'>Renew</button>
                                                </div>
                                            </div>
                                            <div className="student-profile-order custom-height-80">
                                                <div className="student-profile-order-name">
                                                    <span>Standerd</span>
                                                </div>
                                                <div className="student-profile-order-price">
                                                    <span>$34</span>
                                                </div>
                                                <div className="student-profile-order-duration">
                                                    <span>Half-yearly</span>
                                                </div>
                                                <div className="student-profile-order-status">
                                                    <span>verified</span>
                                                </div>
                                                <div className="student-profile-order-method">
                                                    <span>sslcommerz</span>
                                                </div>
                                                <div className="student-profile-order-date">
                                                    <span>18-06-2022</span>
                                                </div>
                                                <div className="student-profile-order-renew">
                                                    <button type='button' className='edu-btn'>Renew</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="ques" role="tabpanel" aria-labelledby="ques-tab">
                                    <p>No question completed yet.</p>
                                </div>
                                <div className="tab-pane fade" id="setting" role="tabpanel" aria-labelledby="setting-tab">
                                    <h4 className='mb-25'>Settings</h4>
                                    <div className="student-profile-enroll">
                                        <ul className="nav mb-30" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="profileA-tab" data-bs-toggle="tab"
                                                    data-bs-target="#profileA" type="button" role="tab"
                                                    aria-controls="profileA" aria-selected="true">Profile</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="password-tab" data-bs-toggle="tab"
                                                    data-bs-target="#password" type="button" role="tab"
                                                    aria-controls="password" aria-selected="false">Password</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="completedA-tab" data-bs-toggle="tab"
                                                    data-bs-target="#completedA" type="button" role="tab"
                                                    aria-controls="completedA" aria-selected="false">Social</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="profileA" role="tabpanel"
                                                aria-labelledby="profileA-tab">
                                                <div className="student-profile-settings">
                                                    <div className="student-profile-setting-img mb-40">
                                                        <div className="student-profile-setting-cover-img" style={{ backgroundImage: "url(/assets/img/slider/course-slider.jpg)" }}></div>
                                                        <div className="student-profile-setting-author-img">
                                                            <img src="/assets/img/course/course-student.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="contact-from-input mb-20">
                                                                    <label htmlFor="FirstName">First Name</label>
                                                                    <input id='FirstName' type="text"
                                                                        placeholder="First Name" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="contact-from-input mb-20">
                                                                    <label htmlFor="LastName">Last Name</label>
                                                                    <input id='LastName' type="text"
                                                                        placeholder="Last Name" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="contact-from-input mb-20">
                                                                    <label htmlFor="User">User Name</label>
                                                                    <input id='User' type="text"
                                                                        placeholder="User Name" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="contact-from-input mb-20">
                                                                    <label htmlFor="Email">Email</label>
                                                                    <input id='Email' type="email"
                                                                        placeholder="Email" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="contact-from-input mb-20">
                                                                    <label htmlFor="Phone">Phone </label>
                                                                    <input id='Phone' type="text" placeholder="Phone" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="contact-from-input mb-20">
                                                                    <label htmlFor="Occupation">Occupation </label>
                                                                    <input id='Occupation' type="text"
                                                                        placeholder="Occupation " />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="contact-from-input mb-20">
                                                                    <label htmlFor="Bio">Biography </label>
                                                                    <textarea id='Bio'
                                                                        placeholder="Biography"></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="cont-btn mb-20 mt-10">
                                                                    <button type='button' className="cont-btn">Update
                                                                        Profile</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="password" role="tabpanel"
                                                aria-labelledby="password-tab">
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="contact-from-input mb-20">
                                                                <label htmlFor="Current">Current Password</label>
                                                                <input id='Current' type="password"
                                                                    placeholder="Type password" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="contact-from-input mb-20">
                                                                <label htmlFor="New">New Password</label>
                                                                <input id='New' type="password"
                                                                    placeholder="Type password" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="contact-from-input mb-20">
                                                                <label htmlFor="Retype">Re-type New Password</label>
                                                                <input id='Retype' type="password"
                                                                    placeholder="Type password" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12">
                                                            <div className="cont-btn mb-20 mt-10">
                                                                <button type='button' className="cont-btn">Update
                                                                    Profile</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane fade" id="completedA" role="tabpanel"
                                                aria-labelledby="completedA-tab">
                                                <div className="student-social-profile-link">
                                                    <span className='mb-20'>Social Profile Link</span>
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="contact-from-input mb-20">
                                                                    <input type="text"
                                                                        placeholder="Write Your Facebook URL" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="contact-from-input mb-20">
                                                                    <input type="text"
                                                                        placeholder="Write Your Twitter URL" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="contact-from-input mb-20">
                                                                    <input type="text"
                                                                        placeholder="Write Your Instagram URL" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="contact-from-input mb-20">
                                                                    <input type="text"
                                                                        placeholder="Write Your Linkedin URL" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 ">
                                                                <div className="cont-btn mb-20 mt-10">
                                                                    <button type='button' className="cont-btn">Update Profile</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfileSection;