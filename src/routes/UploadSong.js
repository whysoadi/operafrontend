import React, { useState } from "react";
import operalogo from "../assets/images/opera-wordmark.svg";
import IconText from "../components/IconText";
import TextHover from "../components/TextHover";
import TextInput from "../components/shared/TextInput";
import { useNavigate } from "react-router-dom";
import CloudinaryUpload from "../components/CloudinaryUpload";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelper";
import LoggedInContainer from "../container/LoggedInContainer";

const UploadSong = () => {

    const[songname, setSongname] = useState("")
    const[thumbnail, setThumbnail] = useState("")
    const [playlisturl, setPlaylisturl]= useState("")
    const [uploadedfilename, setUploadedfilename]= useState( );
    const navigate = useNavigate();

    console.log(window.cloudinary)

    const submitSong= async()=>{
           const data ={name:songname, thumbnail, track:playlisturl}
           const response = await makeAuthenticatedPOSTRequest("/song/create", data);
           if(response.err){
            alert("Could not upload song!")
            return;
           }
           else{
            alert("Success!")
            navigate("/home");
           }
    };
  return (
    <LoggedInContainer>
    <div className=" flex w-full h-full">
      {/* left panel */}
     

      {/* main content */}
      <div className="w-full h-full overflow-auto">
        {/* navbar */}
      
        {/* body */}
        <div className="bg-[#F2F2F2] pt-8 overflow-auto">
        <div className="font-bold text-xl mb-5">
            Upload your music
        </div>
        <div className="w-full flex space-x-6">
            <div className="md:w-1/3  w-2/5  ">
            <TextInput className='w-1/3 ' label="Song Name" placeholder="Song Name" value={songname} setValue={setSongname}/>
            </div>
            <div className="md:w-1/3 w-2/5 ">
            <TextInput className='w-1/3' label="Thumbnail URL" placeholder="URL"value={thumbnail} setValue={setThumbnail} />
            </div>

        </div>
        <div>
            {
                uploadedfilename? (
                    <div className="text-white bg-[#42C83C] my-2 border-2 w-1/5 border-[#42C83C]  rounded-full py-1 px-4 text-sm font-semibold ">
                        {uploadedfilename.substring(0, 20)}...
                    </div>
                ):( <CloudinaryUpload setUrl={setPlaylisturl} setName={setUploadedfilename} />)
           
        }
        </div>
        <div className="py-4">
          <button className="bg-[#42C83C] py-2 rounded-full text-sm text-slate-50 font-bold px-5" onClick={submitSong}> Upload Song</button>
        </div>
        </div>
      </div>
    </div>
    </LoggedInContainer>
  );
};


export default UploadSong;
