import '../App.css';
import { useState,useContext, useEffect } from "react";
import {DataContext} from "../App"
import { v4 as uuidv4 } from 'uuid';

const Form =()=>{
   
    const {newList,setNewList,savedLists, setSavedLists, setAlert,
        isFinished,
    
    } = useContext(DataContext)
    const [disSubmit, setDisSubmit] = useState(false)

    const submitNewList = (e) =>{
        e.preventDefault()
        let newlist = {
            id: uuidv4(),
            listName: newList,
            isFinished: isFinished
        }
        setSavedLists([newlist, ...savedLists])
        setNewList("") //clear form inputs
        setAlert({isShow:true,msg:"Save Completed",className:"positive"})
    }
    
    useEffect(()=>{
        if(!newList){
            setDisSubmit(true)
        }else{
            setDisSubmit(false)
        }            
    },[newList,disSubmit])

    useEffect(()=>{
        localStorage.setItem("savedLists", JSON.stringify(savedLists))
    },[savedLists])

    return(
        <div className="form-field">
            <form onSubmit={submitNewList}>
                <div className='input-field'>
                    <input className="text-input" type="text"
                        onChange={(e)=>setNewList(e.target.value)}
                        value={newList}
                        autoFocus
                    />
                </div>
                <div className='submit-field'>
                    <button className="submit-btn btn" type="submit" disabled={disSubmit}> Create list</button>
                </div>


            </form>
        </div>
    )
}

export default Form