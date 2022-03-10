import '../App.css';
import {useContext, useState } from "react";
import {DataContext} from "../App"
import { FiDelete,FiEdit3,FiCheck } from "react-icons/fi";
import { FcOk } from "react-icons/fc";

const AllList = () =>{
    const {savedLists, setSavedLists, setAlert, 
        editListName, setEditListName,
        listIdEditing, setlistIdEditing,
        isFinished,
    } = useContext(DataContext)
    
    const [showEditing, setShowEditing] = useState(false)
    const [editClassName, setEditClassName] = useState("")
    
    // Handle deletion
    const deleteList=(listID)=>{
        setSavedLists(savedLists.filter((element)=>
            element.id !== listID
        ));
        setAlert({isShow:true,msg:"Delete Completed",className:"negative"})
    }

    // Handle Editng
    const editList = (listID,listName) =>{
        setEditListName(listName)
        setlistIdEditing(listID)
        setShowEditing(!showEditing)
        setEditClassName("editing")
    }
    const submitEditing = (index) =>{
        let tempSavedLists = [...savedLists]
        tempSavedLists[index].listName = editListName
        console.log(tempSavedLists);
        setSavedLists(tempSavedLists)
        setAlert({isShow:true,msg:"Edit Completed",className:"positive"})
        setEditClassName("")
    }
    
    // keep finshed list
    const finishedList = (listID,index) =>{
        if (listID === savedLists[index].id){
            let temp = [...savedLists]
            temp[index].isFinished = !isFinished
            setSavedLists(temp)
        }
        
        
    }

    return(
        <div className="all-list">
            {savedLists.length <= 0 && <h2>Empty List</h2>}
            {savedLists.length > 0 && <h2>All List</h2>}
            <div className='a-list-container'>
                
                {savedLists.map((element,index)=>{
                    return (
                        <div className={(element.id === listIdEditing)? 
                        `a-list ${editClassName}`:`a-list` } 
                        key={index}>

                            <button className='finished-btn'
                            onClick={()=>finishedList(element.id, index) }>
                                <FcOk/>
                            </button>
                            
                            <div className= {(element.isFinished)? `a-list-msg finished` 
                            : 
                            `a-list-msg`} key={index}>

                                {(!showEditing)?
                                    <p>{element.listName}</p>
                                :
                                    (element.id === listIdEditing) ? 
                                        <input type="text" className='edit-list' autoFocus
                                        onChange={(e)=>setEditListName(e.target.value)}
                                        value={editListName}
                                        />
                                    :
                                        <p>{element.listName}</p>
                               
                                }  
                            </div>

                            <div className='a-list-btn'>
                               
                                { (!showEditing) ?
                                <button type='button' className='edit-btn' 
                                    onClick={()=>editList(element.id,element.listName,index)} 
                                ><FiEdit3/></button>
                                :
                                (element.id === listIdEditing) ? 
                                <button type='submit' className='save-edit-btn' 
                                    onClick={()=>{
                                        setShowEditing(false) 
                                        setEditListName('') 
                                        setlistIdEditing(null)
                                        submitEditing(index)
                                    }}  // it will submit and save newlist
                                    
                                ><FiCheck/></button>
                                
                                :
                                <button type='button' className='edit-btn' 
                                    onClick={()=>editList(element.id,element.listName,index)} 
                                ><FiEdit3/></button>
                                }
                                <button onClick={()=>deleteList(element.id)} ><FiDelete/></button>
                            </div>
                            
                                
                            
                        </div>
                        

                        
                    )
                })}
                
            </div>
        </div>
    )
}

export default AllList