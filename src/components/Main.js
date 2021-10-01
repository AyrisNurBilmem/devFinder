import React, {useState} from 'react'
import Search from './Search'


function Main({theme}) {
    const [input, setInput] = useState("");
    
    const handleInput = (e) =>{
        setInput(e.target.value);
    }

    return (
        <div>
            <h3>devfinder</h3>
            <Search handleInput={handleInput} input={input} theme={theme}/>
        </div>
    )
}

export default Main
