import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import LoggedInContainer from '../container/LoggedInContainer'
import { makeAuthenticatedGETRequest } from '../utils/serverHelper';

const Library = () => {
  
    const[myPlaylist, setMyplaylist] = useState([]);
  
    useEffect(() => {
          const getData= async()=>{
            const response = await makeAuthenticatedGETRequest("/playlist/get/me" );
;
            setMyplaylist(response.data);
          }
         getData();
    }, []);

  return (
    <LoggedInContainer currActive='library'>
    <div className='text-lg font-bold pt-4'>My Playlists</div>

    <div className='py-5 grid lg:grid-cols-5 grid-cols-3 gap-4 '>
         {myPlaylist.map((item)=>{
            return <Card key={JSON.stringify(item)} title={item.name} imgUrl={item.thumbnail} desc="" playlistId={item._id} />
         })}
    </div>
    </LoggedInContainer>
     
  )
}

const Card =({title, desc, imgUrl, playlistId})=>{
    const navigate = useNavigate();
    return(
        <div className="bg-black p-4 w-full rounded-lg" onClick={()=>{navigate("/playlist/"+playlistId)}}>
            <div className="pb-2 ">
                <img className="w-full rounded-md" src={imgUrl} alt="label image" />
            </div>
            <div className="text-white font-semibold pt-2 cursor-pointer md:text-lg text-sm">{title}</div>
            <div className="text-xs text-gray-500">{desc}</div>
        </div>
    )
}

export default Library
