import React, { useState } from "react";
import { Box, CssBaseline, Drawer, AppBar, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Dashboard as DashboardIcon } from "@mui/icons-material";
import Counter from "../components/Counter";
import UserForm from "../components/UserForm";
import RichTextEditor from "../components/RichTextEditor";
import UserDetails from "../components/UserDetails";

const drawerWidth = 240;

const Dashboard: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState("Counter");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            React Project Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" sx={{ width: drawerWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" } }}>
        <Toolbar />
        <List>
          {["Counter", "User Form", "Rich Text Editor", "User Details"].map((text) => (
            <ListItem 
              component="div"
              key={text}
              onClick={() => setSelectedPage(text)}
              sx={{ cursor: "pointer", padding: "10px" }} // ✅ Fix applied
            >
              <ListItemIcon>{text === "Counter" ? <Home /> : <DashboardIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {selectedPage === "Counter" && <Counter />}
        {selectedPage === "User Form" && <UserForm />}
        {selectedPage === "Rich Text Editor" && <RichTextEditor />}
        {selectedPage === "User Details" && <UserDetails />}
      </Box>
    </Box>
  );
};

export default Dashboard;
