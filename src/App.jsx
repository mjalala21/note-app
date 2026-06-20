
import TextInput from './TextInput'
import Notes from './Notes'
import { useState, useEffect, useRef} from 'react';


function App() {
  //  const[notes, setNotes]= useState([])
   const [notes, setNotes] = useState(() => {
  const storedNotes = localStorage.getItem("notes");
  return storedNotes ? JSON.parse(storedNotes) : [];
});

    const nextId = useRef(
    notes.length > 0
      ? Math.max(...notes.map(note => note.id)) + 1
      : 1
  );
   const[editingNote, setEditingNote]=useState(null)
  

  
   useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notes))
   },[notes])

   

   function addNote(newNote){

    const noteWithId={
         id:nextId.current,
         archived:false,
         ...newNote
    }

    
    setNotes(preNotes=>[...preNotes,noteWithId])
     nextId.current++;
    
   }

   function deleteNote(id){
      setNotes(
        notes.filter((note)=>{
          return id!==note.id
        }
        )
      )
      
   }
   function updateNote(updatedNote){
    setNotes(notes.map(note=>note.id===updatedNote.id ? updatedNote: note));

  setEditingNote(null)

   }

   function archieveNote(id){
    setNotes(
      notes
      .map(note=>id===note.id
        ?{...note, archived:true}
        : note
      )
    )
   }
 
  return (
    <>
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
     <TextInput addNote={addNote}
      editingNote={editingNote}
      updateNote={updateNote}
      />
     <Notes notes={notes.filter(note=>!note.archived)}
      deleteNote={deleteNote}
      setEditingNote={setEditingNote}
       archieveNote={archieveNote}
       editingNote={editingNote}
       updateNote={updateNote}
      />
     
</div>

     </>
  );
}

export default App
