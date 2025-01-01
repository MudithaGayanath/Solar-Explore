import React from 'react'

function InputGroup({text,id,type}) {
  return (
    <div className=' flex flex-col  w-3/4 md:w-1/2 text-white text-lg m-5'>
        <label htmlFor={id}>
            {text}
        </label>
        <input type={type} name="" id={id} className=' rounded-lg relative w-full h-10 bg-white text-black' />
    </div>
  )
}

export default InputGroup