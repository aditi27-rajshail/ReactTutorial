import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
const CreateNote = (props) => {
    const [note, setnote]= useState({
        title:" ",
        content:" "
    })

    const InputEvent=(event)=>{
        const {name, value}=event.target;
        setnote((olddata)=>{
            return{
               ...olddata,
               [name]:value,
            }
        })

    }
    const Addevent=()=>{
        props.passNote(note)
        setnote({
                title:" ",
                content:" "
        });
    }
    return (
        <>
            <div className="main_div">
                <form>
                <div className="center_div">
                    <input type="text"
                        placeholder="Title"
                        autoComplete="off"
                        value={note.title}
                        name="title"
                        onChange={InputEvent}
                    />
                    <input
                        placeholder="Write a note..." 
                        value={note.content}
                        name="content"
                        onChange={InputEvent}
                        />
                    <Button onClick={Addevent}>
                    <AddIcon className="Add" />
                    </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default CreateNote;