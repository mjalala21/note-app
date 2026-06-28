   
    import Button from './Button'
    import { useState, useEffect } from 'react';
   function TextInput({title,content,setContent,setTitle,addNote, editingNote,updateNote}){
    
     const[color,setColor]=useState("#faf5f5")
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
relative
w-full
p-6
rounded-3xl

 bg-gradient-to-r
    from-cyan-500/20
    to-purple-500/20

backdrop-blur-2xl

border
border-white/20

shadow-2xl
hover:shadow-cyan-500/30


transition-all
duration-500

overflow-hidden
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