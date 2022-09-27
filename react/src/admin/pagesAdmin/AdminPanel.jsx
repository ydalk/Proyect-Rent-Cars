import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, Tabs } from "@mui/material";
import React, { useContext, useState } from "react";

import { Wrapper, DivTab } from "./AdminStyle";
import { TableDataProduct } from "./components/tableData/tableProduct/TableDataProduct";
import {  TableDataUser } from "./components/tableData/tableUser/TableDataUser";

export const AdminPanel = () => {

 
    const mystyle = {
      margin: "10px auto",
      color: "#2497A0",
      fontSize: "15px",
      fontWeight: "700"
    };

    const mystyleTab = { 
      
    }
    const [value, setValue] = useState('1');
  
    const handleChange = (event: SyntheticEvent, newValue) => {
      setValue(newValue);
    };


  return (
    <>
      <Wrapper >
        <TabContext value={value}  >
        
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab style={mystyle} label="Productos" value="1" />
              <Tab style={mystyle} label="Categorias" value="2" />
              <Tab style={mystyle} label="Usuarios" value="3" />
            </TabList>
          </Box>
          {/* style={mystyleTab} */}
          <DivTab >
          <TabPanel  value="1"><TableDataProduct value={"1"}/> </TabPanel>
          <TabPanel value="2">Item Categorias</TabPanel>
          <TabPanel value="3"><TableDataUser value={"3"}/></TabPanel>
          </DivTab>
         
        </TabContext>
      </Wrapper>
    </>
  );
};
