import React from 'react';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import './App.css';
import { Navigate, BrowserRouter as Router  } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Login from './routes/Login';
import Signup from './routes/Signup';
import LoggedInHome from './routes/LoggedInHome'
import UploadSong from './routes/UploadSong'
import Home from './routes/Home';
import MyMusic from './routes/MyMusic' 
import songContext from './contexts/songContext';
import Library from './routes/Library';
import SearchPage from "./routes/SearchPage";
import SinglePlaylistView from './routes/SinglePlaylistView';
import Instructions from './routes/Instructions';

const App = () => {
  const[currentSong, setCurrentSong] = useState(null);
  const [cookie, setCookie]= useCookies(["token"])
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused]= useState(true);
//  console.log(cookie.token)
  return (
    <>
      <div className='w-screen h-screen'>
    <Router>
    {
      cookie.token ? 
     ( 
      <songContext.Provider value={{currentSong, setCurrentSong, soundPlayed, setSoundPlayed, isPaused, setIsPaused,cookie, setCookie}}>
     <Routes>
      
        <Route exact path="/home" element={<LoggedInHome/>} />
        <Route exact path="/uploadsong" element={<UploadSong/>} />
        <Route exact path="/mymusic" element={<MyMusic/>} />
        <Route exact path="/search" element={<SearchPage/>} />
        <Route path="/playlist/:playlistId" element={<SinglePlaylistView/>} />
        <Route exact path="/library" element={<Library/>} />
      <Route exact path="/instructions" element={<Instructions/>} />
        <Route  exact path="*" element={<Navigate to="/home"/>} />
      </Routes>
      </songContext.Provider >)
      :
     ( <Routes>

      {/* logged out routes */}
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/signup" element={<Signup/>} />
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/instructions" element={<Instructions/>} />
      <Route  exact path="*" element={<Navigate to="/login"/>} />

    </Routes>)
    
  }
    </Router>
    </div>
    </>
  );
}

export default App;

