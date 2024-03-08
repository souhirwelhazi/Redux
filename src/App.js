import React from 'react';
import AddTask from './Components/AddTask/AddTask';
import TaskList from './Components/TaskList/TaskList';
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <AddTask/>
      <TaskList/>
    </div>
  );
};
export default App ; 
