import React, { useState } from 'react'

function Parenthesis() {
    const [depth, setDepth]=useState(0)
    const [exp,setExp]=useState("")
    const handleChange=(e)=>{
          let ch = e.target.value;
          let n = ch.length

          setExp(ch)
          let d =0;
          for(let i=0;i<n;i++)
          {
            if(ch[i]=='(')d++;
            else if(ch[i]==')')d--;
            if(d<0)break;
          }
          if(d==0) setDepth(0)
          else setDepth(-1)


         console.log(depth)
        // console.log(ch)
    }
  return (
    <div className='container my-3 bg-light py-3'>
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