
import TextInput from './TextInput'
import Notes from './Notes'
import { useState, useEffect, useRef} from 'react';
import Button from './Button';
import Search from './Search';


function App() {
  //  const[notes, setNotes]= useState([])
   const [notes, setNotes] = useState([]);
    const[title,setTitle]=useState("");
     const[content, setContent]=useState("");

  //   const nextId = useRef(
  //   notes.length > 0
  //     ? Math.max(...notes.map(note => note.id)) + 1
  //     : 1
  // );
   const[editingNote, setEditingNote]=useState(null)
   const[showArchived, setShowArchived]=useState(false)
  

  
  //  useEffect(()=>{
  //   localStorage.setItem("notes",JSON.stringify(notes))
  //  },[notes])





   

 

  async function getNotes(){
    const response= await fetch("http://localhost:3002/notes")
    const data = await response.json()
    console.log(data)
    setNotes(data)
  }

  useEffect(()=>{
    getNotes()
  },[])
    
 



      

     async function addNote(newNote){
     const response= await fetch("http://localhost:3002/notes",{

      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        archived : false,
        favorite : false,
        ...newNote
      })
     })
   const savednotes= await response.json()

   setNotes(prevNotes=>[...prevNotes, savednotes])
  }

  //  function deleteNote(id){
  //     setNotes(
  //       notes.filter((note)=>{
  //         return id!==note.id
  //       }
  //       )
  //     )
      
  //  }

   async function deleteNote(id){
     await fetch(`http://localhost:3002/notes/${id}`,{
      method : "DELETE"
     })
   getUser();
   }

  

  //  function updateNote(updatedNote){
  //   setNotes(notes.map(note=>note.id===updatedNote.id ? updatedNote: note));

  // setEditingNote(null)

  //  }

  async function updateNote(id){
   const response= await fetch(`http://localhost:3002/notes/${id}`,{
    method: "PATCH",
    headers: { "Content-Type" : "application/json"
    },
    body: JSON.stringify({
    
      title : editingNote.title ,
      content : editingNote.content
    })
     
   }, 
  
  )
  const savedEditingNote= await response.json()
  setNotes(prevNote=>prevNote.map(note=>note.id===id ? savedEditingNote : note))
 }
  

  //  function archieveNote(id){
  //   setNotes(
  //     notes
  //     .map(note=>id===note.id
  //       ?{...note, archived:true}
  //       : note
  //     )
  //   )
  //  }

  async function archiveNote(id){
    const response=await fetch(`http://localhost:3002/notes/${id}`,{
       method : "PATCH",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        archived: true 

    })
    })

    const archivedNote = await response.json()
    setNotes(prevNote=> prevNote.map(note=>note.id===id ? archivedNote : note))
  }

  async function unArchiveNote(id){
    const response = await fetch(`http://localhost:3002/notes/${id}`,{
      method : "PATCH",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        archived : false
      })
    })

    const unUrchived = await response.json()
    setNotes(prevNote=>prevNote.map(note=>note.id===id ? unUrchived : note))
  }

  async function favoriteNote(id,note){
     
    const response= await fetch(`http://localhost:3002/notes/${id}`,{
        method : "PATCH",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          favorite: !note.favorite
        })
           

    })

    const updatedFavorite= await response.json()
    setNotes(prevNote=>prevNote.map(note=>note.id===id ? updatedFavorite : note))

  }


 
  return (
    <div className="
min-h-screen
bg-gradient-to-br
from-[#1e1b4b]
via-[#4338ca]
to-[#7c3aed]
overflow-hidden
relative
">
  <div className="
absolute
top-20
left-20
w-72
h-72
rounded-full
bg-pink-400/20
blur-3xl
"></div>

<div className="
absolute
bottom-20
right-20
w-96
h-96
rounded-full
bg-blue-400/20
blur-3xl
"></div>

<div className="
absolute
top-1/2
left-1/2
w-80
h-80
rounded-full
bg-purple-400/20
blur-3xl
"></div>
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
      <h1 className="
text-5xl
font-bold
text-center
mb-10
text-purple-700
drop-shadow-md
">
📝 My Notes
</h1>
    <div className="flex gap-5">
    <Search notes={notes} setNotes={setNotes}/>
     <TextInput addNote={addNote}
      editingNote={editingNote}
      updateNote={updateNote}
      title={title} content={content} setContent={setContent} setTitle={setTitle}
      />
      </div>

      <Button onClick={()=>setShowArchived(false) }  text="Notes"   className={`
        px-6 py-2 rounded-full font-medium transition-all duration-300
        ${
            !showArchived
                ? "bg-cyan-500 text-white shadow-lg"
                : "bg-gray-300 text-black hover:bg-white/10"
        }
    `}/>
       <Button onClick={()=>setShowArchived(true)} text="Archives"   className={`
        px-6 py-2 rounded-full font-medium transition-all duration-300
        ${
            showArchived
                ? "bg-cyan-500 text-white shadow-lg"
                : "bg-gray-300 text-black hover:bg-white/10"
        }
    `}/>
     <Notes notes={notes.filter(note=>showArchived ? note.archived : !note.archived)}
      deleteNote={deleteNote}
      setEditingNote={setEditingNote}
       archiveNote={archiveNote}
       unArchiveNote={unArchiveNote}
       editingNote={editingNote}
       updateNote={updateNote}
       favoriteNote={favoriteNote}
      />
       
     
</div>

     </div>
  );
}

export default App
