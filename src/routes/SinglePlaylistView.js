import React, { useState, useEffect } from 'react'
import LoggedInContainer from '../container/LoggedInContainer'
import { useParams } from 'react-router-dom'
import { makeAuthenticatedGETRequest } from '../utils/serverHelper';
import SingleSongCard from '../components/SingleSongCard';

const SinglePlaylistView = () => {

const {playlistId}= useParams();
const [playlistDetails, setPlaylistDetails] = useState({});

useEffect(() => {
     const getData = async ()=>{
        const response = await makeAuthenticatedGETRequest("/playlist/get/playlist/"+ playlistId);
        console.log(response.data);
        setPlaylistDetails(response);
     }
getData();
}, []);

  return (
    <LoggedInContainer currActive={"library"}>
        { playlistDetails._id && 
            ( <div>
          <div className='text-lg font-bold pt-4'>{playlistDetails.name}</div>
          <div className='pt-4 space-y-3'>
         {playlistDetails.songs.map((item)=>{
                return (<SingleSongCard info={item} key={JSON.stringify(item)} playSound={() => {}} />)
            })
         }
          </div>
          </div>)
          }
      </LoggedInContainer>

  )
}

export default SinglePlaylistView
