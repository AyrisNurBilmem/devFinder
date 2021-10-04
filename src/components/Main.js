import React, {useState} from 'react'
import Search from './Search'
import "./styles/css/styles.css"


function Main({theme}) {
    const [input, setInput] = useState("");
    
    const handleInput = (e) =>{
        setInput(e.target.value);
    }

    return (
        <div>
            <div className ="devfinder"><h3 >devfinder</h3></div>
            
            <Search handleInput={handleInput} input={input} theme={theme}/>
        </div>
    )
}

export default Main
