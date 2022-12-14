// import React from 'react';
// import {FirstName,SecondName} from './ContextFileOne';
// // import {SecondName} from './ContextFileOne';
// function ContextFileThree(){
// return(<>
//     <FirstName.Consumer>
//     {/* <SecondName.Consumer> */}
//         {(fname)=>{
//             return (
//                 <SecondName.Consumer>
//                   {
//                       (lname)=>{
//                           return (
//                               <>
//                               <h1>my name is {fname} {lname}</h1>
//                               </>
//                           );
//                       }
//                   }
//                 </SecondName.Consumer>
//             );
//             // (sname)=>{
//                 // return <h1>hello my name is {fname} {sname} </h1>
//             // }
//         }} 
//     {/* </SecondName.Consumer> */}
//     </FirstName.Consumer>
//       {/* <h1>hello my name is </h1> */}
//     </>
// );

// }
// export default ContextFileThree;

import React from 'react';
// import ContextFileOne from 'ContextFileOne';
import {FirstName,LastName} from './ContextFileOne';
function ContextFileThree(){
return(<>
<FirstName.Consumer>
    {(fname)=>{
        return (
            <LastName.Consumer>
                {(lname)=>{
                    return(<>
                    <h3>my name is {fname} {lname}</h3>
                    </>);
                }}
            </LastName.Consumer>
        );
    }}
</FirstName.Consumer>
</>);
}
export default ContextFileThree;