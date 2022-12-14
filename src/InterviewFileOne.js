//abcdabc
//number of ocuurence of element

function ocuurence(){
    let stringValue='abcdabc';
    let ob={};
    
    let check=false;
  for(let i=0;i<stringValue.length;i++){
    let count=0;
   let cap=  stringValue[i];
   for(let j=0;j<stringValue.length;j++){  
    if(cap==stringValue[j]){
        console.log(` sv1 ${stringValue[i]},sv2 :${stringValue[j]},`);
        console.log("entered and count");
        count++;
        // count=1;   
    }
   
   } 
   ob[cap]=count;
  }
  console.log(ob);
}
ocuurence();
// export default largest;

