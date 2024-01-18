import departments from "../Data/data/Dept-SubDept.json";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Checkbox as CheckboxMUI,
    FormControlLabel, Typography
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {useLocalStorage} from "../Context/LocalStorageContext.tsx";

type checkBoxProps = {
    name : string | string[],
    value : boolean,
    updateValue : (value : boolean, name : string[] | string) => void
}

export function DepartmentCheckbox(){
    const { selectItems, setSelectItems } = useLocalStorage()
    //const [selectItems, setSelectItems] = useState<string[] >([])

    function handleSelect(value : boolean, name : string | string[]){
        if(typeof name === "string"){
            if(value){
                setSelectItems([...selectItems, name])
            }else{
                setSelectItems(selectItems.filter(items=> items!== name))
            }
        }else{
            let filteredItems : string[] = []
            if(value){
                filteredItems = name.filter(items => {return selectItems.indexOf(items) === -1})
                setSelectItems(items=> [...items, ...filteredItems])
            }else {
                filteredItems = selectItems.filter(items => {
                    return name.indexOf(items) === -1
                })
                setSelectItems(filteredItems)
            }
        }
    }

    return(
        <>
            <Typography sx={{textAlign : "center", mt:5}} variant="h6">Department</Typography>
            {departments.map(dept => {
                return (
                    <Box key={dept.department} sx={{m:3}}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon/>}
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            updateValue={handleSelect}
                                            value={dept.sub_departments.every((ele)=>selectItems.includes(ele))}
                                            name={dept.sub_departments}
                                        />
                                    }
                                    label={dept.department}
                                />
                            </AccordionSummary>
                            <AccordionDetails>
                                {
                                    dept.sub_departments.map(subdept=>{
                                        return(
                                            <Box key={subdept} sx={{ml:3}}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            name={subdept}
                                                            value={selectItems.includes(subdept)}
                                                            updateValue={handleSelect}
                                                        />
                                                    }
                                                    label={subdept}
                                                />
                                            </Box>
                                        )})
                                }
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                )
            })}
        </>
    )
}

export function Checkbox({name, value, updateValue} : checkBoxProps){

    function handleOnChange(){
        updateValue(!value,name)
    }

    return(
        <>
            <CheckboxMUI checked={value} value={name} onChange={handleOnChange}/>
        </>
    )
}