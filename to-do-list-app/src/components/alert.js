import '../App.css';
import {useContext, useEffect } from "react";
import {DataContext} from "../App"
import { FiCheckCircle} from "react-icons/fi";


const Alert =()=>{
    const {alert, setAlert,savedLists} = useContext(DataContext)
    
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setAlert({isShow:false,msg:"",className:""})
        },3000)
        
        return()=> clearTimeout(timeOut)
        // eslint-disable-next-line
    },[savedLists])
    
    return(
        <div className={`alert-container ${alert.className}`}>
            <FiCheckCircle/>
            <span>{alert.msg}</span>
        </div>
    )
}

export default Alert