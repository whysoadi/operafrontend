import React from 'react'
import LoggedInContainer from '../container/LoggedInContainer'


const Instructions = () => {
  return (
    <LoggedInContainer currActive={"instructions"}>
    <div>
      <div className='text-xl font-bold pt-4 pb-2'>Here's what you need to know!</div>
      <div className='pl-2'>
        <ul className=''>
            <li className='py-2'>Before you roll into the app you must signup/login to avail the functionalities.</li>
            <li className='py-2'>The data on the homepage is dummy data, you need to <span className='font-bold'>search the song</span> in the search section.</li>
            <li className='py-2'>The search functinality is case sensitive. So, make sure you provide the correct input. </li>
            <li className='py-2'>To upload a song click on the upload song icon and provide the necessary input to upload.</li>
            <li className='py-2'>For the thumbnailURL you can copy image address of a web image. (ex:unsplash)</li>
            <li className='py-2'>To add a song to an existing playlist play it first then click the icon on the very right on the play bar to select a playlist </li>
            <li className='py-2'>This song app contains around 30 songs. To add a new song please upload the song.</li>
        </ul>
      </div>
      <div className='py-4'>
      <div className='text-lg text-[#42C83C] font-bold'>Available songs on <span className='uppercase font-bold text-[#42C83C]'> opera</span>
      <div className='pl-2 py-2'>
       <ul className='text-black text-sm '>
        <li><p>Desi Kalakaar</p> </li>
        <li><p>Tum Ho</p> </li>
        <li><p>Kesariya</p> </li>
        <li><p>Tum Kya Mile</p> </li>
        <li><p>Deva Deva</p> </li>
        <li><p>O Bedardeya</p> </li>
        <li><p>Tere Pyaar Mein</p> </li>
        <li><p>Pehli Dafa</p> </li>
        <li><p>Tune Jo Na Kaha</p> </li>
        <li><p>Pee Loon</p> </li>
      
        </ul> 
        </div>
      </div>
      <div>
        
      </div>
      </div>
    </div>
       </LoggedInContainer>
  )
}

export default Instructions
