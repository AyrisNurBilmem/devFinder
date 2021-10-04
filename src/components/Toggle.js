import React from 'react'
import "./styles/css/styles.css"

const Toggle = ({theme, toggleTheme}) => {
    console.log(theme);
    return (
        <div className ="theme-div">
            <button className="theme-button" onClick = {toggleTheme}>{theme === "dark" ? "Light Mode" : "Dark Mode"}</button>
        </div>
    )
}

export default Toggle
