 import React,{useState} from 'react';
let btn={
    border:'2px solid black',
    borderRadius:'20px',
    height:'4vh',
    width:'6vw',
    marginLeft:'6vw',
    marginTop:'20vh'
};
let check='true';
function EventFirst(){
    let childdiv={
        border:'2px solid white',
        borderRadius:'0px',
        height:'30vh',
        width:'18vw' ,
        marginLeft:'1.0vw' ,
        marginTop:'1.2vh',
        backgroundColor:'white',
    };
    let div1={
        border:'2px solid grey',
        height:'33vh',
        width:'20vw',
        borderRadius:'20px',
        marginTop:'6px',
        backgroundColor:'grey',
    };
    let [stateob,update]=useState(['20px','0px']);
    console.log(`childdiv.borderRadius:${childdiv["borderRadius"]}`);
    childdiv["borderRadius"]=stateob[1];
    div1["borderRadius"]=stateob[0];
    console.log('stateob[1]:'+stateob[1]);
    console.log("check="+check);
        let onClickEvent=()=>{
        console.log("checkf="+check);
        if(check=='true'){
            update(['0px','20px']); 
            check='false'; 
            console.log("inside if:check=="+check);
        }else{
            update(['20px','0px']);
            check='true';
            console.log("inside else");
        } 
    };
    return (<>
    <div style={div1}>
        <div style={childdiv}>
            <button style={btn} onClick={onClickEvent}>Click</button>
        </div>
    </div>
    </>);
}

export default EventFirst;