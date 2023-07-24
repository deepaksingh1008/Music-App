import { useEffect, useState } from 'react'
import Search from '../components/Search'
import Songs from '../components/Songs';
import { getSong } from '../services/api-client';
import Player from '../components/Player';
const SearchPages = () => {
   const [allSongs,setSongs]=useState([]);
   const [song,setSong]=useState(null);
   //componentLifecycle
   const [flag,setFlag]=useState(false);
   const loadSongs = async ()=>{
    setSongs(await getSong('Latest Songs'));
   }
   
   useEffect(()=>{
     loadSongs();
   },[])
    const GetArtistName = async(artistName)=>{
        console.log(artistName);
        setSongs(await getSong(artistName));
    }
    const togglePlayer=(flag,songArgs)=>{
         setSong(songArgs);
         setFlag(flag);
    }
    const jsx = <><Search fn={GetArtistName}/>
    <Songs fn={togglePlayer} allSongs={allSongs}/></>
  return (
    <div className='container'>
        <h1 className='alert alert-primary text-center'>Music Store</h1>
       {flag?<Player fn={togglePlayer} song={song}/>:jsx}
    </div>
  )
}

export default SearchPages