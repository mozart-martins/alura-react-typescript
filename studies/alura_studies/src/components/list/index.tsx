import style from './List.module.scss'
import Item from "./item/item"
import { ITask } from '../../types/ITask'


interface Props {
    taskList: Array<ITask>,
    selectTask: (selectTask: ITask) => void
}


function List({ taskList, selectTask } : Props) {
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    taskList.map((task) => (
                        // <Item key={index} name={task.name} duration={task.duration}/>             
                        <Item 
                            selectTask={selectTask}
                            key={task.id} 
                            {...task}
                        />             
                    ))
                }
            </ul>
        </aside>
    )
}

export default List