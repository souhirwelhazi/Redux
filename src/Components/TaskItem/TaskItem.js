
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { update_task, delete_task, donne_task } from '../../Redux/Actions/actions';


const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    const handleDone = () => {
        dispatch(donne_task({ id: task.id }));
    };

    const handleDelete = () => {
        dispatch(delete_task({ id: task.id }));
    };

    const handleEdit = () => {
        
        const newDescription = prompt('Enter new description:', task.description);
        
        if (newDescription !== null) {
            dispatch(update_task({ id: task.id, description: newDescription }));
        }
    };

    return (
        <Card style={{ width: '19rem', margin: '20px', padding: '10px', backgroundColor: '#f7dfec' }}>
        <Card.Body>
            <Card.Text style={{ fontSize: '16px', marginBottom: '10px' }}>{task.description}</Card.Text>
            <Button
                style={{
                    padding: '8px 16px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    marginRight: '10px', 
                }}
                variant={task.done ? "success" : "warning"}
                onClick={handleDone}
            >
                {task.done ? "Done" : "Not Done"}
            </Button>
            <Button
                style={{
                    backgroundColor: '#007bff',
                    color: '#fff',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    marginRight: '10px',
                }}
                variant='primary'
                onClick={handleEdit}
            >
                Edit
            </Button>
            <Button
                style={{
                    backgroundColor: '#dc3545',
                    color: '#fff',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                }}
                variant='danger'
                onClick={handleDelete}
            >
                Delete
            </Button>
        </Card.Body>
    </Card>
    
    );
};

export default TaskItem;

