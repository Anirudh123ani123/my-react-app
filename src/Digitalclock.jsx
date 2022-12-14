import React,{useState} from "react";
let ob2={
    textAlign:'center',
    verticalAlign: 'middle',
    marginTop:'13vh'
};
let card={
    border:'2px solid black',
    width:'20vw',
    height:'15vw',
    borderRadius:'20px',
    marginTop:'6px',
    display:'inlineBlock'
};
function Digitalclock(){
    let [state,update]=useState([]);
    
    setInterval(()=>{
        let dateObject=new Date();
        let hours=dateObject.getHours();
        let minutes=dateObject.getMinutes();
        let second=dateObject.getSeconds();
        update([hours,minutes,second]);
    },1000);
    return(<>
        <div style={card} >
            <h2 style={ob2}>{`${state[0]}:${state[1]}:${state[2]}`}</h2>
        </div>
    </>);
}

export default Digitalclock;
