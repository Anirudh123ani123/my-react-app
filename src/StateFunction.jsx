import React,{useState} from 'react';
const parentdiv={
    border:'2px solid black',
    borderRadius:'20px',
    display:'inline-block',
    width:'20vw',
    height:'15vw',
    // marginLeft:'40vw',
};
let h1cs={
    marginLeft:'10vw'
};
let bttncs={
    marginLeft:'8vw',
    width:'6vw',
    height:'6vh',
    borderRadius:'20px'
};
function StateFunction(){
    let count=0;
    let [state,update]=useState(0);
    let incrementmethod=()=>{
        state++;
        console.log("clicked:"+state+" times");
        update(state);
    };
    return(
        <>
        <div style={parentdiv}>
            <div><h1 style={h1cs}>{state }</h1></div>
            <div><button onClick={incrementmethod} style={bttncs} value='click'></button></div>
        </div>
        </>
    );
}

export default StateFunction;