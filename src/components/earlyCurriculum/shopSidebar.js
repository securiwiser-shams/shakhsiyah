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
                    <h3 className="drop-btn" onClick={() => dispatch("categories")}>Curriculum</h3>
                    <ul>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="checkbox" id="e-bus" />
                                <label className="edu-check-label" htmlFor="e-bus">Halaqah (3)</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="checkbox" id="e-dev" />
                                <label className="edu-check-label" htmlFor="e-dev">Qur'an and Qur'anic Arabic (3)</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="checkbox" id="e-data" />
                                <label className="edu-check-label" htmlFor="e-data">Thematic Curriculum (3)</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="checkbox" id="e-art" />
                                <label className="edu-check-label" htmlFor="e-art">English (3)</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="checkbox" id="e-fin" />
                                <label className="edu-check-label" htmlFor="e-fin">Mathematics (3)</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="checkbox" id="e-mark" />
                                <label className="edu-check-label" htmlFor="e-mark">Knowledge and Understanding <br/> of the World (3)</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="checkbox" id="e-per" />
                                <label className="edu-check-label" htmlFor="e-per">Creative Development (3)</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="checkbox" id="e-heal" />
                                <label className="edu-check-label" htmlFor="e-heal">Physical Development (3)</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${state.isActiveB ? "content-visiable" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={() => dispatch("price")}>Level</h3>
                    <ul>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="radio" id="e-85" name="price" />
                                <label className="edu-check-label" htmlFor="e-85">Early Years (8)</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="radio" id="e-all" name="price" />
                                <label className="edu-check-label" htmlFor="e-all">Primary School (8)</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input className="edu-check-box" type="radio" id="f-all" name="price" />
                                <label className="edu-check-label" htmlFor="f-all">Secondary School (8)</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ShopSidebar;