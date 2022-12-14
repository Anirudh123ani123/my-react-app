import React from 'react';
import Card2 from './Card2';
let parentDiv={
    display:'grid',
    gridColumnGap:'12rem',
    gridRowGap:'2rem',
    gridTemplateColumns:'repeat(auto-fit,minmax(80px,2fr))',  
};
let arrayOfObjectsForCard=[
    {
        title:'Krrish1',
         size:'20px'
    },
    {
        title:'Krrish2',
         size:'21px'
    },
    {
        title:'Krrish3',
         size:'22px'
    },
    {
        title:'Krrish4',
         size:'23px'
    },
    {
        title:'Krrish5',
         size:'24px'
    },
    {
        title:'Krrish6',
         size:'25px'
    },
    {
        title:'Krrish7',
         size:'26px'
    },
];
function objecInvokingMrthod(value,index,arrayname){
    return(
        <>
        <Card2 title={value.title} size={value.size}/>
        </>
    );
}
function InvokingCard(){
    return(<>
    <div style={parentDiv}>
     {
        arrayOfObjectsForCard.map(objecInvokingMrthod) 
     }
    </div>
    </>);
}

export default InvokingCard;