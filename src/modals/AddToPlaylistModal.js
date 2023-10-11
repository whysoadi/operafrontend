import { useState, useEffect } from "react"
import TextInput from "../components/shared/TextInput"
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";

const AddToPlaylistModal = ({closeModal, addSongToPlaylist}) => {
   

    const[myPlaylist, setMyplaylist] = useState([])
    useEffect(() => {
          const getData= async()=>{
            const response = await makeAuthenticatedGETRequest("/playlist/get/me" );
;
            setMyplaylist(response.data);
          };
         getData();
    }, []);

  return (
    <div className="w-screen absolute h-screen bg-gray-200 bg-opacity-60 flex justify-center items-center" onClick={closeModal}>
      <div className="bg-white lg:w-1/3 w-4/5 rounded-lg p-4" onClick={(e)=>{e.stopPropagation()}}>
        <div className="font-bold text-lg py-1">Select a Playlist</div>
        <div className="space-y-3 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {myPlaylist.map((item)=>{
            return <PlaylistView info={item} addSongToPlaylist={addSongToPlaylist} key={JSON.stringify(item)}/>
        })}
     
      </div>
      </div>
    </div>
  )
}

const PlaylistView = ({info, addSongToPlaylist})=>{
    return(
        <div className="w-full flex flex-col justify-center items-center pt-2 space-x-3 cursor-pointer" onClick={()=>{addSongToPlaylist(info._id)}}>
            
                <img src={info.thumbnail} alt="thumbnail" className="w-24  hover:scale-105 ease-in duration-300 h-24 rounded" />
            
            <div className="font-bold py-2">
                {info.name}
            </div>
        </div>
    )
}

export default AddToPlaylistModal
