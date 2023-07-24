import React from 'react'
import Song from './Song'

const Songs = ({fn,allSongs}) => {
  console.log("allSongs = ",allSongs)
  return (<>
          {
            allSongs.map((currentSong,index)=><Song fn={fn} key={index} song={currentSong}/>)
          }
</>
  )
  
}

export default Songs