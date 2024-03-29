import { ReactNode, createContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';


type AppContext={
    toDoList:ToDoList[],
    setTodoList:React.Dispatch<React.SetStateAction<ToDoList[]>>
    date:Date
    setDate:React.Dispatch<React.SetStateAction<Date>>
}

export const AppContext=createContext<AppContext>({
    date:new Date(),
    setDate:()=>{},
    toDoList:[],
    setTodoList:()=>{}
    
})

export type ToDoList={
    id:string,
    date:Date,
    title:string,
    priority:string,
    isCheck:boolean
    isFavorite:boolean,
    isArchive:boolean
}
export const AppDataProvider=({children}:{children:ReactNode})=>{
    const [toDoList,setTodoList]=useState<ToDoList[]>([])
    const [date,setDate]=useState<Date>(new Date())

    useEffect(()=>{
       
        firestore().collection('ToDoList').onSnapshot((onSnap)=>{
            const data:ToDoList[]=[]
            onSnap.forEach(e=>data.push(e.data()))
            setTodoList(data)
        })
        
        
    },[])


     return <AppContext.Provider value={{toDoList,setTodoList,date,setDate}}>
        {children}
    </AppContext.Provider>
}