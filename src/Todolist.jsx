import React,{useState} from 'react';
import ComponentOneForTodolist from './ComponentOneForTodolist';
let div1={
    border:'2px solid black',
    borderRadius:'20px',
    width:'20vw',
    height:'50vh',
    // backgroundColor:'grey'
};
let head={
    backgroundColor:'mediumPurple',
    width:'20vw',
    height:'8vh',
    marginTop:'13px',
    textAlign:'center'
};
let hd={
    color:"white",
    // marginTop:'13px', 
    padding:'1vh'
};
let inp={
    marginTop:'13px',
    marginLeft:'3vw' ,
    height:'5vh' ,
    // border:'1px solid white',
    borderTopStyle: 'hidden',
        borderRightStyle: 'hidden',
        borderLeftStyle: 'hidden',
        borderBottomStyle: 'groove'
}
let bt={
    borderRadius:'3vh',
    width:'3vw',
    height:'6h'
}
function Todolist(){
    let[value,update1]=useState("");
    let[licollection,update2]=useState([]);
    let callback1=(event)=>{
        update1(event.target.value); 
    };
    let callback2=()=>{
        if(value!=''){
            update2(
                ()=>{
                    console.log("[...licollection,value]=>"+[...licollection,value]);
                return [...licollection,value];
            }
            );
            update1("");
        }
        console.log("licollection:"+licollection.length);
    };
    let deleteItems=(index)=>{
        console.log(`item ${licollection[index]}`);
        update2((oldCollection)=>{
            return oldCollection.filter(
                (element,indx)=>{
                    console.log("output:"+index!=indx);
                    return index!=indx;
                }
            );
        }
        );
    };
    return(<>
    <div style={div1}>
        <div style={head}>
            <h2 style={hd}>To Do List</h2>
        </div>
        <input type="text" style={inp} value={value} onChange={callback1} />
        <button style={bt} onClick={callback2}>+</button>
        <ol>
            {licollection.map(
                (val,index)=>{
                    return <ComponentOneForTodolist prop1={val} id={index} onSelect={deleteItems}/>
                }
            )}
        </ol>
       
    </div>
    </>);
}


export default Todolist;