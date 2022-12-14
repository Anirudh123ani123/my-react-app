import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
let props ={
    border:'2px solid black',
    borderRadius:'20px',
    display:'inline-block',
    width:'20vw',
    height:'15vw',
};
let forinpt={
    marginLeft:'0.3vw' ,
    marginTop:'2vh'
};
let listyle={
    marginTop:'3vh'
};
const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
    },
  });
  
function TestProgramOne(){
    let [collc,updatecollc]=useState([]);
    let [value,updatevalue]=useState("");
    let methodOne=(event)=>{
        updatevalue(event.target.value);
    };
    let methodtwo=()=>{
        updatecollc( 
                    [...collc,value]
        );
        updatevalue("");
    };
    let deleteItem=(index)=>{
        updatecollc(
            (oldCollection)=>{
                return oldCollection.filter(
                    (element,indx)=>{
                        return index!=indx;
                    }
                );
            }
            );
    };
  
    return (
        <>
         <div style={props}>
             <input type="text"  style={forinpt} onChange={methodOne}/>
             {/* <button onClick={methodtwo}>click</button> */}
             {/* <Button variant="contained" onClick={methodtwo}>Text</Button> */}
             <ThemeProvider theme={theme}>
             <Fab color="primary" aria-label="add" onClick={methodtwo} size="small" ><AddIcon /></Fab>
             </ThemeProvider>
             
            <ol>
            {
                collc.map(
                    (localvalue,index)=>{
                        return (<MethodListItem prop1={localvalue} id={index} prop2={deleteItem} prop3={listyle}/>);
                    }
                )
            }
            </ol>
</div>
        </>
    );
}

function MethodListItem(props){
return (<li style={props.prop3}>{props.prop1}

<button onClick={()=>{
    props.prop2(props.id);
}} 
    value={props.prop1}>cut</button>

{/* <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button> */}
    
     </li>);
}

export default TestProgramOne;

