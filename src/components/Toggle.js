import React from 'react'

const Toggle = ({theme, toggleTheme}) => {
    console.log(theme);
    return (
        <div>
            <button onClick = {toggleTheme}>{theme === "dark" ? "Light Mode" : "Dark Mode"}</button>
        </div>
    )
}

export default Toggle
