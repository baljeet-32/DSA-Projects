import React from 'react'

function Queue(props) {
    let d = props.data
  return (
    <table className='table'>
    <tr className='border'>
    {
       d.map((item)=>{
        return (
            <td className='border border-black'>
                {item}
            </td>
        )
    })
    }
       
    </tr>
    </table>
  )
}

export default Queue