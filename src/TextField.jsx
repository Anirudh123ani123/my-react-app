import React,{useState} from 'react';
function TextField(){
    let div1={
        border:'2px solid black',
        width:'30vw',
        height:'30vh',
    };
    let head={
        marginLeft:'10vw'
    };
    let inp={
        marginLeft:'4vw',
        height:'4vh',
        width:'20vw' 
    };
    let btn={
        marginLeft:'10vw',
        width:'10vw',
        borderRadius:'10px'
    };
    let[stateob1,update1]=useState({
        fname:'',
        lname:''
    });
    let callback1=(object)=>{
        console.log(stateob1);
        let name=object.target.name;
        let val=object.target.value;
        console.log("name:"+name);
        update1((preval)=>{
            let obab={
                ...preval,
                [name]:val
            };
            console.log("obab:"+obab);
            return obab;
        });  
    };
    let callback2=(event)=>{
        event.preventDefault();
    }
return(
    <>
    <div style={div1}>
    <h3 style={head}>hello {stateob1.fname} {stateob1.lname} </h3>
    <form onSubmit={callback2}>
    <input type="text" name='fname'  style={inp} onChange={callback1} value={stateob1.fname}/>
        <hr/>
        <input type="text" name='lname' style={inp} onChange={callback1} value={stateob1.lname}/>
        <hr/>
        <button type="submit" style={btn}>submit</button>
    </form>
    </div>
    </>
);
}
export default TextField;