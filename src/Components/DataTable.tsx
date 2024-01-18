import {useEffect, useState} from "react";
import {DataModel} from "../Model/DataModel.ts";
import {TableDataApiFetch} from "../Data/Network/TableDataApiFetch.tsx";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Box, Typography} from "@mui/material";



const columns : GridColDef[] = [
    {
        field : 'userId',
        headerName : 'User ID',
        width : 90
    },
    {
        field : 'id',
        headerName : 'ID',
        width : 90
    },
    {
        field : 'title',
        headerName : 'Title',
        width : 500,
        editable: true,
    },
    {
        field : 'body',
        headerName : 'Body',
        width:1400,
        editable: true,
    }
]

export function DataTable(){
    const [data, setData] = useState<DataModel[]>([])

    useEffect(() => {
        (async ()=>{
            try {
                const response= await TableDataApiFetch()
                setData(response.data)
            }catch (err){
                console.log(err)
            }
        })()
    }, []);

    

    return(
        <>
            <div>
                <Box sx={{height:"auto", maxWidth: "100%", m:3, mb:3 }}>
                <Typography sx={{textAlign : "center", my:5}} variant="h6">Data Table</Typography>
                    <DataGrid
                        columns={columns}
                        rows={data}
                        sx={{overflow: "auto", p:2}}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10,
                                },
                            },
                        }}
                        pageSizeOptions={[10]}
                    />
                </Box>
            </div>
        </>
    )
}