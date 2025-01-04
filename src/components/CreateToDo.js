import React, { useState, useEffect } from "react";

import {
 Container,
 TextField,
 Button,
 List,
 ListItem,
 ListItemText,
 IconButton,
 Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";



  
  
export default function CreateToDO() {

 const [tasks, setTasks] = useState([]);

 const [task, setTask] = useState("");



 // Load tasks from local storage on component mount

 useEffect(() => {

  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  setTasks(savedTasks);

 }, []);



 // Save tasks to local storage when tasks change

 useEffect(() => {

  localStorage.setItem("tasks", JSON.stringify(tasks));

 }, [tasks]);



 const addTask = () => {
  if (task.trim()) {
   setTasks([...tasks, task]);
   setTask("");
  }

 };

 const deleteTask = (index) => {
  const updatedTasks = tasks.filter((_, i) => i !== index);
  setTasks(updatedTasks);
 };

 return (

  <Container maxWidth="sm" style={{ marginTop: "50px" }}>
   <Typography variant="h3" gutterBottom sx={{textAlign:"center",color:"orange"}}>
    To-Do App
   </Typography>
   <TextField label="New Task" variant="outlined" fullWidth value={task} onChange={(event) => setTask(event.target.value)}/>

   <Button variant="contained" color="warning"  onClick={addTask} style={{ marginTop: "10px", }} fullWidth>
    Add Task
   </Button>
   <List>
    {tasks.map((task, index) => (
     <ListItem

      key={index}

      secondaryAction={

       <IconButton edge="end" onClick={() => deleteTask(index)}>

        <DeleteIcon />

       </IconButton>

      }

     >

      <ListItemText primary={task} />

     </ListItem>

    ))}

   </List>

  </Container>

 );

}





