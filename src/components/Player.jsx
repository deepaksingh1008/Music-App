import React from 'react'

const Player = ({fn,song}) => {
  return (
    <div>
        <button onClick={()=>{fn(false,null)}} className='btn btn-secondary'>Back To song</button>
        <h3>{song?.artistName} {song?.trackName}</h3>
        <br />
        <br />
    <audio controls>
        <source src={song?.previewUrl} type='audio/mp4' />
    </audio>
    </div>
  )
}

export default Player