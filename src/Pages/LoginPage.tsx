import {
    Box,
    Button,
    Card, CardContent,
    Grid, Typography,
} from "@mui/material";
import {LoginForm} from "../Components/LoginForm.tsx";
import { FormEvent} from "react";
import {useLocalStorage} from "../Context/LocalStorageContext.tsx";
import { useNavigate} from "react-router-dom";

export function LoginPage(){


    const { setCurrentUser, currentUser } = useLocalStorage()
    const navigate = useNavigate()

    function handleSubmit(e : FormEvent<HTMLFormElement>){
        e.preventDefault()
        try {
                if(currentUser.name.trim().length === 0 || currentUser.email.trim().length === 0 || currentUser.mobileNumber.trim().length === 0){
                    alert("Field is mandatory")
                }else{
                    const user = {
                        name : currentUser.name,
                        email : currentUser.email,
                        mobileNumber : currentUser.mobileNumber
                    }
                setCurrentUser(user)
                }
            navigate("/")
        }catch (err) {
            console.log(err)
        }
    }


    return(
        <Box sx={{justifyContent:"center" , alignItems:"center", display:"flex", bgcolor:"#e8eaf6", overflowY:"hidden"}}>
            <Card sx={{ width: 500, maxHeight : "full"}}>
                <CardContent>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <Grid direction="column" gap={3} container alignItems="center" justifyContent="center" sx={{minHeight:'100vh'}}>
                            <Typography variant="h4">Fill Your Details</Typography>
                            <LoginForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
                            <Button variant="contained" type="submit">Submit</Button>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Box>
    )
}