import style from './List.module.scss'
import Item from "./item/item"
import { ITask } from '../../types/ITask'



function List({ taskList }: { taskList: Array<ITask> }) {
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    taskList.map((task, index) => (
                        // <Item key={index} name={task.name} duration={task.duration}/>             
                        <Item key={index} {...task}/>             
                    ))
                }
            </ul>
        </aside>
    )
}

export default List