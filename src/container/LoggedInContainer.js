import React, { useContext, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import operalogo from "../assets/images/opera-wordmark.svg";
import IconText from "../components/IconText";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import TextHover from "../components/TextHover";
import { Link } from "react-router-dom";
import {Howl, Howler} from 'howler';
import { Icon } from '@iconify/react';
import songContext from "../contexts/songContext";
import CreatePlaylistModal from "../modals/CreatePlaylistModal";
import AddToPlaylistModal from "../modals/AddToPlaylistModal";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelper";



const LoggedInContainer = ({children, currActive}) => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
 
    const[createPlaylistOpen, setCreatePlaylistOpen]= useState(false)
    const[addToPlaylist, setAddToPlaylist]= useState(false)
     
      const firstUpdate= useRef(true);

      const{currentSong, setCurrentSong, isPaused, setIsPaused, soundPlayed, setSoundPlayed, cookie, setCookie} = useContext(songContext);
    //   console.log(currentSong)
        
      useLayoutEffect(()=>{
        if(firstUpdate.current)
        {
            firstUpdate.current = false;
            return;
        }

        if(!currentSong){
            return;
           }
           console.log("h")
            changeSong(currentSong.track)
           
        },[currentSong && currentSong.track]);
      
     

      const playSound=()=>{
        if(!soundPlayed){
            return;
        }
        soundPlayed.play();
        
      }
    
      const changeSong = (songSrc)=>{
        if(soundPlayed){
            soundPlayed.stop();
        }
        let sound = new Howl({
            src: [songSrc],
            html5: true
          });
        setSoundPlayed(sound);
          sound.play();
          setIsPaused(false);
    }
    
    const pauseSound =()=>{
      soundPlayed.pause();
    }
    
    const toggleSound =()=>{
      if(isPaused){
        playSound();
        setIsPaused(false);
      }
      else{
        pauseSound();
        setIsPaused(true);
      }
    
    }

    const navigate= useNavigate();

    const clearStorage =()=>{
      if(cookie.token){
        setCookie("token",null,{
          expires: new Date(Date.now()),
        })
    //  console.log(cookie.token)
      }
      navigate("/home");
    }

    const addSongToPlaylist = async (playlistId)=>{
         const songId = currentSong._id;
         const payload ={playlistId, songId};

         const response = await makeAuthenticatedPOSTRequest("/playlist/add/song", payload);
         console.log(response)
         if(response._id){
          setAddToPlaylist(false);
         }
    }
    
    
      return (
        <div className="w-full h-full">
            { createPlaylistOpen && <CreatePlaylistModal closeModal={()=>{setCreatePlaylistOpen(false)}} />}
            { addToPlaylist && <AddToPlaylistModal closeModal={()=>{setAddToPlaylist(false)}} addSongToPlaylist={addSongToPlaylist} />}
          <div className={ `${currentSong? "h-9/10":"h-full"} flex w-full bg-[#F2F2F2]`}>
          {/* left panel */}
          <div className="h-full w-1/5 bg-gray-200 lg:block hidden">
            {/* div for logo */}
            <div className="pb-4">
              <img src={operalogo} alt="opera" />
            </div>
            <div className="py-4">
              <IconText iconname={"ion:home"} displaytext={"Home"} width="22" targetLink={"/home"}  active={currActive==="home"}
/>
    
              <IconText
                iconname={"octicon:search-16"}
                displaytext={"Search"}
                width="22"
                targetLink={"/search"}
                active={currActive==="search"}
              />
    
              <IconText
                iconname={"fluent:library-28-filled"}
                displaytext={"Library"}
                width="22"
                targetLink={"/library"}
                active={currActive==="library"}

              />
               <IconText
                iconname={"ic:baseline-library-music"}
                displaytext={"My music"}
                width="22"
                targetLink={"/mymusic"}
                active={currActive==="mymusic"}

              />
               <IconText
                iconname={"icon-park-solid:add"}
                displaytext={"Create Playlist"}
                width="22"
                onClick={()=>{setCreatePlaylistOpen(true)}}
              />
              <IconText
                iconname={"fluent:reading-mode-mobile-24-filled"}
                displaytext={"Instructions"}
                width="23"
                targetLink={"/instructions"}
                active ={currActive==="instructions"}
              />
            </div>
            <div className="mt-8">
             
              {/* <IconText
                iconname={"mdi:heart"}
                displaytext={"Liked Songs"}
                width="22"
              /> */}
            </div>
          </div>
    
          {/* main content */}
          <div className=" lg:w-4/5  w-full h-full overflow-auto">
            {/* navbar */}
            <div className="w-full bg-white h-1/10  flex items-center justify-end">
              <div className=" w-full flex h-full">
              <div className="lg:hidden m-6 ">
              <AiOutlineMenu
                size={25}
                color="#42C83C"
                className="cursor-pointer"
                onClick={handleNav}
              />
            </div>
               
                  
                <div className="w-full flex justify-end items-center sm:px-4 h-full">
                  <Link to="/uploadsong">
                <div className="h-1/2 px-4 py-2 bg-white sm:mx-4  rounded-full text-sm font-semibold cursor-pointer text-[#42C83C] flex items-center justify-center border-2 border-[#42C83C] hover:text-slate-50 hover:bg-[#42C83C]">
                   Upload Song
                  </div>
                  </Link>
                  {/* <div className="h-1/2 px-4 py-6  bg-[#42C83C] mx-2 uppercase rounded-full text-sm font-semibold cursor-pointer text-white flex items-center justify-center"> */}
                  <Icon icon="carbon:user-avatar-filled" color="#42c83c" fontSize={50}  className="mx-4 cursor-pointer" onClick={clearStorage}/>
                  {/* </div> */}
                </div>
              </div>
            </div>
            {/* body */}
            <div className="bg-[#F2F2F2] p-8 pt-2 overflow-auto">
            <div className={nav? 'fixed left-0 top-0 w-full h-screen bg-black/70':" "}>
            <div className={nav? 'fixed left-0 top-0 w-[75%] sm:w-[50%] md:w-[30%] h-screen bg-[#ecf0f3] p-2 md:p-4 ease-in duration-200':
        'fixed left-[-200%] top-0  p-4  duration-100' }>
              {/* div for logo */}
              <div className="flex">
                <div className="pb-4">
                  <img src={operalogo} alt="opera" />
                </div>
                <div
                  onClick={handleNav}
                  color="#42C83C"
                  className="rounded-full shadow-lg  shadow-gray-400 p-3 h-10 w-10 cursor-pointer"
                >
                  <AiOutlineClose color="#42C83C"/>
                </div>
              </div>
              <div className="py-4">
              <IconText iconname={"ion:home"} displaytext={"Home"} width="22" targetLink={"/home"}  active={currActive==="home"}
/>
    
              <IconText
                iconname={"octicon:search-16"}
                displaytext={"Search"}
                width="22"
                targetLink={"/search"}
                active={currActive==="search"}
              />
    
              <IconText
                iconname={"fluent:library-28-filled"}
                displaytext={"Library"}
                width="22"
                targetLink={"/library"}
                active={currActive==="library"}

              />
               <IconText
                iconname={"ic:baseline-library-music"}
                displaytext={"My music"}
                width="22"
                targetLink={"/mymusic"}
                active={currActive==="mymusic"}

              />
               <IconText
                iconname={"icon-park-solid:add"}
                displaytext={"Create Playlist"}
                width="22"
                onClick={()=>{setCreatePlaylistOpen(true)}}
              />
              <IconText
                iconname={"fluent:reading-mode-mobile-24-filled"}
                displaytext={"Instructions"}
                width="23"
                targetLink={"/instructions"}
                active ={currActive==="instructions"}
              />

              
              </div>
            </div>
          </div>
         {children}
            </div>
          </div>
          </div>
         { currentSong &&
          <div className="h-1/10 bg-ffffff w-full flex items-center">
            <div className="w-1/3 flex items-center">
           <img src={currentSong.thumbnail} alt="currentSong" className="sm:h-14 sm:w-14 h-12 w-12 rounded-md ml-2" />
           <div className="pl-3 ">
            <div className="md:text-sm text-xs hover:underline font-bold cursor-pointer">{currentSong.name}</div>
            <div className="text-xs hover:underline sm:block hidden cursor-pointer">{currentSong.artist.firstName +" "+ currentSong.artist.lastName}</div>
           </div>
           </div>
           <div className="w-full md:w-1/3 flex justify-center h-full">
       <div className="flex justify-between w-1/3 items-center">
       <Icon icon="fluent:previous-16-filled" color="42C83C"  fontSize={30}  className="cursor-pointer"/>
       <Icon icon={isPaused? ("icon-park-solid:play") :"zondicons:pause-solid"} color="#42C83C" fontSize={38}  className="cursor-pointer" onClick={toggleSound}/>
       <Icon icon="fluent:next-24-filled" color="42C83C"  fontSize={30}  className="cursor-pointer" />
       </div>
       {/* progress bar */}
       <div>
    
       </div>
           </div>
           <div className="w-1/3 flex justify-end">
           <Icon icon="ic:round-playlist-add"  fontSize={35}  className="cursor-pointer mx-4" color="42C83C"   onClick={()=>{setAddToPlaylist(true)}}/>
           </div>
          </div>
}
        </div>
      );
    };


export default LoggedInContainer;
