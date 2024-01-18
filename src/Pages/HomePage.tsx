import {DataTable} from "../Components/DataTable.tsx";
import {DepartmentCheckbox} from "../Components/DepartmentCheckbox.tsx";
import {Navbar} from "../Components/Navbar.tsx";
import {Container} from "@mui/material";

export function HomePage(){
    return(
        <>
            <Navbar/>
            <Container style={{marginTop : "5%"}} maxWidth="xl">
                <DataTable/>
                <DepartmentCheckbox/>
            </Container>
        </>
    )
}