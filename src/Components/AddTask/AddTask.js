import React, { useState } from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import {useDispatch} from "react-redux";
import {add_task} from "../../Redux/Actions/actions";
const AddTask = () => {
  const[description,setDescription]=useState("")
  const handleChange = (e) => {
    setDescription (e.target.value);
  };
  const dispatch = useDispatch();
   const hanleAddTask = () => {
 dispatch(add_task(description));
 };  
   return (
    <div style={{ margin:'20px', padding:'10px' , backgroundColor:' #e7bcda'}}>
         <Form>
            <Container>
                <InputGroup>
                <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="type tour Task ..."
          onChange={handleChange}
        />
        <Button
    variant="success"
    onClick={hanleAddTask}
    style={{
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        ':hover': {
            backgroundColor: '#218838',
        },
    }}
>
    ADD TASK
</Button>

                </InputGroup>
            </Container>
         </Form>
    </div>
  );
};
export default AddTask;
