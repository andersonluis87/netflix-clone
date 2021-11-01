import React from "react";
import './Header.css'

export default ({dark}) => {
    return (
        <header className={dark ? 'dark' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
                </a>
            </div>
                        
        </header>
    )   
}