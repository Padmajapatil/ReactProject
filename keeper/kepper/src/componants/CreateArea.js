import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from '@mui/material';
function CreateArea(props){
    const [note , setNote]=useState({
        title:"",
        content:""
    });

    function handlChange(event){
        const {name,value}=event.target;

        setNote(prevNote =>{
            return {
                ...prevNote,
                [name]:value
            };
        });
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
         event.preventDefault();     
    }
    return(
        <div>
            <form className="create-note">
                <input type="text" 
                onChange={handlChange} 
                placeholder="Title" name="title"
                value={note.title} />

                <textarea name="content" onChange={handlChange} placeholder="Take a note..." rows="3"
                value={note.content}>
                </textarea>
                {/* <Zoom ib ={true}> */}
                <button onClick={submitNote}><AddIcon></AddIcon></button>
               {/* </Zoom> */}
            </form>
        </div>
    );
}
export default CreateArea;   
