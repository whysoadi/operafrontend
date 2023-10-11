import React, { useState } from "react";
import { Howl, Howler } from "howler";
import operalogo from "../assets/images/opera-wordmark.svg";
import IconText from "../components/IconText";
import TextHover from "../components/TextHover";
import { useEffect } from "react";
import SingleSongCard from "../components/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import LoggedInContainer from "../container/LoggedInContainer";

const MyMusic = () => {
    const [songData, setSongData] = useState([]);

    useEffect(() => {
                const getData = async () => {
                    const response = await makeAuthenticatedGETRequest(
                        "/song/get/mysongs"
                    );
                
        
                    setSongData(response.data);
                  
                };
                getData();
            }, []);
        

  return (<LoggedInContainer currActive="mymusic">
       <div className="bg-[#F2F2F2] p-5 pl-1  overflow-auto space-y-2">
          <div className="text-xl font-semibold pb-2 ">
             My songs
          </div>
        {songData.map((item)=>{
       return( <SingleSongCard info={item} playSound={()=>{}} key={JSON.stringify(item)}/>)
       })}
        </div>
  </LoggedInContainer>);
};

// const MyMusic = () => {

//     const [songData, setSongData] = useState([]);
//     const [soundPlayed, setSoundPlayed] = useState(null);

//     const playSound = (Songsrc)=>{
//         if(soundPlayed){
//             soundPlayed.stop();
//         }
//         let sound = new Howl({
//             src: [Songsrc],
//             html5: true
//           });
//         setSoundPlayed(sound);
//           sound.play();
//     }

//     // const SongData= [{
//     //       thumbnail:"https://images.unsplash.com/photo-1696023169341-294108cf3bdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
//     //       name:"curtains",
//     //       artist:"asfadf"
//     // }];

//     useEffect(() => {
//         const getData = async () => {
//             const response = await makeAuthenticatedGETRequest(
//                 "/song/get/mysongs"
//             );
//             console.log('hi')

//             setSongData(response.data);
//             console.log(response.data)
//         };
//         getData();
//     }, []);

//   return (
//     <div className=" flex w-full h-full">
//       {/* left panel */}
//       <div className="h-full w-1/5 bg-gray-200">
//         {/* div for logo */}
//         <div className="pb-4">
//           <img src={operalogo} alt="opera" />
//         </div>
//         <div>
//           <IconText iconname={"ion:home"} displaytext={"Home"} width="22" />

//           <IconText
//             iconname={"octicon:search-16"}
//             displaytext={"Search"}
//             width="22"
//           />

//           <IconText
//             iconname={"fluent:library-28-filled"}
//             displaytext={"Library"}
//             width="22"
//           />
//            <IconText
//             iconname={"ic:baseline-library-music"}
//             displaytext={"My music"}
//             width="22"
//           />
//         </div>
//         <div className="mt-8">
//           <IconText
//             iconname={"icon-park-solid:add"}
//             displaytext={"Create Playlist"}
//             width="22"
//           />
//           <IconText
//             iconname={"mdi:heart"}
//             displaytext={"Liked Songs"}
//             width="22"
//           />
//         </div>
//       </div>

//       {/* main content */}
//       <div className="w-4/5 h-full overflow-auto">
//         {/* navbar */}
//         <div className="w-full bg-gray-200 h-1/10 bg-opacity-50 flex items-center justify-end">
//           <div className="w-1/2 flex h-full">
//             <div className="w-3/5 justify-around flex h-full items-center">
//               <TextHover displaytext={"Premium"} />
//               <TextHover displaytext={"Support"} />
//               <TextHover displaytext={"Download"} />
//               <div className="h-1/2 border-r border-2 border-gray-400"></div>
//             </div >
//             <div className="w-2/5 flex justify-around items-center h-full">
//             <div className="h-1/2 px-4 py-2 bg-slate-100 mx-4  rounded-full text-sm font-semibold cursor-pointer text-[#42C83C] flex items-center justify-center border-2 border-[#42C83C] hover:text-slate-50 hover:bg-[#42C83C]">
//                Upload Song
//               </div>
//               <div className="h-1/2 px-4 py-6  bg-[#42C83C] mx-2 uppercase rounded-full text-sm font-semibold cursor-pointer text-white flex items-center justify-center">
//                 AY
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* body */}
//         <div className="bg-slate-50 p-5  overflow-auto space-y-2">
//          <div className="text-xl font-semibold pb-2 ">
//             My songs
//          </div>
//        {songData.map((item)=>{
//        return( <SingleSongCard info={item} playSound={playSound}/>)
//        })}
//         </div>
//       </div>
//     </div>
//   );
// };

export default MyMusic;
