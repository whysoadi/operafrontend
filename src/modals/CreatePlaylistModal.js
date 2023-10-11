import { useState } from "react"
import TextInput from "../components/shared/TextInput"
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelper";

const CreatePlaylistModal = ({closeModal}) => {

    const [playlistName, setPlaylistName]= useState("");
    const [playlistThumbnail, setPlaylistThumbnail]= useState("")

    const createPlaylist = async ()=>{
        const response = await makeAuthenticatedPOSTRequest ("/playlist/create", {name:playlistName, thumbnail:playlistThumbnail, songs:[]});
       
        if(response._id){
            closeModal();
        }
    }

  return (
    <div className="w-screen absolute h-screen bg-gray-200 bg-opacity-30 flex justify-center items-center" onClick={closeModal}>
      <div className="bg-white lg:w-1/3 w-2/3 rounded-lg p-4" onClick={(e)=>{e.stopPropagation()}}>
        <div className="font-bold py-1">Create Playlist</div>
        <div className="space-y-3">
      <TextInput label="Name" placeholder="Name" value={playlistName} setValue={setPlaylistName} />
      <TextInput label="Thumbnail URL" placeholder="Thumbnail URL"  value={playlistThumbnail} setValue={setPlaylistThumbnail}/>
      <div className="w-1/4 py-2 px-4 bg-black text-slate-50 rounded-lg flex items-center text-xs md:text-sm justify-center cursor-pointer" onClick={createPlaylist}>
Create
      </div>
      </div>
      </div>
    </div>
  )
}

export default CreatePlaylistModal
