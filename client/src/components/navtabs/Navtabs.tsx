import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navtabs = () => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }
  return (
    <Box sx={{ width: "100%", padding: "0 calc((100% - 818px) / 2) !important", margin: 0 }}>
        <Tabs onChange={handleChange} value={value} >
        <Tab label="תיאור הפרויקט" onClick={()=> navigate('/descriptionProject')}/>
        <Tab label="תוכן הפרויקט" onClick={()=> navigate('/contentEdit')}/>
        <Tab label="תשורות" onClick={()=> navigate('/Submissions')}/>
        <Tab label="פרטי היזם" onClick={()=> navigate('/DeveloperDetails')}/>
        </Tabs>
    </Box>
  )
}

export default Navtabs



