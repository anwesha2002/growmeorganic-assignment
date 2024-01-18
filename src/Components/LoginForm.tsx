import {FormControl, FormHelperText, FormLabel, TextField} from "@mui/material";
import {Dispatch, SetStateAction} from "react";
import {CurrentuserMoodel} from "../Model/CurrentuserMoodel.ts";

type LoginFormProps = {
    currentUser: CurrentuserMoodel ,
    setCurrentUser : Dispatch<SetStateAction<CurrentuserMoodel>>
}

export function LoginForm({ currentUser, setCurrentUser } : LoginFormProps){


    return(
        <>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <TextField value={currentUser.name} onChange={(e)=>{setCurrentUser({...currentUser, name : e.target.value})}} required type="text" label="required"/>
                <FormHelperText>We'll never share your name.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Phone number</FormLabel>
                <TextField value={currentUser.mobileNumber} onChange={(e)=>{setCurrentUser({...currentUser, mobileNumber : e.target.value})}} required type="text" label="required"/>
                <FormHelperText>We'll never share your phone number.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <TextField value={currentUser.email} onChange={(e)=>{setCurrentUser({...currentUser, email : e.target.value})}} required type="email" label="required"/>
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
        </>
    )
}