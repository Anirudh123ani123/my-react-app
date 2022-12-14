// import React,{createContext} from 'react';
// import ContextFileTwo from './ContextFileTwo';
// const FirstName=createContext();
// const SecondName=createContext();
// function ContextFileOne(){   
// return (<>
//         <FirstName.Provider value={"anirudh"}>
//         <SecondName.Provider value={'bisht'}>
//         <ContextFileTwo/>
//         </SecondName.Provider>
//             </FirstName.Provider>
//             </>
//     ) ;
// }
// export default ContextFileOne;
// export {FirstName,SecondName};
// // export {SecondName};

import React,{createContext} from 'react';
import ContextFileTwo from './ContextFileTwo'
const FirstName =createContext();
const LastName=createContext();
function ContextFileOne(){
    return(
        <FirstName.Provider value={'anirudh'}>
            <LastName.Provider value={'bisht'}>
            <ContextFileTwo/> 
            </LastName.Provider>
        </FirstName.Provider>
        // <ContextFileTwo/>
    );
}

export default ContextFileOne;
export {FirstName,LastName};