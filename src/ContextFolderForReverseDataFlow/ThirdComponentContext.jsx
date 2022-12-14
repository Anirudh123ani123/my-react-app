import React,{useContext} from 'react';
import {cityy,country} from './FirstComponentContext';
function ThirdComponentContext(){
    const cit=useContext(cityy);
    const countr=useContext(country);
    return (
            <p> {`city:${cit}  country:${countr}`}</p>
        
    );
}
export default ThirdComponentContext;


// import React,{useContext} from 'react';
// import  {district,city} from './FirstContextFile';
// function FourthContextFile(){
//     const distric=useContext(district);
//     const cit=useContext(city);
//     return (
//         <h3>district is:{distric} city is:{cit}</h3>
//     );
// }
// export default FourthContextFile; 
