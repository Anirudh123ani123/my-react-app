import React,{useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import Button from '@mui/material/Button';
let props ={
    border:'2px solid white',
    borderRadius:'20px',
    display:'inline-block',
    width:'20vw',
    height:'15vw',
    backgroundColor:'grey'
};
let div1={
    border: '2px solid grey',
    marginTop:'6vh',
    height:'5vh',
    backgroundColor:'white',
    textAlign:'center'
};
let div2={
marginTop:'6vh',
marginLeft:'4vw'
};

let btnstyle={
    marginLeft:'1vw'  ,
};
function SimpleProjectThree(){
    let [value,updateValue]=useState(0);
    let methodOne=()=>{
        updateValue(
            (preValue)=>{
                return value++;
            }
        );  
    };
    let methodTwo=()=>{
        updateValue(
            (preValue)=>{
                return value--;
            }
        );  
    };
return(
    <>
    <div style={props}>
        <div style={div1}>{value}</div>
        <div style={div2}>
            <Button variant="contained" size="small" onClick={methodOne}><AddIcon/></Button>
            <Button variant="contained" size="small" onClick={methodTwo} style={btnstyle}><RemoveRoundedIcon/></Button>
        </div>
    </div>
    </>
);
}
export default SimpleProjectThree;