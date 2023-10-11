import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const IconText = ({iconname, displaytext, width, active, targetLink, onClick}) => {
  return (
    <Link to={targetLink}>
    <div className='pl-4 flex items-center justify-start' onClick={onClick}>
        <div className='p-4 cursor-pointer ' >
        <Icon color={active? "#42C83C":"#374151"} width={width} icon= {iconname}/>
        </div>
      <div className={ `${active? 'text-[#42C83C]' :"text-gray-700"} pt-1 font-bold cursor-pointer hover:text-[#42C83C]`}>
        {displaytext}
      </div>
    </div>
    </Link>
  )
}

export default IconText
