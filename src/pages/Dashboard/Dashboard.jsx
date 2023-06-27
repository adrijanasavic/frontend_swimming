import React from "react";

import "./Dashboard.css";
import "../../components/Gallery/Gallery.css"
import Posts from "../../components/Posts/Posts";

function Dashboard() {
    return (
        <div className="admin">
            <header className="admin__header">
                <div className="toolbar">
                    <a href="/addpost">
                        <button className="btn btn--primary">
                            Novi Blog
                        </button>
                    </a>
                    <a
                        href="/login"
                        className="logout"
                        onClick={() => window.localStorage.clear()}>
                        <button className="btn btn--primary">
                            Log Out
                        </button>
                    </a>
                </div>
            </header>
            <nav className="admin__nav">
                <Posts />
            </nav>
            <footer className="admin__footer">
                <ul className="ticker">
                    <li className="ticker__item">Č</li>
                    <li className="ticker__item">A</li>
                    <li className="ticker__item">S</li>
                    <li className="ticker__item">O</li>
                    <li className="ticker__item">V</li>
                    <li className="ticker__item">I</li>
                </ul>
                <div>Copyright &copy; {new Date().getFullYear()} Adrijana</div>
            </footer>
        </div>
    );
}

export default Dashboard;
