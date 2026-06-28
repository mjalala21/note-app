  
import {useState} from 'react'

  function Search({notes, setNotes}){
 
    const[search, setSearch] = useState("")
    

    function searchInput(e){
      const value=e.target.value
      setSearch(value)

    setNotes(notes.filter(note=>note.title.toLowerCase().includes(value.toLowerCase()) && note))
        
      
  }

return(
  <div>
     <input onChange={searchInput} placeholder="Search Notes..." className="
    w-full
    max-w-lg
    px-5
    py-3
    rounded-2xl
    bg-gradient-to-r
    from-cyan-500/20
    to-purple-500/20
    backdrop-blur-xl
    border
    border-white/20
    text-white
    placeholder-white/70
    shadow-xl
    focus:outline-none
    focus:ring-2
    focus:ring-cyan-400
    transition-all
    duration-300
  "/>
    

</div>


)

  }


  export default Search