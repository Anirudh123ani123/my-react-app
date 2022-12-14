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
function SimpleProjectTwo(){
    let [name,setName]=useState(
        {
            fname:'',
            lname:''
        }
    );
    let setHeading=(event)=>{
        let localname=event.target.name;
        let value=event.target.value;
        let ob2={...name,[localname]:value};
        setName(ob2);
    };
    let callback2=(event)=>{
        event.preventDefault();
    }
    return (
        <>
        <div style={props}>
        <h2 style={forhone}>hello {name.fname} {name.lname}</h2>
            <input type="text" placeholder='enter text' style={forinpt} onChange={setHeading} name='fname' value={name.fname}/>
            <hr />
            <input type="text" placeholder='enter text' style={forinpt} onChange={setHeading} name='lname' value={name.lname}/>
            <button  style={forbuttn} >click me</button>    
    </div>
        </>
    );
}

export default SimpleProjectTwo;