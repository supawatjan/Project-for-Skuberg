import './App.css';
import Form from './components/form';
import AllList from './components/list';
import Alert from './components/alert';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState, createContext} from 'react';


function App() {
  const [newList, setNewList] = useState("") //save new list
  
  //save all list
  const [savedLists, setSavedLists] = useState(()=>{
    const savedTodoLists = localStorage.getItem("savedLists")

    if (savedTodoLists) {
      return JSON.parse(savedTodoLists)
    } else {
      return []
    }
  }) 

  const [alert, setAlert] = useState({isShow:false,msg:"",className:""})
  const [editListName, setEditListName] = useState("") //save list name editing
  const [listIdEditing, setlistIdEditing] = useState(null)
  const [isFinished, setIsFinished] = useState(false)

  return (
    <DataContext.Provider value={
      {newList,setNewList,savedLists, 
        setSavedLists, alert, 
        setAlert,editListName, 
        setEditListName, listIdEditing,
        setlistIdEditing, isFinished, 
        setIsFinished,
      }
    }>
      <div className="app">
        <header>
          <h1>To Do List </h1>
          <div className='today'><FiChevronLeft/><h2> TODAY</h2> <FiChevronRight/></div>
        </header>
      

        <section>
          {alert.isShow&&<Alert/>}
          <Form/>
          <AllList/>

        </section>
      </div>
    </DataContext.Provider>
  );
}

export default App;
export const DataContext = createContext()