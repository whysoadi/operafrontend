import {useContext} from "react";
import songContext from "../contexts/songContext";
const SingleSongCard = ({info, playSound}) => {
    const{currentSong, setCurrentSong}= useContext(songContext);
   
    return (
        <div
            className="flex bg-white hover:bg-[#42C83C] hover:bg-opacity-70 hover:text-white  p-2 rounded" onClick={()=>{setCurrentSong(info)}}
        >
            <div
                className="w-12 h-12 bg-cover bg-center rounded"
                style={{
                    backgroundImage: `url("${info.thumbnail}")`,
                }}
            ></div>
            <div className="flex w-full  ">
                <div className="text-black flex justify-center hover:text-white  flex-col pl-4 w-5/6">
                    <div className="cursor-pointer  font-bold">
                       {info.name}
                    </div>
                    <div className="text-xs text-gray-600 cursor-pointer  ">
                        {info.artist.firstName + " " + info.artist.lastName}
                    </div>
                </div>
                {/* <div className="w-1/6 flex items-center justify-center font-medium text-sm">
                    <div>3:44</div>
                </div> */}
            </div>
        </div>
    );
};

export default SingleSongCard;