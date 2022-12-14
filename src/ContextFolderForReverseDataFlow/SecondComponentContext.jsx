import React from 'react';
import ThirdComponentContext from './ThirdComponentContext';
let props ={
    border:'2px solid black',
    borderRadius:'20px',
    display:'inline-block',
    width:'20vw',
    height:'15vw',
};
function SecondComponentContext(){
return <>
<div style={props}>
    <ThirdComponentContext/>
</div>
</>
}

export default SecondComponentContext;