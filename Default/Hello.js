import React,{useEffect} from 'react';

const hello = props =>{
  useEffect(()=>{
    //alert("I'm excuted");
    console.log(props.name)
 return()=>{
   console.log('return invokes')
 }
  },[]
  );
  return(
    <div>
    <button onClick = {props.buttonClicked}>{props.name}</button>
        
    </div>
    );
}

export default React.memo(hello);