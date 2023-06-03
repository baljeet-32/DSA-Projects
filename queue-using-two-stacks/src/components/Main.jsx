import React, { useState } from 'react'
import Stack from './Stack'
import Queue from './Queue'
function Main() {

  const [stack1,setStack1]=useState([])
  const [stack2, setStack2]=useState([])
  const [queue1,setQueue]=useState([])
  
  const handlepush=()=>{
    let n = prompt("Enter number : ")
    setStack1([n,...stack1])
    setQueue([...queue1,n])
  }

  const handlePop=()=>{
    if(queue1.length==0)
    {
        alert("Queue is Empty...!!")
        return
    }
    let n2 = stack2.length;
    if(n2==0)
    {
        let n1 = stack1.length
        let new_stack = []
        let ele = stack1[n1-1]
        let new_que =[]
        for(let i=0;i<n1;i++)
        {
            if(i>0)
            {
                new_stack.push(stack1[n1-1-i]);
                
            }

        }

        for(let i=1;i<queue1.length;i++)
        {
            new_que.push(queue1[i])
        }
         setQueue([...new_que])
        console.log(new_stack)
        setStack1([])
        
        setStack2([...new_stack])
        alert("Poped element : "+ele)
        
    }
    else{
        let ele = stack2[0]
        let new_st2 = []
        for(let i=1;i<stack2.length;i++)
        {
            new_st2.push(stack2[i])
        }
        let new_que =[]
        for(let i=1;i<queue1.length;i++)
        {
            new_que.push(queue1[i])
        }
         alert("Poped element : "+ele)
         setQueue([...new_que])
         setStack2([...new_st2])
         

    }
   
   

  }
  const handleFront=()=>{
    if(queue1.length==0)
    {
        alert("Queue is Empty...!!")
        return
    }
    let n2 = stack2.length;
    if(n2==0)
    {
        let n1 = stack1.length
        let new_stack = []
        let ele = stack1[n1-1]
        for(let i=0;i<n1;i++)
        {
           
                new_stack.push(stack1[n1-1-i]);
                
            

        }


       
        console.log(new_stack)
        setStack1([])
        
        setStack2([...new_stack])
        alert("Front element is : "+ele)
        
    }
    else{
        let ele = stack2[0]

        alert("Front element is : "+ele)

         

    }

    
}

  return (
    <div className='container bg-light'>
        <div className='my-2 alert h4 text-center'>Operations</div>
        <div className='row' >
            <div className='col d-flex my-2 py-1 justify-content-evenly'>
                <button className='btn btn-success text-white w-25' onClick={handlepush}>push</button>
                <button className='btn btn-danger text-white w-25' onClick={handlePop}>pop</button>
                <button className='btn btn-primary text-white w-25' onClick={handleFront}>front</button>

            </div>
        </div>
        <div className='my-2 alert h4 text-center'>Model</div>
        <div className='container my-2 bg-dark text-white py-2 text-center'>
        <p className='alert alert-success text-center p-1 my-2 h6'>User Eye View  </p>
            <div className='container bg-warning py-2 my-3'>
                    <p className='h6 text-black'>Queue</p>
                    <Queue data={queue1}></Queue>
            </div>
            <p className='alert alert-success text-center p-1 my-2 h6'>Internal Implementation </p>
            <div className='container d-flex justify-content-evenly my-2 bg-light p-3'>
                    <div className='mx-3 container-fluid bg-primary'>
                        <p className='h6'>Stack 1</p>
                        <Stack data = {stack1}></Stack>
                    </div>
                    <div className='mx-3 container-fluid bg-primary'>
                    <p className='h6'>Stack 2</p>
                    <Stack data = {stack2}></Stack>
                    </div>
            </div>

        </div>
    </div>
  )
}

export default Main