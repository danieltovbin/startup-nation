import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { SyntheticEvent, useState } from 'react';

const Navtabs = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }
  return (
    <Box sx={{ width: "100%" }}>
        <Tabs onChange={handleChange} value={value} >
        <Tab label="תיאור הפרויקט"/>
        <Tab label="תוכן הפרויקט"/>
        <Tab label="תשורות"/>
        <Tab label="פרטי היזם"/>
        </Tabs>
    </Box>
  )
}

export default Navtabs



