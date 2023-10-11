import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import LoggedInContainer from '../container/LoggedInContainer';
import { makeAuthenticatedGETRequest } from '../utils/serverHelper';
import SingleSongCard from '../components/SingleSongCard';

const SearchPage = () => {

const[searchText, setSearchText]= useState("");
const [songData, setSongData]= useState([])

const searchSong= async ()=>{
    const response= await makeAuthenticatedGETRequest("/song/get/songname/"+ searchText);
  
    setSongData(response.data);
    // setSearchText("")
}

  return (
    <LoggedInContainer currActive="search">
         <div className="w-full overflow-x-hidden py-6">
                <div
                    className={"sm:w-2/3 lg:w-1/3 w-4/5 p-3 md:text-sm text-xs rounded-full  bg-gray-800 px-5 flex text-white space-x-3 items-center"}
                >
                    <Icon icon="ic:outline-search" className="text-xl"  />
                    <input
                        type="text"
                        placeholder="What do you want to listen to?"
                        className="w-full bg-gray-800 focus:outline-none"
                        value={searchText}
                        onChange={(e)=>{setSearchText(e.target.value)}}
                        onKeyDown={(e)=>{if(e.key==="Enter"){
                        searchSong();
                        }
                    }}
                    />
                </div>
                { songData.length>0?
                (<div className='pt-5 space-y-2'>
                    <div className='py-2 text-sm'>
                        Showing search results for <span className='font-bold'> "{searchText}"</span>
                    </div>
                    {songData.map((item)=>{
                        return <SingleSongCard info={item} key={JSON.stringify(item)} playSound={()=>{}}/> 
                    })}
                </div>
                ):(
                    <div className='py-2 text-sm pt-5 space-y-2'>
                        Nothing to show. Please modify the search!
                    </div>
                )
                }
                </div>
      </LoggedInContainer>
  );
}

export default SearchPage;
