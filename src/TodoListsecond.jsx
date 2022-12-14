import React,{useState} from 'react';
import Button from '@mui/material/Button';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
let div1={
    border:'2px solid white',
    borderRadius:'20px',
    width:'20vw',
    height:'50vh',
    backgroundColor:'#D3D3D3'
};
let head={
    backgroundColor:'mediumPurple',
    width:'20vw',
    height:'8vh',
    marginTop:'13px',
    textAlign:'center'
};
let hd={
    color:"white",
    padding:'1vh'
    // marginTop:'13px', 
    }
    let inp={
        marginTop:'13px',
        marginLeft:'3vw' ,
        height:'5vh' ,
        width:'12vw',
        border:'2px solid white',
        backgroundColor:'#D3D3D3',
        borderTopStyle: 'hidden',
            borderRightStyle: 'hidden',
            borderLeftStyle: 'hidden',
            borderBottomStyle: 'groove'
    }
    let div2={
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit,minmax(0px,1fr))',
        alignItems:'left'
    }
    let bt={
        borderRadius:'5vh',
        width:'0.5vw',
        height:'6h',
        marginLeft:'4vw'
    }
function TodoListsecond(){
    let[value,update1]=useState("");
    let[licollection,update2]=useState([]);
    let callback1=(event)=>{
        update1(event.target.value); 
    };
    return(
        <>
        <div style={div1}>
        <div style={head}>
            <h2 style={hd}>To Do List</h2>
        </div>
        <div style={div2}>
        <input type="text" style={inp} value={value} onChange={callback1} />
        <Button style={bt}> 
        <AddCircleOutlineRoundedIcon/>
        </Button>
        </div>
        </div>
        </>
    );
}
export default TodoListsecond;