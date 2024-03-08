import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem';
import "./style.css";
import { setFilter } from '../../Redux/Actions/actions';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state);

  const handleFilter = (filterValue) => {
    dispatch(setFilter(filterValue));
  };

  return (
    <div>
      <div>
        <button
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '5px',
            transition: 'background-color 0.3s ease',
            backgroundImage: 'linear-gradient(45deg, #007bff, #9b59b6)'
          }}
          onClick={() => handleFilter('all')}
        >
          All
        </button>
        <button
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '5px',
            transition: 'background-color 0.3s ease',
            backgroundImage: 'linear-gradient(45deg, #007bff, #9b59b6)'
          }}
          onClick={() => handleFilter('done')}
        >
          Done
        </button>
        <button
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '5px',
            transition: 'background-color 0.3s ease',
            backgroundImage: 'linear-gradient(45deg, #007bff, #9b59b6)'
          }}
          onClick={() => handleFilter('not done')}
        >
          Not Done
        </button>
      </div>

      <div className='tasks'>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
