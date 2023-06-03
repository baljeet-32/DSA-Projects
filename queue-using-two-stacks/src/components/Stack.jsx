import React from 'react'

function Stack(props) {
    let d = props.data
  return (

        <table className='table '>
          {
            d.map((item)=>{
                return (
                    <tr className='border'>
                        <td>{item}</td>
                    </tr>
                )
            })
          }

            
        </table>
  
  )
}

export default Stack