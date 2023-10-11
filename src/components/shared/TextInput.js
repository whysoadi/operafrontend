import React from 'react'

const TextInput = ({label, placeholder, setValue, value}) => {
  return (
    <div className='inputregion flex flex-col space-y-2 my-3'>
     <label className='font-semibold text-sm'>{label}</label>
     <input id={label} type="text" className='border-gray-500 border-2 rounded-lg p-2 border-solid text-sm' placeholder={placeholder}  onChange={(e)=>{setValue(e.target.value)}} />
    </div>
  )
}

export default TextInput
