import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState} from "react";
import {CurrentuserMoodel} from "../Model/CurrentuserMoodel.ts";

type LocalStorageContexProps = {
    selectItems : string[],
    setSelectItems : Dispatch<SetStateAction<string[]>>
    setCurrentUser : Dispatch<SetStateAction<CurrentuserMoodel >>
    currentUser : CurrentuserMoodel
}

type LocalStorageProviderProps = {
    children : ReactNode
}


const LocalStorageContext = createContext({} as LocalStorageContexProps)
export function useLocalStorage(){
    return useContext(LocalStorageContext)
}
export function LocalStorageProvider({children} : LocalStorageProviderProps){

    const [currentUser, setCurrentUser] = useState<CurrentuserMoodel >(() :
    {
        name : "",
        email : "",
        mobileNumber : ""
    }   => {
        const currentUsers = localStorage.getItem("currentUser-detail");
        if(currentUsers == null) return {
            name : "",
            email : "",
            mobileNumber : ""
        }
        return JSON.parse(currentUsers)

    })

    useEffect(() => {
        localStorage.setItem("currentUser-detail", JSON.stringify(currentUser))
    }, [currentUser]);

    const [selectItems, setSelectItems] = useState<string[]>(()=>{
        const checkedItems = localStorage.getItem("department-select-checkBoxes");
        if(checkedItems == null) return []
        return JSON.parse(checkedItems)
    })

    useEffect(() => {
        localStorage.setItem("department-select-checkBoxes", JSON.stringify(selectItems))
    }, [selectItems]);

    return(
        <LocalStorageContext.Provider value={{selectItems, setSelectItems, setCurrentUser, currentUser}}>
            {children}
        </LocalStorageContext.Provider>
    )
}