import React, { useReducer } from 'react';


const initialState = {
    isActive: true,
    isActiveA: true,
    isActiveB: true,
    isActiveC: true,
    isActiveD: true,
    isActiveE: true
}
const reducer = (state, action) => {
    switch (action) {
        case "categories":
            return {
                ...state,
                isActive: !state.isActive,
            };
        case "ratings":
            return {
                ...state,
                isActiveA: !state.isActiveA,
            };
        case "price":
            return {
                ...state,
                isActiveB: !state.isActiveB,
            };
        case "level":
            return {
                ...state,
                isActiveC: !state.isActiveC,
            };
        case "languages":
            return {
                ...state,
                isActiveD: !state.isActiveD,
            };
        case "durations":
            return {
                ...state,
                isActiveE: !state.isActiveE,
            };
        default:
            throw new Error("Unexpected action");
    }
};

const ShopSidebar = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (

        <>
            <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${state.isActive ? "content-visiable" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={() => dispatch("categories")}>Surah</h3>
                    <ul>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="checkbox" id="e-bus" />
                                <label className="edu-check-label" htmlFor="e-bus">Surah Ikhlās</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="checkbox" id="e-dev" />
                                <label className="edu-check-label" htmlFor="e-dev">Surah Asr</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="checkbox" id="e-data" />
                                <label className="edu-check-label" htmlFor="e-data">Surah Kawthar</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="checkbox" id="e-art" />
                                <label className="edu-check-label" htmlFor="e-art">Surah Mā'ūn</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="checkbox" id="e-fin" />
                                <label className="edu-check-label" htmlFor="e-fin">Surah Quraysh</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="checkbox" id="e-mark" />
                                <label className="edu-check-label" htmlFor="e-mark">Surah Qadr</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${state.isActiveA ? "content-visiable" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={() => dispatch("ratings")}>Ratings</h3>
                    <ul>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="radio" id="e-25" name="rating" />
                                <label className="edu-check-star" htmlFor="e-25">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    (25)</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="radio" id="e-24" name="rating" />
                                <label className="edu-check-star" htmlFor="e-24">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fal fa-star"></i>
                                    (25)</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="radio" id="e-12" name="rating" />
                                <label className="edu-check-star" htmlFor="e-12">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fal fa-star"></i>
                                    <i className="fal fa-star"></i>
                                    (12)</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="radio" id="e-28" name="rating" />
                                <label className="edu-check-star" htmlFor="e-28">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fal fa-star"></i>
                                    <i className="fal fa-star"></i>
                                    <i className="fal fa-star"></i>
                                    (28)</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="radio" id="e-14" name="rating" />
                                <label className="edu-check-star" htmlFor="e-14">
                                    <i className="fas fa-star">
                                    </i> <i className="fal fa-star">
                                    </i> <i className="fal fa-star">
                                    </i><i className="fal fa-star">
                                    </i><i className="fal fa-star"></i>
                                    (14)</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ShopSidebar;