import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to the React Project.
      </Typography>
      <Typography variant="h6" gutterBottom>
        A simple app with a counter, user data form, and rich text editor.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/dashboard")}>
        Go to Dashboard
      </Button>
    </Box>
  );
};

export default Home;
