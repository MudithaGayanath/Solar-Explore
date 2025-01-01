import React from 'react'

function TextAreaGroup({text,id}) {
  return (
    <div className=' flex flex-col  w-3/4 md:w-1/2 text-white text-lg mb-5'>
        <label htmlFor={id}>
            {text}
        </label>
        <textarea name="" id={id} cols="30"  className=' rounded-lg relative w-full bg-white text-black'></textarea>
    </div>
  )
}

export default TextAreaGroup