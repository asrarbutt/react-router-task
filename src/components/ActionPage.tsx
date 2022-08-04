import React, {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function ActionPage() {
    const [name, setName]=useState<string>()
    const navigate=useNavigate();

    const handleInput=(event:ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value);
    }
    return (
        <div>
            <label>Name eingeben</label>
            <input type="text" onChange={handleInput}/>
            <button onClick={()=>navigate(`/welcome/${name}`)}>Go to Detailspage</button>
        </div>
    )

}