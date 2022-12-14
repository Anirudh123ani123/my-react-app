import React from 'react';
import {district,city} from './FirstContextFile';
function ThirdContextFile(){
    return (
        <>
        <district.Consumer>
            {
                (distric)=>{
                    return (
                        <city.Consumer>
                            {
                                (city)=>{
                                    return (<h3>district is :{distric} city is:{city}</h3>);
                                }
                                // return(
                                //         (city)=>{
                                //           return (<h1>district is :{distric} city is:{city}</h1>);
                                //         }
                                //     );
                            }
                        </city.Consumer>
                    );
                   
                }
            }
        </district.Consumer>
        </>
    );
}
export default ThirdContextFile;