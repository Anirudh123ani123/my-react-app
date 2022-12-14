//This file is being used in ToDolist.jsx file

import React from 'react';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
let div2={
    listStyle: 'none',
width:"2vw",
height:"3vh",
border:"0px solid red",
display:'flex',
flexDirection:'row',
justifyContent:'center',
borderRadius:'5vw',
listStyleType:'none',

};
let div1={
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit,minmax(0px,0.2fr))',
    // border:'2px solid red',
    height:'3vh'
};
let ps={
    marginTop:'0px'
};
let lit={
marginTop:'2px'
};
let cross={
    width:"2vw",
    height:"3vh",
};
function ComponentOneForTodolist(props){
    return(
        <>
        <li style={lit}>
            <div style={div1}>
            <button style={div2} onClick={()=>{
                // console.log("clicked");
                props.onSelect(props.id);
            }}><HighlightOffRoundedIcon style={cross}/></button>
                <p style={ps}>{props.prop1}</p>
        </div>
        </li>
        {/* <li>item</li> */}
        </>
    );
}

export default ComponentOneForTodolist;