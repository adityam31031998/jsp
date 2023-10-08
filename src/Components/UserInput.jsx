import React, { useState } from 'react'

const UserInput = () => {
    const [data,setData]=useState("")
    const handleClick=(e)=>{
        setData(e.target.value)
    }
  return (
    <>
    <input onChange={handleClick} placeholder='Enter Plae'/>
    <h1>
        Place:{data}
    </h1>
    </>
  )
}

export default UserInput