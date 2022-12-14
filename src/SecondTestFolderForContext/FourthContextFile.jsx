import React,{useContext} from 'react';
import  {district,city} from './FirstContextFile';
function FourthContextFile(){
    const distric=useContext(district);
    const cit=useContext(city);
    return (
        <h3>district is:{distric} city is:{cit}</h3>
    );
}
export default FourthContextFile; 