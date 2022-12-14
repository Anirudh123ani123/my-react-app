import React,{createContext} from 'react';
import SecondComponentContext from './SecondComponentContext';
const cityy=createContext();
const country=createContext();
function FirstComponentContext(){
    return (
        <>
        <cityy.Provider value={'Haridwar'}>
            <country.Provider value={'India'}/>
            <SecondComponentContext/>
            <country.Provider/>
        </cityy.Provider>
        </>
    );
}
export default FirstComponentContext;
export {cityy,country};



// import React,{createContext} from 'react';
// import SecondContextFile from './SecondContextFile';
// import FourthContextFile from './FourthContextFile';
// const district = createContext();
// const city=createContext();
// function FirstContextFile(){
//     return (
//         <>
//         <district.Provider value={'Haridwar district'}>
//             <city.Provider value={'Haridwar'}>
//                 <SecondContextFile/>
//                 <FourthContextFile/>
//             </city.Provider>
//         </district.Provider>
//         </>
//     );
// }
// export default FirstContextFile;
// export {district,city};