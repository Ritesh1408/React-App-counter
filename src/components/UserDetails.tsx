import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Typography, Paper } from "@mui/material";

const UserDetails: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Paper
      sx={{
        padding: 3,
        marginTop: 2,
        textAlign: "center",
      }}
      elevation={3}
    >
      <Typography variant="h5">User Details</Typography>
      {user.id ? (
        <>
          <Typography variant="body1"><strong>Name:</strong> {user.name}</Typography>
          <Typography variant="body1"><strong>Address:</strong> {user.address}</Typography>
          <Typography variant="body1"><strong>Email:</strong> {user.email}</Typography>
          <Typography variant="body1"><strong>Phone:</strong> {user.phone}</Typography>
          <Typography variant="body1"><strong>User ID:</strong> {user.id}</Typography>
        </>
      ) : (
        <Typography variant="body1" color="textSecondary">
          No user data available. Please enter your details in the form.
        </Typography>
      )}
    </Paper>
  );
};

export default UserDetails;
