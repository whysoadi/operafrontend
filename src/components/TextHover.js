import React from 'react'

const TextHover = ({ displaytext,  active}) => {
  return (
    <div className='pl-4 flex items-center justify-start '>
      <div className={ `${active? 'text-[#42C83C]' :'text-gray-600'} pt-1 font-bold cursor-pointer hover:text-[#42C83C]`}>
        {displaytext}
      </div>
    </div>
  )
}

export default TextHover
