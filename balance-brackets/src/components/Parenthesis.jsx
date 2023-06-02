import React, { useState } from 'react'



function Parenthesis() {
    const [depth, setDepth]=useState(0)
    const [exp,setExp]=useState("")
    const [currB, setCurrB]=useState(false)
    const [currR, setCurrR]=useState(false)
    const [currC, setCurrC]=useState(false)

    
    const handleChangeB=(e)=>{
      setCurrB(e.target.checked);
     
    }
    const handleChangeR=(e)=>{
      setCurrR(e.target.checked);
    }
    const handleChangeC=(e)=>{
      setCurrC(e.target.checked);
    }
    
    const isOpen =(ch)=>{
      if(ch=='(' || ch=='[' || ch=='{')
      return true
      return false
    }

    const isNotMatch =(ch1, ch2)=>{
      if(ch1=='(' && (ch2==']' || ch2=='}'))
      return true;
      if(ch1=='[' && (ch2==')' || ch2=='}'))
      return true;
      if(ch1=='{' && (ch2==']' || ch2==')'))
      return true;

      return false;
    }
    console.log("check B"+currB);
    console.log("check C"+currC);

    console.log("check R"+currR);

    const handleChange=(e)=>{
          let ch = e.target.value;
          let n = ch.length

          setExp(ch)
          let d =0;
          let newExp =""
          let Isbalance =true
          for(let i=0;i<n;i++)
          {
            if(( ch[i]=='(' || ch[i]==')' ) && currC==true)
            {
              newExp+=ch[i];
            }
            else if( ( ch[i]=='[' || ch[i]==']' ) && currR==true )
            {
              newExp+=ch[i];
            }
            else if( ( ch[i]=='{' || ch[i]=='}' ) && currB==true )
            {
              newExp+=ch[i];
            }
          }
          setExp(newExp)

          let stack = new Array()
          Isbalance=true
          n = newExp.length;
          for(let i = 0;i<n;i++)
          {
            if(isOpen(newExp[i]))
            {
              stack.push(ch[i]);
            }
            else{
              if(stack.length<1 || isNotMatch( stack[stack.length-1],ch[i]))
              {
                Isbalance=false;
                break;
              }
              {
                stack.pop();
              }
            }
          }
          if(stack.length>0)Isbalance=false;

          setExp(newExp)
          if(Isbalance)
          setDepth(0)
          else setDepth(-1)
         
    }
  return (
    <div className='container my-3 bg-light py-3'>
       <label className='my-2'>Mark brackets to use in your expression :  </label>
        <div className='my-3 d-flex py-2'>
             
            <div className='mx-2 alert alert-primary'>
              <label className='mx-2'><span>&#41;</span>  </label>
              <input className='mx-2' type='checkbox' onChange={handleChangeC}></input>
            </div>
            <div className='mx-2 alert alert-primary'>
              <label className='mx-2'><span>]</span>  </label>
              <input className='mx-2' type='checkbox' onChange={handleChangeR}></input>
            </div>
            <div className='mx-2 alert alert-primary'>
              <label className='mx-2'><span>&#x7D;</span>  </label>
              <input className='mx-2' type='checkbox' onChange={handleChangeB}></input>
            </div>
        </div>
        <label className='my-1'>Enter Parenthesis : </label>
        <input  className={`form-control my-1 ${depth < 0 ?'bg-danger':'bg-success' } text-white`} type='text' value={exp}  onChange={handleChange}></input>
        <div className={` my-3 py-2 alert ${depth < 0 ?'alert-danger':'alert-success' }`}>
                {
                    depth < 0 ? "Not Balanced ": "Balanced"
                }
        </div>
    </div>
  )
}

export default Parenthesis