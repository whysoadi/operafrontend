import React from 'react'

const TextInput = ({label, placeholder, value, setValue}) => {
  return (
    <div className='inputregion flex flex-col space-y-2 '>
     <label className='font-medium'>{label}</label>
     <input id={label} type="passsword" className='border-gray-400 border-2 rounded-lg p-2 border-solid ' placeholder={placeholder} value={value} setValue={setValue} onChange={(e)=>{setValue(e.target.value)}} />
    </div>
  )
}

export default TextInput
