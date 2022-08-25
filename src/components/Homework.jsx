import React from 'react';
import Range from "./Range/Range.jsx";
import Name from "./Name/Name.jsx";

function Homework({lastName,setName,name,handleName}) {
    return (
        <>
            <Range/>
            <Name lastname={lastName} handleName={handleName} name={name} setName={setName}>{name?"Simon":"Poghos"}</Name>
        </>
    );
}

export default Homework;