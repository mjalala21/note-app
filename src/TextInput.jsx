   
    import Button from './Button'
    import { useState, useEffect } from 'react';
   function TextInput({addNote, editingNote,updateNote}){
     const[title,setTitle]=useState("");
     const[content, setContent]=useState("");
     const[color,setColor]=useState("#ffffff")
     const[error,setError]=useState(null)
    
       
     function handleSubmit(){
      
      const newError={}
      const newNote={

         title,
         content,
         color

      };
      if(title===""){
        setError("title is required")
        alert("title is required")
         return
      }
      if(content===""){
        setError("there is no content")
        alert("please add the content")
        return 
      }
  
        
        addNote(newNote)
    

    clearFields();
     
     }
   function clearFields(){
       setTitle("");
       setContent("")
       setColor("#ffffff")
   }

       
    return(
       <>
       <div className="
  max-w-lg mx-auto
  bg-white/80
  backdrop-blur-md
  rounded-2xl
  shadow-2xl
  p-6
  border border-white/40
">
       <input value={title}
              onChange={(e)=>setTitle(e.target.value)}
      type="text"
      placeholder="Enter title"
       className="
w-full
p-3
mb-3
rounded-xl
border border-gray-300
outline-none
focus:ring-4
focus:ring-purple-300
transition
"/>
      <textarea  
              value={content}
              onChange={(e)=>setContent(e.target.value)}
     className="
w-full
h-32
p-3
rounded-xl
border border-gray-300
resize-none
focus:ring-4
focus:ring-purple-300
outline-none
transition
"
      placeholder="Write your note..."></textarea>
      <div className="flex justify-between item-center">
         <input type="color"
                 value={color}
                 onChange={(e)=>setColor(e.target.value)}
                  className="w-10 h-10 rounded-lg cursor-pointer border-2 border-gray-300 shadow-md hover:scale-110 transition duration-300"
                 />
       
        
          <Button onClick={handleSubmit} text="Add"
         className="
bg-blue-500
hover:bg-blue-600
text-white
px-4
py-2
rounded-lg
font-medium
transition
duration-200
"
          /> 
            

         </div>
         </div>    
        </>
        

    )
   }
   export default TextInput;