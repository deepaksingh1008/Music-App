import {useRef} from 'react'

const Search = ({fn}) => {
    const artist = useRef();
  return (
    <>
       <label htmlFor="">Artist Name</label>
        <input ref={artist} className='form-control' type="text" placeholder='search here' />
         <br />
        <button onClick={()=>{
             fn(artist.current.value);
        }} type="button" className="btn btn-outline-primary">Search</button>
    
    </>
  )
}

export default Search