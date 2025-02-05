import React, { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

const UserForm: React.FC = () => {
  const dispatch = useDispatch();
  const [user, setUserState] = useState({ name: "", address: "", email: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(setUser({ ...user, id: Date.now().toString() }));
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <TextField fullWidth margin="normal" name="name" label="Name" onChange={handleChange} />
      <TextField fullWidth margin="normal" name="address" label="Address" onChange={handleChange} />
      <TextField fullWidth margin="normal" name="email" label="Email" onChange={handleChange} />
      <TextField fullWidth margin="normal" name="phone" label="Phone" onChange={handleChange} />
      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>Save</Button>
    </Paper>
  );
};

export default UserForm;
