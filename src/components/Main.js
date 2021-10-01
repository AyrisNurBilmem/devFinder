import React, {useState, useEffect} from 'react'
import axios from "axios"
import Search from './Search'
import Result from "./NotFound"

function Main() {
    const [input, setInput] = useState("");
    
    const handleInput = (e) =>{
        setInput(e.target.value);
    }

    return (
        <div>
            <h3>devfinder</h3>
            <Search handleInput={handleInput} input={input}/>
        </div>
    )
}

export default Main
