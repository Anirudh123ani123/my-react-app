import React,{useState} from 'react';
let props ={
    border:'2px solid black',
    borderRadius:'20px',
    display:'inline-block',
    width:'20vw',
    height:'15vw',
};
let forhone={
    marginLeft:'5vw' ,
    marginTop:'2vh'
};
let forbuttn={
    marginLeft:'7vw' ,
    marginTop:'2vh'
};
let forinpt={
    marginLeft:'3vw' ,
    marginTop:'0vh'
};
function SimpleProjectOne(){
    const [name,setName]=useState("");
    const setHeading=(event)=>{
        setName(event.target.value);
    }
    return (
        <>
        <div style={props}>
            <h2 style={forhone}>hello {name}</h2>
            <input type="text" placeholder='enter text' style={forinpt} onChange={setHeading}/>
            <button  style={forbuttn}>click me</button>
</div>
        </>
    );
}

export default SimpleProjectOne;