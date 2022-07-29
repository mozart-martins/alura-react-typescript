import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Form from '../components/form';
import List from '../components/list';
import { ITask } from '../types/ITask';
import style from './App.module.scss'

function App() {
  const [taskList, setTask] = useState<ITask[]>([])
  const [selected, setSelected] = useState<ITask>()

  function selectTask(selected: ITask) {
    setSelected(selected)
    setTask(lastTasks => lastTasks.map(task => ({
      ...task,
      selected: task.id == selected.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Form setTask={setTask}/>
      <List 
        taskList={taskList}
        selectTask={selectTask}
      />
      <Cronometro selected={selected}/>  
    </div>
  );
}

export default App;
