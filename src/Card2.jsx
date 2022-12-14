import React from 'react';
import Img from './pic1.jpg';
let div1={
    border:'2px solid black',
    width:'20vw',
    height:'48vh',
    borderRadius:'20px',
    marginTop:'6px'
};
let childdiv1={
    width:'19.5vw',
    height:'23vh'
};

let imgStyle={
    width:'19.5vw',
    height:'23vh',
    marginTop:'3px',
    marginLeft:'2px',
    borderRadius:'20px',
};

let childdiv2={
    // border:'2px solid yellow',
    width:'19.5vw',
    height:'23vh'
};
let paraHead={
    marginLeft:'3px',
}
function Card2(object){
    return (
        <>
        <div className="div1" style={div1}>
        <div className="childdiv1" style={childdiv1}>
            <img src={Img} alt="" style={imgStyle}/>
        </div>
        <div className="childdiv2" style={childdiv2}>
            <h3>{object.title}</h3>
            <p>{object.size}</p>
        </div>
        </div>
        </>
    );
}

export default Card2;