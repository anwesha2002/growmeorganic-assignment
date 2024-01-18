import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {useLocalStorage} from "../Context/LocalStorageContext.tsx";

export function Navbar(){

    const { setCurrentUser } = useLocalStorage()

    function handleLogout(){
        setCurrentUser({
            name : "",
            email : "",
            mobileNumber : ""
        } )
    }

    return(
        <Box style={{backgroundColor : "grey"}} sx={{flexGrow : 1}}>
            <AppBar style={{backgroundColor : "#eceff1", color:"black", font:"bold"}} position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow : 1}}>Data</Typography>
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}