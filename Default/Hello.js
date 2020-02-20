import React,{useEffect,useRef} from 'react';

const hello = props =>{
  // creating ref
  const buttonref = useRef(null);
  useEffect(()=>{
    //alert("I'm excuted");
    //accessing ref
    buttonref.current.click();
    console.log(props.name)
 return()=>{
   console.log('return invokes')
 }
  },[]
  );
  return(
    <div>
    <button ref={buttonref} onClick = {props.buttonClicked}>{props.name}</button>
        
    </div>
    );
}

export default React.memo(hello);