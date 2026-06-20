import Button from './Button'

function Notes({notes, deleteNote, setEditingNote,archieveNote, editingNote, updateNote}){

   
    return (
<>
<div className="

gap-6
p-6
">
 
  { notes.map((note)=>(
<div key={note.id}
     className="m-10 p-5 w-full border border-2 border-black rounded-lg"
     style={{backgroundColor: note.color}}
     >

  {editingNote?.id===note.id ?
    
     ( 
        <>
    
     <input 
     onChange={(e)=>setEditingNote({
        ...editingNote,
       title: e.target.value})}
     value={editingNote.title}/>
        <textarea
        onChange={(e)=>setEditingNote({
            ...editingNote,
            content:e.target.value
        })}
        value={editingNote.content}></textarea>
        </>

     ) : (<>
<h1 className="text-2xl font-bold"
    >{note.title}</h1>
    <p>{note.content}</p>

</>
    )
  }
    <div className="flex justify-end gap-2 ml-80 mt-2">
    <Button onClick={()=>deleteNote(note.id)}
    text="Delete"
    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
    />
    <Button text="Archieve"
    onClick={()=>archieveNote(note.id)}
    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
    />
    <Button onClick={()=>editingNote?.id===note.id? updateNote(editingNote) : setEditingNote(note)}
    text={editingNote?.id=== note.id ? "save" : "Edit"}
    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"/>
   
    </div>

</div>
))
}
</div>
</>

    )
}

export default Notes 