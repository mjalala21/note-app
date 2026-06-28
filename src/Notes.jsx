import Button from './Button'

function Notes({notes, deleteNote, setEditingNote,archiveNote,unArchiveNote, editingNote, updateNote,favoriteNote}){
      

     

   
    return (
<>
<div className="
relative
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-8
p-10
">
 
  { notes.map((note)=>(
<div key={note.id}
    className="
relative
overflow-hidden

p-6

rounded-[28px]

backdrop-blur-3xl

bg-white/10

border
border-white/20

shadow-[0_8px_32px_rgba(31,38,135,0.37)]

hover:scale-[1.03]

hover:bg-white/15

hover:border-white/40

transition-all

duration-500

text-white
flex-row 
justify-between
"
     style={{backgroundColor: note.color}}
     >
        <div
className="
absolute
inset-0

rounded-[28px]

bg-gradient-to-br

from-white/30

via-white/5

to-transparent

pointer-events-none
"
/>

  {editingNote?.id===note.id ?
    
     ( 
        <>
    
     <input 
     onChange={(e)=>setEditingNote({
        ...editingNote,
       title: e.target.value})}
     value={editingNote.title}
      className="
w-full
border
rounded-lg
p-2
mb-3
focus:outline-none
focus:ring-2
focus:ring-blue-500
"/>
        <textarea
        onChange={(e)=>setEditingNote({
            ...editingNote,
            content:e.target.value
        })}
        value={editingNote.content} 
        className="
w-full
border
rounded-lg
p-2
mb-3
focus:outline-none
focus:ring-2
focus:ring-blue-500
"></textarea>
        </>

     ) : (<>
<div className="flex justify-between"><h1 className="text-xl font-bold mb-3 break-words">
    {note.title}</h1> <Button onClick={()=>favoriteNote(note.id,note)} text={note.favorite ? "⭐" : "☆"}/></div>
    <p className="text-gray-700 whitespace-pre-wrap break-words" >{note.content}</p>

</>
    )
  }
    <div className="flex justify-end gap-2 mt-auto ">
    <Button onClick={()=>deleteNote(note.id)}
    text="Delete"
    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
    />
    <Button text= {note.archived ? "Unarchive" : "Archive"}
    onClick={!note.archived ? ()=>archiveNote(note.id): ()=>unArchiveNote(note.id) }
    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
    />
    <Button onClick={()=>editingNote?.id===note.id? updateNote(editingNote.id) : setEditingNote(note)}
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