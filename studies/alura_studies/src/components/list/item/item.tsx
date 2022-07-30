import { ITask } from '../../../types/ITask'
import style from './Item.module.scss'

interface Props extends ITask {
    selectTask: (selectTask: ITask) => void
}

export default function Item({name, duration, selected, completed, id, selectTask } : Props) {
    
    return (
        <li className={ `${style.item} ${ selected ? style.itemSelecionado : '' } ${ completed ? style.itemCompletado : "" }` } 
            onClick={() => selectTask({
                name, 
                duration, 
                selected, 
                completed, 
                id
            })
        }>
            <h3>
                {name}
            </h3>
            <span>
                {duration}
            </span>
        </li>
    )
}

// export default function Item(task: { name: string, duration: string }) {
    // const { name, duration } = task
//     return (
//         <li className={style.item}>
//             <h3>
//                 {name}
//             </h3>
//             <span>
//                 {duration}
//             </span>
//         </li>
//     )
// }