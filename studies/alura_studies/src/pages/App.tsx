import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Form from '../components/form';
import List from '../components/list';
import { ITask } from '../types/ITask';
import style from './App.module.scss'

function App() {
  const [taskList, setTask] = useState<ITask[]>([])
  return (
    <div className={style.AppStyle}>
      <Form setTask={setTask}/>
      <List taskList={taskList}/>
      <Cronometro />  
    </div>
  );
}

export default App;
