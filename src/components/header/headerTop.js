import React, { useState } from 'react';

const HeaderTop = () => {
    const [isActiveF, setActiveF] = useState("false");

    const handleToggleF = () => {
        setActiveF(!isActiveF);
    };
    return (
        <div className={`header-note-area p-relative d-none d-md-block ${isActiveF ? "eduman-header-notice-visible" : "eduman-header-notice-hide"}`}>
            <div className="container-fluid">
                <div className="note-text text-center">
                    <p><span>Ramadan Mubarak </span>to all, wish you all a happy, safe and <span>blessed</span> Ramadan</p>
                </div>
            </div>
            <div className="eduman-header-notice-action-close">
                <button onClick={handleToggleF}><i className="fal fa-times"></i></button>
            </div>
        </div>
    );
};

export default HeaderTop;