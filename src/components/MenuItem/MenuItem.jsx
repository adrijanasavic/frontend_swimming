import React from "react";
import "./MenuItem.css";

function MenuItem({ tags, title, price }) {

    return (
        <div className="app__menuitem">
            <div className="app__menuitem-head">
                <div className="app__menuitem-name">
                    <p className="p__cormorant" style={{ color: "#0687dd" }}>
                        {title}
                    </p>
                </div>
                <div className="app__menuitem-dash"></div>
                <div className="app__menuitem-price">
                    <p className="p__cormorant">{price}</p>
                </div>
            </div>
            <div className="app__menuitem-sub">
                <p className="p__opensans" style={{ color: "#1118" }}>
                    {tags}
                </p>
            </div>
        </div>
    );
}

export default MenuItem;
